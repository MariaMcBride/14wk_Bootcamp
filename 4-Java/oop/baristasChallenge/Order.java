import java.util.ArrayList;

// Here we're creating a new data type called Order
public class Order {

    // MEMBER VARIABLES
    private String name; // default value of null
    private boolean ready; // default value false
    private ArrayList<Item> items = new ArrayList<Item>(); // defaults to null

    // CONSTRUCTOR
    // No arguments, sets name to "Guest", initializes items as an empty list.
    public Order() {
        this.name = "Guest";
    }

    // OVERLOADED CONSTRUCTOR
    // Takes a name as an argument, sets name to this custom name.
    // Initializes items as an empty list.
    public Order(String name) {
        this.name = name;
    }

    // ORDER METHODS
    // Most of your code will go here, so implement the getters and setters first!

    // Create a method called addItem that takes an Item object as an argument and
    // adds the item to the order's items array. No need to return anything.
    public void addItem(Item item) {
        this.items.add(item);
    }

    // Create a method called getStatusMessage that returns a String message. If the
    // order is ready, return "Your order is ready.", if not, return "Thank you for
    // waiting. Your order will be ready soon."
    public String getStatusMessage() {
        if (getOrderReady())
            return "Your order is ready.";
        else
            return "Thank you for waiting. Your order will be ready soon.";
    }

    // Similar to the getOrderTotal method from the Cafe Business Logic assignment,
    // create a method called getOrderTotal that sums together each of the item's
    // prices, and returns the total amount.
    public double getOrderTotal() {
        double total = 0.0;
        for (int i = 0; i < items.size(); i++) {
            total += items.get(i).getItemPrice();
        }
        return total;
    }

    // Similar to the displayMenu function from the Cafe Business Logic assignment,
    // create a method called display that prints out the order information.
    public void display() {
        System.out.printf("Customer Name: %s\n", this.name);
        for (int i = 0; i < items.size(); i++) {
            System.out.printf("%s - $%.2f\n", items.get(i).getItemName(), items.get(i).getItemPrice());
        }
        System.out.printf("Total: $%.2f\n", getOrderTotal());
    }

    // GETTERS & SETTERS

    // Set/Get Name
    public void setOrderName(String name) {
        this.name = name;
    }

    public String getOrderName() {
        return this.name;
    }

    // Set/Get Ready
    public void setOrderReady(boolean ready) {
        this.ready = ready;
    }

    public boolean getOrderReady() {
        return this.ready;
    }

    // Set/Get Items
    public void setOrderItems(ArrayList<Item> items) {
        this.items = items;
    }

    public String getOrderItems() {
        return this.items;
    }
}
