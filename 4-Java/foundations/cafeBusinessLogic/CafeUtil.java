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
        System.out.println(String.format("Hello, %s!", userName));
        System.out.println(String.format("There are %s people in front of you", customers.size()));
        customers.add(userName);
    }
}
