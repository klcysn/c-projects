def find() :
    import random
    count = 0
    number = random.randrange(0, 101)
    while True :
        count += 1
        guess = int(input("Guess a number : "))
        if guess == number :
            print(f"You are the winner :D. You guest after {count} times!")
            answer = input("You wanna play again?(Y/N) ").lower().strip()
            while True :
                if answer == "y" :
                    return find()
                elif answer == "n" :
                    return "Thanks for game!"
                else :
                    answer =input("It is not a valid input, You wanna play again?(Y/N) ")
        elif guess > number :
            print("I am thinking about lower number")
        elif guess < number :
            print("I am thinking about higher number")
        elif guess == "" :
            print("Write The Number")
            

find()
