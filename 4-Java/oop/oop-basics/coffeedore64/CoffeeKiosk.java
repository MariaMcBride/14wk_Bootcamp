import java.util.ArrayList;

public class CoffeeKiosk {

    // ----- Member Variables ----- //
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    // -------- Constructor ------- //
    // Constructor - no params, initializes items and orders to empty arrays:
    public CoffeeKiosk() {
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }

    // ---------- Methods --------- //

    // ------ Add Menu Items ------ //
    // The addMenuItem method should create a new item object with the given name
    // and price. Add the new Item object to the menu items array.The new menu item
    // itself will also need to be assigned an index property. The value should be
    // its position, its index, in the menu array:
    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        this.menu.add(newItem);
        newItem.setIndex(menu.indexOf(newItem));
    }

    // ---- Display Menu Items ---- //
    // Now with an array of items you can display the menu without needing separate
    // arrays of names and prices. The displayMenu method should display all of the
    // items from the menu array like so:
    public void displayMenu() {
        System.out.println("\n------ Menu Items ------");
        for (Item item : menu) {
            System.out.printf("%s %s -- $%.2f\n", item.getIndex(), item.getItemName(), item.getItemPrice());
        }
    }

    // -------- New Orders -------- //
    // The newOrder method will take input from the user in the terminal to create a
    // new order instance and add it to the orders array. We have given you some
    // code to get you started:
    public void newOrder() {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        // Your code:
        // Create a new order with the given input string
        Order newOrder = new Order(name);
        // Show the user the menu, so they can choose items to add
        displayMenu();
        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items
        while (!itemNumber.equals("q")) {

            // Get the item object from the menu, and add the item to the order
            for (Item item : menu) {
                if (itemNumber.equals(String.valueOf(item.getIndex()))) {
                    newOrder.addItem(item);
                }
            }
            // Ask them to enter a new item index or q again, and take their input
            System.out.println("Please enter a new menu item or press 'q' to exit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details
        // as the example below. You may use the order's display method.
        System.out.printf("Order Total: $%.2f\n", newOrder.getOrderTotal());
        newOrder.display();
    }

    // NINJA BONUS: Create a method that lets an admin add menu items manually,
    // using what you now know about getting user input:
    public void addMenuItemByInput() {
        System.out.println("Please enter a new menu item:");
        String newItemName = System.console().readLine();
        System.out.println("Please enter menu item price:");
        String newItemPrice = System.console().readLine();
        addMenuItem(newItemName, Double.parseDouble(newItemPrice));
    }
}
