from db import get_connection
from menu_item import MenuItem


class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "SELECT item_name, item_price FROM Menu_Items WHERE item_name = ?",
            (name,)
        )

        result = cursor.fetchone()
        conn.close()

        if result:
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all_items(cls):
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT item_name, item_price FROM Menu_Items")
        items = cursor.fetchall()

        conn.close()
        return items