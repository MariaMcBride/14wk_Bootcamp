import java.text.NumberFormat;
import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int[] weeks = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int sum = 0;
        for (int i : weeks) {
            sum += i;
        }
        return sum;
    }

    public int getStreakGoal(int numWeeks) {
        int week = 1;
        int sum = 0;
        while (week <= numWeeks) {
            sum += week;
            week++;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (double d : prices) {
            sum += d;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            String item = menuItems.get(i);
            System.out.println(i + " " + item);
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.printf("Hello, %s!\n", userName);
        System.out.printf("There are %s people in front of you", customers.size());
        customers.add(userName);
    }

    public void printPriceChart(String product, double price, int maxQuantity) {
        System.out.printf("%s\n", product);
        for (int i = 1; i <= maxQuantity; i++) {
            // NumberFormat currency = NumberFormat.getCurrencyInstance();
            // String result = currency.format(price);
            System.out.printf("%s - $%.2f\n", i, (i * price));
        }
    }

    public void printPriceChartSenpai(String product2, double price2, int maxQuantity2) {
        System.out.printf("%s\n", product2);
        for (int i = 1; i <= maxQuantity2; i++) {
            System.out.printf("%s - $%.2f\n", i, (i * price2) - ((i - 1) * 0.5));
        }
    }

    public boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices) {
        if (menuItems.size() != prices.size())
            return false;
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%s %s -- $%.2f\n", i, menuItems.get(i), prices.get(i));
        }
        return true;
    }
}
