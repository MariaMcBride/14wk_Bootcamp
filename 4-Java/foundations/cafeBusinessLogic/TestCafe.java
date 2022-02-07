import java.util.ArrayList;
import java.util.Arrays;

public class TestCafe {
    public static void main(String[] args) {

        /*
         * You will need add 1 line to this file to create an instance
         * of the CafeUtil class.
         * Hint: it will need to correspond with the variable name used below..
         */
        CafeUtil appTest = new CafeUtil();

        /* ============ App Test Cases ============= */

        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal(10));
        System.out.printf("Purchases needed by week 20: %s \n\n",
                appTest.getStreakGoal(20));

        System.out.println("----- Order Total Test -----");
        double[] lineItems = { 3.5, 1.5, 4.0, 4.5 };
        System.out.printf("Order total: %s \n\n", appTest.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test -----");
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        appTest.displayMenu(menu);

        System.out.println("\n----- Add Customer Test -----");
        ArrayList<String> customers = new ArrayList<String>();
        // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            appTest.addCustomer(customers);
            System.out.println("\n");
        }

        System.out.println("\n----- Ninja Bonus: Print Price Chart -----");
        String product = "Columbian Coffee Grounds";
        double price = 15.0;
        int maxQuantity = 3;
        appTest.printPriceChart(product, price, maxQuantity);

        System.out.println("\n----- Ninja Senpai Bonus: Print Price Chart -----");
        String product2 = "Coffee";
        double price2 = 2.0;
        int maxQuantity2 = 4;
        appTest.printPriceChartSenpai(product2, price2, maxQuantity2);

        System.out.println("\n----- Ninja Bonus: Display Menu Test -----");
        ArrayList<Double> prices = new ArrayList<Double>();
        prices.add(1.5);
        prices.add(3.5);
        prices.add(4.5);
        prices.add(3.5);
        appTest.displayMenu(menu, prices);
    }
}
