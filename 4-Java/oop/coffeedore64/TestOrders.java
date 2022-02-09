import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        CoffeeKiosk kiosk = new CoffeeKiosk();

        kiosk.addMenuItem("banana", 2.00);
        kiosk.addMenuItem("coffee", 1.50);
        kiosk.addMenuItem("latte", 4.50);
        kiosk.addMenuItem("cappuccino", 3.00);
        kiosk.addMenuItem("muffin", 4.00);

        kiosk.newOrder();
        kiosk.addMenuItemByInput();
        kiosk.displayMenu();

        // Menu items
        Item item1 = new Item("mocha", 4.0);
        Item item2 = new Item("latte", 3.5);
        Item item3 = new Item("drip coffee", 2);
        Item item4 = new Item("cappuccino", 3.75);
        // System.out.println(item1.getItemName());
        // System.out.println(item1.getItemPrice());

        // Create 2 orders for unspecified guests (without specifying a name):
        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders using the overloaded constructor to give each a name for the
        // order:
        Order order3 = new Order("Cindhuri");
        Order order4 = new Order("Jimmy");
        Order order5 = new Order("Noah");

        // Implement the addItem method within the Order class:
        // Add at least 2 items to each of the orders using the addItem method you
        // wrote, for example, to add item1 to order3 you would need to call the addItem
        // method from the order3 instance like so: order3.addItem(item1);
        order1.addItem(item4);
        order1.addItem(item3);
        order2.addItem(item2);
        order2.addItem(item1);
        order3.addItem(item2);
        order3.addItem(item3);
        order4.addItem(item4);
        order4.addItem(item3);
        order5.addItem(item2);
        order5.addItem(item1);

        // Implement the getStatusMessage method within the Order class:
        System.out.println("\n------ Get Status Message ------");
        System.out.println(order1.getStatusMessage());

        // Test your getStatusMessage functionality by setting some orders to ready and
        // printing the messages for each order. For example: order2.setReady(true);
        // System.out.println(order2.getStatusMessage());
        System.out.println("\n------ Test Get Status Message ------");
        order2.setOrderReady(true);
        System.out.println(order2.getStatusMessage());

        // Implement the getOrderTotal method within the Order class:
        System.out.println("\n------ Get Order Total ------");
        System.out.println(order2.getOrderTotal());

        // Test the total by printing the return value like so:
        // System.out.println(order1.getOrderTotal());
        System.out.println("\n------ Test Get Order Total ------");
        System.out.println(order1.getOrderTotal());

        // Implement the display method within the Order class:
        System.out.println("\n------ Display Orders ------");

        System.out.println("\n------ Order 1 ------");
        order1.display();

        // Finally, call the display method on all of your orders, like so:
        // order3.display();
        System.out.println("\n------ Order 2 ------");
        order2.display();
        System.out.println("\n------ Order 3 ------");
        order3.display();
        System.out.println("\n------ Order 4 ------");
        order4.display();
        System.out.println("\n------ Order 5 ------");
        order5.display();
    }
}