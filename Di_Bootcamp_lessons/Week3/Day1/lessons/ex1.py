class Circle:
    def __init__(self):
        self.color = "red"

class NewCircle(Circle):
    def __init__(self):
        self.color = "blue"

nc = NewCircle
print(nc.color)
# >> What will be the output ?