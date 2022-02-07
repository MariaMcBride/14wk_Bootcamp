import java.util.Date;
import java.text.SimpleDateFormat;

public class AlfredQuotes {

    private SimpleDateFormat simpleDateFormat;

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        return String.format("Hello, %s. Lovely to see you.", name);
    }

    public String dateAnnouncement() {
        return String.format("It is currently %s.", new Date());
    }

    public String respondBeforeAlexis(String conversation) {
        if (conversation.indexOf("Alexis") > -1) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (conversation.indexOf("Alfred") > -1) {
            return "At your service. As you wish, naturally.";
        }
        return "Right. And with that I shall retire.";
    }

    // NINJA BONUS
    // See the specs to overload the guessGreeting method
    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }

    public String guestGreeting() {
        String pattern = "k";
        simpleDateFormat = new SimpleDateFormat(pattern);
        int hour = Integer.parseInt(simpleDateFormat.format(new Date()));
        if (hour >= 0 && hour < 12) {
            return "Good morning.";
        } else if (hour >= 12 && hour < 16) {
            return "Good afternoon.";
        } else
            return "Good evening.";
    }

    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
    public String alfredQuote(String quote) {
        return quote;
    }
}