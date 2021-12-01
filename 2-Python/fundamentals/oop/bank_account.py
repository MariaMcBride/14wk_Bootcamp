class BankAccount:
    all_accounts = []
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
        
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance - amount >= 0:
            self.balance -= amount
        else:
            print(f"Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self
    
    @classmethod
    def print_all_accounts_info(cls):
        for account in cls.all_accounts:
            account.display_account_info()

acct_1 = BankAccount(0.50, 5000)
acct_2 = BankAccount(0.25, 1850)

acct_1.deposit(1000).deposit(1000).deposit(1000).withdraw(500).yield_interest().display_account_info()

acct_2.deposit(500).deposit(700).withdraw(1500).withdraw(800).yield_interest().display_account_info()

BankAccount.print_all_accounts_info()