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