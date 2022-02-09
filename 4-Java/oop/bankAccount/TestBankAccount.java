public class TestBankAccount {
    public static void main(String[] args) {

        // ------------ Bank Accounts ------------- //
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();

        // ---------- Account 1 Activity ---------- //
        System.out.println("\n------ Account 1 Activity ------");
        account1.depositMoney("checking", 500.0);
        account1.depositMoney("savings", 15000.0);
        account1.withdrawMoney("checking", 1000.0);
        account1.getCheckingBalance();
        account1.getSavingsBalance();
        account1.displayoverallBalance();

        // ---------- Account 2 Activity ---------- //
        System.out.println("\n------ Account 2 Activity ------");
        account2.depositMoney("checking", 500.0);
        account2.depositMoney("savings", 10000.0);
        account2.withdrawMoney("savings", 5000.0);
        account2.getCheckingBalance();
        account2.getSavingsBalance();
        account2.displayoverallBalance();

        // ----------- Print Statements ------------ //
        System.out.println("\n------ Accounts Created ------");
        System.out.println(BankAccount.numberOfAccounts());

        System.out.println("\n------ Overall Bank Balance ------");
        System.out.println(BankAccount.overallBalance());

    }
}
