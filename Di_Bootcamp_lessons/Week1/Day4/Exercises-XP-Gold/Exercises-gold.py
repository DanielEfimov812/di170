# Exercise 1: Concatenate Lists

# Instructions

# Write code that concatenates two lists together without using the + sign.


list1 = [1 ,5 ,7]
list2 = [7, 99, 65]

for item in list2:
    list1.append(item)

print(list1)


# Exercise 2: Range Of Numbers

# Instructions

# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.


list_items = range(1500, 2501)
for item in list_items:
    if item % 5 == 0 or item % 7 == 0:
        print(item)


# Упражнение 3: Проверьте Индекс

# Инструкции

# Использование этой переменной

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Спросите у пользователя его имя, если его имя есть в списке имен, распечатайте индекс первого вхосхода имени.

# Example: if input is 'Cortana' we should be printing the index 1
user_input = input("name: ")
for name in names:
    if user_input == name:
        print(f"index", names.index(name))
