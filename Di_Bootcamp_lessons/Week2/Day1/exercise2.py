people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filter_obj = filter(lambda s: len(s) <= 4, people)

print(f"hello:",list(filter_obj))
