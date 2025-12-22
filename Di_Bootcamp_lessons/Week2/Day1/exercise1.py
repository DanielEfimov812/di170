# def say_hello(username, language):
#     if language == "EN":
#         print(f"Hellow", {username})
#     elif language == "FR":
#         print(f"Bonjour", {username})
#     else:
#         print


# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

# For example:

def calculation(a, b):
    # Your Code
    # minus_numb = (a - b), (a + b)
    # return minus_numb
    return (a-b),(a+b)

minus, plus = calculation(40, 10)
print(minus, plus)








