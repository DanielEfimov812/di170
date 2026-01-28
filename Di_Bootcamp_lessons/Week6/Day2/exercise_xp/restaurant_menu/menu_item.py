from db import get_connection


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(
                """
                INSERT INTO Menu_Items (item_name, item_price)
                VALUES (?, ?)
                """,
                (self.name, self.price)
            )
            conn.commit()
            return True
        except Exception as e:
            print("Error wile updating:", e)
            return False
        finally:
            conn.close()

    def delete(self):
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "DELETE FROM Menu_Items WHERE item_name = ?",
            (self.name,)
        )

        conn.commit()
        deleted = cursor.rowcount
        conn.close()

        return deleted > 0

    def update(self, new_name, new_price):
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            UPDATE Menu_Items
            SET item_name = ?, item_price = ?
            WHERE item_name = ?
            """,
            (new_name, new_price, self.name)
        )

        conn.commit()
        updated = cursor.rowcount
        conn.close()

        return updated > 0