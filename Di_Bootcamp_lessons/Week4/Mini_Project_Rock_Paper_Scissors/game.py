import random

class Game():
    def get_user_item(self):
        valid_items = ["rock", "paper", "scissors"]
        while True:
            user_input = input("Choose rock, paper or scissors: ").strip().lower()
            if user_input in valid_items:
                return user_input
            else:
                print("Invalid choice. Try again.")

    def get_computer_item(self):
        self.computer_item = random.choice(["rock", "paper", "scissors"])
        return self.computer_item
    
    def get_game_result(self, user_item, computer_item):
        
        if user_item == computer_item:
            return "draw"
        
        if (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "scissors" and computer_item == "paper") or
            (user_item == "paper" and computer_item == "rock")
        ):
            return "win"
        
        return "loss"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            message = "You win!"
        elif result == "loss":
            message = "You loss!"
        else:
            message = "It's draw!"

        print(
            f"You selected {user_item}. "
            f"The computer selected {computer_item}. "
            f"{message}"
        )
        
        return result


