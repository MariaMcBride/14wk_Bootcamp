class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):	
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")

user_1 = User("Princess Bubblegum")
user_1.make_deposit(1000)
user_1.make_deposit(2000)
user_1.make_deposit(3000)
user_1.make_withdrawal(1000)
print(user_1.account_balance)

user_2 = User("Peppermint Butler")
user_2.make_deposit(666)
user_2.make_deposit(666)
user_2.make_withdrawal(66)
user_2.make_withdrawal(66)
print(user_2.account_balance)

user_3 = User("Lumpy Space Princess")
user_3.make_deposit(500)
user_3.make_withdrawal(100)
user_3.make_withdrawal(50)
user_3.make_withdrawal(50)
print(user_3.account_balance)