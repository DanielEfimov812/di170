from anagram_checker import AnagramChecker


def show_menu():
    print("\n--- Anagram Checker ---")
    print("1. Enter a word")
    print("2. Exit")


def main():
    checker = AnagramChecker("words.txt")

    while True:
        show_menu()
        choice = input("Choose an option: ").strip()

        if choice == "2":
            print("Goodbye!")
            break

        elif choice == "1":
            user_input = input("Enter a word: ").strip()

            if len(user_input.split()) != 1:
                print("Error: Please enter only ONE word.")
                continue

            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            word = user_input.lower()

            print(f'\nYOUR WORD: "{word.upper()}"')

            if checker.is_valid_word(word):
                print("This is a valid English word.")
            else:
                print("This word is NOT in the dictionary.")

            anagrams = checker.get_anagrams(word)

            if anagrams:
                print("Anagrams for your word:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        else:
            print("Invalid option. Try again.")


if __name__ == "__main__":
    main()