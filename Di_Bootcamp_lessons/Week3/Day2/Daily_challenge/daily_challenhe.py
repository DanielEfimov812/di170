import math
class Pagination:
    def __init__(self, items = None, page_size = 10):
        if items is None:
            items = []

        self.current_idx = 0
        self.items = items
        self.page_size = int(page_size)

        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

