# Exercise 1: Currencies

# Goal: Implement dunder methods for a Currency class to handle string representation, integer conversion, addition, and in-place addition.



# Key Python Topics:

# Dunder methods (__str__, __repr__, __int__, __add__, __iadd__)
# Type checking (isinstance())
# Raising exceptions (raise TypeError)


# Instructions:

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

#     #Your code starts HERE

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        
        return NotImplemented
    
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self

        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            self.amount += other.amount
            return self

        return NotImplemented
        
    

# Using the code above, implement the relevant methods and dunder methods which will output the results below.

# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# #the comment is the expected output
print(c1)
# # '5 dollars'

print(int(c1))
# # 5

print(repr(c1))
# # '5 dollars'

print(c1 + 5)
# # 10

print(c1 + c2)
# # 15

print(c1) 
# # 5 dollars

c1 += 5
print(c1)
# # 10 dollars

c1 += c2
print(c1)
# # 20 dollars

# print(c1 + c3)
# # TypeError: Cannot add between Currency type <dollar> and <shekel>
# #comment the print above before you run the file for next exercises (since the error will crash your file)


# Exercise 2: Import

# Goal: Create a module with a function and import it into another file.



# Instructions:

# Create a func.py file with a function that sums two numbers and prints the result. Then, import and call the function from exercise_one.py.



# Key Python Topics:

# Modules (creating and importing)
# Functions


# Step 1: Create func.py

# Create a file named func.py.
# Define a function inside that file that takes two numbers as arguments, sums them, and prints the result.


# Step 2: Create exercise_one.py

# Create a file named exercise_one.py.
# Import the function from func.py using one of the import syntaxes provided in the instructions.
# Call the imported function with two numbers.