from menu_item import MenuItem
from menu_manager import MenuManager
from db import get_connection


def create_table():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS Menu_Items (
        item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_name TEXT NOT NULL UNIQUE,
        item_price INTEGER DEFAULT 0
    )
    """)

    conn.commit()
    conn.close()


def show_user_menu():
    print("\n--- YOUR CHOICE ---")
    print("V - View a meal")
    print("A - Add a meal")
    print("D - Delite a meal")
    print("U - Update a meal")
    print("S - Show menue")
    print("X - Exit")


def add_item_to_menu():
    name = input("Type a name of the meal: ").strip()
    price = int(input("Type a price: "))

    item = MenuItem(name, price)
    if item.save():
        print("Meal added sucsessfuly")


def remove_item_from_menu():
    name = input("Type a name of the meal to delite: ").strip()
    item = MenuItem(name, 0)

    if item.delete():
        print("Meal is eaded")
    else:
        print("Meal doesnt exist")


def update_item_from_menu():
    old_name = input("Type a current name of a meal: ").strip()
    new_name = input("Type a new name of thr meal: ").strip()
    new_price = int(input("Input a new price: "))

    item = MenuItem(old_name, 0)
    if item.update(new_name, new_price):
        print("Refreshed")
    else:
        print("Error while apdeting")


def show_restaurant_menu():
    items = MenuManager.all_items()

    print("\n--- RESTROUNT MENU ---")
    if not items:
        print("Meny is empty")
    for name, price in items:
        print(f"{name} : {price} ₪")


def main():
    create_table()

    while True:
        show_user_menu()
        choice = input("Chose something: ").upper()

        if choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "V":
            name = input("Type a name of the meal: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name} : {item.price} ₪")
            else:
                print("Not exist")
        elif choice == "X":
            show_restaurant_menu()
            print("Bye")
            break
        else:
            print("Wrong input")


if __name__ == "__main__":
    main()