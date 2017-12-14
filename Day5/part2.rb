instructions = File.readlines('input.txt').map(&:to_i)
# instructions = [0, 3,  0,  1,  -3 ]
currentIndex = 0
jumpCount = 0

 while(1)
    previousIndex = currentIndex
    currentInstruction = instructions[currentIndex]
    currentIndex += currentInstruction
    # puts "--------------"
    # puts "Instructions: #{instructions}"
    # puts "Start Index: #{previousIndex} ---> Instruction: #{currentInstruction} ---> Next Index: #{currentIndex}"
    
    if(currentInstruction >= 3)
        instructions[previousIndex] = currentInstruction-1
    else
        instructions[previousIndex] = currentInstruction+1
    end
    # puts "Changed previous instruction at #{previousIndex} from  #{currentInstruction} to #{instructions[previousIndex]}"
    jumpCount += 1
    break if currentIndex < 0 || currentIndex >= instructions.length
end
puts jumpCount
