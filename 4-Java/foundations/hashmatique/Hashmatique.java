import java.util.HashMap;
import java.util.Set;

public class Hashmatique {
    public static void main(String[] args) {
        HashMap<String, String> userMap = new HashMap<String, String>();
        userMap.put("Playground", "Welcome to the playground, follow me...");
        userMap.put("Enemy", "Oh, the misery, everybody wants to be my enemy...");
        userMap.put("Misfit Toys", "You stranded with a bad bunch of misfit toys...");
        userMap.put("Dynasties and Dystopia", "Underground utopia dynasties and dystopia...");

        String name = userMap.get("Playground");
        Set<String> keys = userMap.keySet();
        for (String key : keys) {
            System.out.printf("Track: %s: Lyrics: %s", key, userMap.get(key));
        }
    }
}