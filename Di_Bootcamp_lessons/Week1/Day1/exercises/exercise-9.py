user_number = input('a number between 1 and 100 ')
if int(user_number) % 3 == 0:
    print('Fizz')
elif int(user_number) % 5 == 0:
    print('Buzz')
elif int(user_number) % 3 == 0 and int(user_number) % 5 == 0:
    print('FizzBuzz')