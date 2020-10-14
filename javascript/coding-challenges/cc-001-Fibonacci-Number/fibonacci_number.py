number = int(input("Please enter your numbers of fibonacci : "))

fibonacci = []
for i in range(-2, number-2) :
    if i < 0 :
        fibonacci.append(1)
    else  :
        fibonacci.append(fibonacci[i] + fibonacci[i + 1])
fibonacci.append(0)

print(sorted(fibonacci))
