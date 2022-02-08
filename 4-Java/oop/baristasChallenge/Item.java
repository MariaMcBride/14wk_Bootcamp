public class Item {

    // MEMBER VARIABLES
    private String name;
    private double price;

    // CONSTRUCTOR
    // Takes a name and price as arguments
    // and sets them accordingly
    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // GETTERS & SETTERS - for name and price

    // Set/Get Name
    public void setItemName(String name) {
        this.name = name;
    }

    public String getItemName() {
        return this.name;
    }

    // Set/Get Price
    public void setItemPrice(double price) {
        this.price = price;
    }

    public double getItemPrice() {
        return this.price;
    }
}