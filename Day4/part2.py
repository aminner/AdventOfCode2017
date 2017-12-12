import csv
import collections

def anydup(thelist):
    seen = set()
    for x in thelist:
        if x in seen: return True
        seen.add(x)
    return False

filename = 'input.txt'
result = list(csv.reader(open(filename)))
validPasscodes = 0 
for line in result:
    print(line)
    words = line[0].split()
    sortedWords = []
    for word in words:
        sortedWord = ''.join(sorted(word))
        sortedWords.append(sortedWord)
    print(sortedWords)
    if not anydup(sortedWords):
        validPasscodes += 1

print(validPasscodes)