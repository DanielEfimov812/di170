# Exercise 2 : What Is The Season ?

# Instructions

# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

user_month = input("chose month from (1 to 12) ")
if int(user_month) >= 3 and int(user_month) <= 5:
    print('spring')
elif int(user_month) >= 6 and int(user_month) <= 8:
    print("summer")
elif int(user_month) >= 9 and int(user_month) <= 11:
    print("authumn")
elif int(user_month) <= 12 and int(user_month) <= 2:
    print("winter")