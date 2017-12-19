package main

import (
	"fmt"
	"io/ioutil"
	"math"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	//Import input data from input file
	dat, err := ioutil.ReadFile("input.txt")
	check(err)
	// fmt.Print(string(dat))
	// dat := "0\t2\t7\t0"
	//Convert string array to int array for easier handling
	sArray := StringArrayToIntArray(strings.Split(string(dat), "\t"))

	//Create list to put combination into
	var combinations []string

	var arrayString string
	arrayString = IntArrayToString(sArray)
	count := 0
	firstStringFoundInSlice := false
	for ok := true; ok; ok = !StringInSliceTwice(arrayString, combinations) {
		if StringInSlice(arrayString, combinations) && !firstStringFoundInSlice {
			firstStringFoundInSlice = true
			count = 0
		}

		//Add initial data set to combination
		combinations = append(combinations, arrayString)

		//set current index to start processing
		index := FindMax(sArray)
		fmt.Println("Max Index", index)

		//current data to redistribute
		sArray = DistributeData(sArray, index)
		arrayString = IntArrayToString(sArray)
		count++
	}
	fmt.Println("Count: ", count)
}

func DistributeData(array []int, index int) []int {
	totalAmountToAdd := array[index]
	array[index] = 0
	for i := 0; i < totalAmountToAdd; i++ {
		if index+1 >= len(array) {
			index = int(math.Mod(float64(1+index), float64(len(array))))
			fmt.Println(index, "- mod")
		} else {
			index++
			fmt.Println(index, "- +1")
		}

		array[index]++
	}
	fmt.Println()
	fmt.Println("Array: ", array)
	return array
}

func StringArrayToIntArray(array []string) []int {
	var t2 = []int{}
	for _, i := range array {
		j, err := strconv.Atoi(strings.TrimSpace(i))
		if err != nil {
			panic(err)
		}
		t2 = append(t2, j)
	}
	return t2
}

func IntArrayToString(a []int) string {
	b := ""
	for _, v := range a {
		if len(b) > 0 {
			b += ","
		}
		b += strconv.Itoa(v)
	}
	return b
}

func FindMax(sArray []int) int {
	max := sArray[0]
	maxIndex := 0
	for i := 1; i < len(sArray); i++ {
		if sArray[i] > max {
			max = sArray[i]
			maxIndex = i
		}
	}
	return maxIndex
}

func StringInSliceTwice(a string, list []string) bool {
	found := 0
	for _, b := range list {
		if b == a {
			found++
		}
	}
	return found >= 2
}

func StringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}
