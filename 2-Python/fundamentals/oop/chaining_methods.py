class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):	
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")
        return self

    def transfer_money(self, user, amount):
        self.account_balance -= amount
        user.account_balance += amount
        self.display_user_balance()
        user.display_user_balance()
        return self

user_1 = User("Princess Bubblegum")
user_2 = User("Peppermint Butler")
user_3 = User("Lumpy Space Princess")

user_1.make_deposit(1000).make_deposit(2000).make_deposit(3000).make_withdrawal(1000).display_user_balance().transfer_money(user_3, 500)

user_2.make_deposit(666).make_deposit(666).make_withdrawal(66).make_withdrawal(66).display_user_balance()

user_3.make_deposit(500).make_withdrawal(100).make_withdrawal(50).make_withdrawal(50).display_user_balance()