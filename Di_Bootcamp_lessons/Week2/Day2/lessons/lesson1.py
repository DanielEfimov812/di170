picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
]

def show_tree():
    for image in picture:
        for pixel in image:
            if (pixel):
                print('*', end = "")
            else:
                print(' ', end="")
        print('')

show_tree()


greet = 'helloooo'
print(greet.capitalize())

greet = 'helloooo'
print(greet[0:5])

quote = 'to be or not to be'
print(quote.upper())

quote = 'to be or not to be'
print(quote.lower())

quote = 'to be or not to be'
print(quote.find('be'))

quote = 'to be or not to be'
print(quote.replace('be', 'me'))


def test(a):
    '''
    dogstring for example
    '''
    print(a)

test("!!!!!")


# clean code
def is_odd_or_even(num):
    return num % 2 == 0

print(is_odd_or_even(3))


list_1 = [1, 2, 3, 4, 5]
list_2 = ["a", "b", "c", "d", "e", 'f']

# first method

# mix_list = dict(zip(list_1,list_2))

# print(mix_list)

# second method

# for i in range(len(list_1)):
#     mix_list[list_1[i]] = list_2[i]

# print(mix_list)

# third metod

# mix_list = {list_1[i]:list_2[i] for i in range(len(list_1))}

# print(mix_list)


# *args. **kwargs

def super_funk(*args, **kwargs):
    print(kwargs)
    return sum(args)

print(super_funk(1,2,3,4,5, num1=5, num2=10))


# matrix

matrix = [
    [1,2,3],
    [2,4,6],
    [7,8,9]
]

print(matrix[1][2])




