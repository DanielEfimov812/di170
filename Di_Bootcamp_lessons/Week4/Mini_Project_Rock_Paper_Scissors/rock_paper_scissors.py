from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit")
    print("(q) Quit")
    
    choice = input("Choose an option: ").strip().lower()
    return choice

def print_results(results):
    print("\n--- Game Results ---")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("\nThanks for playing! 👋")

def main():
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "x":
            print_results(results)

        elif choice == "q":
            print_results(results)
            break

        else:
            print("Invalid menu choice.")

if __name__ == "__main__":
    main()


