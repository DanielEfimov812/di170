# Exercise 1: Hello World
# Instructions
# Print the following output using one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

print('Hello world\n' * 4)

# Exercise 2: Some Math

# Instructions

# Write code that calculates the result of:

# (99^3)*8 (meaning 99 to the power of 3, times 8).

print((99**3) * 8)

# Exercise 3: What Is The Output?

# Instructions

# Predict the output of the following code snippets:
# Coment what is your guess, then run the code and compare

# Example:
# >>> 15 < 8 #False

print(5 < 3)  #False
print(3 == 3)  #True
print(3 == "3")  #False
print("3" > 3)  #TypeError
print("Hello" == "hello")  #False


#  Exercise 4: Your Computer Brand

# Instructions

# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable, print a sentence that states the following:
# "I have a <computer_brand> computer."

computer_brand = 'Mac'
print("I have a " + computer_brand + " computer.")


# Exercise 5: Your Information

# Instructions

# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
# Have your code print the info message.
# Run your code.

name = "Daniel"
age = 28
shoe_size = 42
info = "My name is " + name +  " and i am " + str(age) + "years old, and i have " + str(shoe_size) + " shoe size"
print(info) 

# Exercise 6: A & B

# Instructions

# Create two variables, a and b.
# Each variable’s value should be a number.
# If a is bigger than b, have your code print "Hello World".

a = 10
b = 5
if a > b:
    print("Hellow World")


# Exercise 7: Odd Or Even

# Instructions

# Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Give me a number "))
if number % 2 == 0:
    print("You gave odd number")
else:
    print("You gave even number")

# Exercise 8: What’s Your Name?

# Instructions

# Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.
    
my_name = "Daniel"
user_name = input("What is your name ")
if my_name == user_name:
    print("You still my name")
else:
    print("Nice to meet you " + user_name)

# Exercise 9: Tall Enough To Ride A Roller Coaster

# Instructions

# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.

user_height = input("Give me your height in centimeters ")
if int(user_height) > 145:
    print("You are tall enough to ride")
else:
    print("You need to grow some more to ride")