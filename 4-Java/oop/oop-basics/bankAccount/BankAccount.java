import java.util.Random;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts = 0;
    private static double overallBalance = 0;
    private String accountNumber;

    // ------------- Constructor ------------- //
    public BankAccount() {
        generateAccountNumber();
        numberOfAccounts++;
    }

    // -------------- Methods -------------- //

    // Create a method that will allow a user to deposit money into either the
    // checking or saving, be sure to add to total amount stored:
    public void depositMoney(String accountType, double amount) {
        if (accountType == "checking")
            setCheckingBalance(getCheckingBalance() + amount);
        if (accountType == "savings")
            setSavingsBalance(getSavingsBalance() + amount);
        overallBalance += amount;
        // System.out.println("Deposit: " + overallBalance);
    }

    // Create a method to withdraw money from one balance. Do not allow them to
    // withdraw money if there are insufficient funds:
    // ULTRA SENSEI BONUS:
    public void withdrawMoney(String accountType, double amount) {
        if (accountType == "checking" && getCheckingBalance() >= amount) {
            setCheckingBalance(getCheckingBalance() - amount);
            overallBalance -= amount;
        } else if (accountType == "checking" && getCheckingBalance() < amount &&
                getSavingsBalance() >= amount) {
            System.out.println(
                    "Insufficient funds in checking account. Would you like to withdraw from your savings account? Y/N");
            String overdraftProtection = System.console().readLine();
            // System.out.println(overdraftProtection);
            if (overdraftProtection.equals("Y")) {
                // System.out.println(getSavingsBalance());
                setSavingsBalance(getSavingsBalance() - amount);
                overallBalance -= amount;
                // System.out.println(getSavingsBalance());
            }
        } else if (accountType == "savings" && getSavingsBalance() >= amount) {
            setSavingsBalance(getSavingsBalance() - amount);
            overallBalance -= amount;
        } else if (accountType == "savings" && getSavingsBalance() < amount &&
                getCheckingBalance() >= amount) {
            System.out.println(
                    "Insufficient funds in savings account. Would you like to withdraw from your checking account? Y/N");
            String overdraftProtection = System.console().readLine();
            if (overdraftProtection.equals("Y")) {
                setCheckingBalance(getCheckingBalance() - amount);
                overallBalance -= amount;
            }
        } else
            System.out.println("Insufficient funds.");
        // System.out.println("Withdraw: " + overallBalance);
    }

    // Create a method to see the total money from the checking and saving:
    public void displayOverallBalance() {
        System.out.printf("Account Number: %s\n", this.accountNumber);
        System.out.printf("Checking: $%.2f\n", getCheckingBalance());
        System.out.printf("Savings: $%.2f\n", getSavingsBalance());
        System.out.printf("Overall Balance: $%.2f\n", getCheckingBalance() + getSavingsBalance());
    }

    // Users should not be able to set any of the attributes from the class:
    public static int numberOfAccounts() {
        return numberOfAccounts;
    }

    public static double overallBalance() {
        return overallBalance;
    }

    // NINJA BONUS: Create a private method that returns a random ten digit account
    // number.
    private String generateAccountNumber() {
        Random rNG = new Random();
        this.accountNumber = new String();
        for (int i = 0; i < 10; i++) {
            int randomNum = rNG.nextInt(10);
            this.accountNumber += randomNum;
        }
        return this.accountNumber;
    }

    // ---------- Getters & Setters ---------- //

    // ----- Get Checking Account Balance ----- //
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    // ----- Set Checking Account Balance ----- //
    public void setCheckingBalance(double amount) {
        this.checkingBalance = amount;
    }

    // ----- Get Savings Account Balance ----- //
    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    // ----- Set Savings Account Balance ----- //
    public void setSavingsBalance(double amount) {
        this.savingsBalance = amount;
    }
}
