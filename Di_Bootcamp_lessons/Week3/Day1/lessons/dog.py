class Animal():
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked, WAF !")
