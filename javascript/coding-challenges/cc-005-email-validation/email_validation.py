mail = input("Please enter your mail!")

if mail.find("@") == -1 :
    print("Your mail doesn't have '@', please write your mail again")
elif mail.split("@")[1] == "" : 
    print("Your mail doesn't have 'website', please write your mail again")
elif mail.split("@")[1].find(".") == -1 or mail.split("@")[1].split(".")[1] == "" :
    print("Your mail doesn't have 'extension', please write your mail again")
elif len(mail.split("@")[1].split(".")[1]) > 3 :
    print("Your mail extension is not correct, please write your mail again")
else :
    print("Your mail is valid!")