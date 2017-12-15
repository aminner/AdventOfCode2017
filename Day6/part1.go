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
	fmt.Print(string(dat))

	//Convert string array to int array for easier handling
	sArray := StringArrayToIntArray(strings.Split(string(dat), "\t"))

	//Create list to put combination into
	var combinations []string

	var arrayString string
	arrayString = IntArrayToString(sArray)
	count := 0
	for ok := true; ok; ok = StringInSlice(arrayString, combinations) {
		//Add initial data set to combination
		combinations = append(combinations, arrayString)

		//set current index to start processing
		index := FindMax(sArray)

		//current data to redistribute
		sArray = DistributeData(sArray, index)
		arrayString = IntArrayToString(sArray)
		fmt.Println(arrayString)
		count++
	}
}

func DistributeData(array []int, index int) []int {
	totalAmountToAdd := array[index]
	amountToAdd := int(math.Floor(float64(array[index] / len(array))))
	fmt.Println("Total amount to add: ", totalAmountToAdd, " - amountToAdd: ", amountToAdd)
	for i := 0; i < len(array); i++ {
		fmt.Println("iteration: ", i, " len(array)", len(array), " value: ", array[i])
		if index+i >= len(array) {
			index = int(math.Mod(float64(i+index), float64(len(array))))
		} else {
			index = index + i
		}
		fmt.Print("Determined index: ", index, " - Value Before ", array[index])
		if totalAmountToAdd < amountToAdd && totalAmountToAdd > 0 {
			array[index] += totalAmountToAdd
		} else {
			array[index] += amountToAdd
			totalAmountToAdd -= amountToAdd
		}
		fmt.Println(" - Value After ", array[index])
		// fmt.Println("total amount: ", totalAmountToAdd)
	}
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
	for i := 1; i < len(sArray); i++ {
		if sArray[i] > max {
			max = sArray[i]
		}
	}
	return max
}

func StringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}
