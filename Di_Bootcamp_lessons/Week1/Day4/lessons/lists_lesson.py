li = [1,2,3,4,5]
li2 = ["a", "b", "c"]
li3 = [1, 2.5, "a", True]


# data structure

amazon_cart = ['notebooks', 'sunglasses']
print(amazon_cart[0])


# list slising

amazon_cart = [
    'notebooks', 
    'sunglasses',
    'toys',
    'grapes'
]

amazon_cart[0] = 'laptop'
new_cart = amazon_cart[:] # new_cart coping a amazon_cart
new_cart[0] = 'gum'
print(new_cart)
print(amazon_cart)



basket = [1,2,3,4,5]

# adding

basket.insert(2, 10)
basket.append(100)
new_list = basket
new_list.extend([88,99,77])
print(basket)
print(new_list)


# removing

basket.pop()
basket.pop()
basket.pop(0)
print(basket)

basket.remove(100)
print(basket)

# new_list = basket.clear()   #removes all list
print(basket)

print(sorted(basket))


# more tips


basket.sort()
basket.reverse()
print(basket)

new_basket = basket[:]
new_basket.extend([2,40,77])
print(new_basket)
print(len(new_basket))


print(list(range(1,30)))




