import java.util.ArrayList;
import java.util.Random;

public class TestPuzzleJava {

    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();

        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);

        char characters = generator.getRandomLetter();
        System.out.println(characters);

        String randomPassword = generator.generatePassword();
        System.out.println(randomPassword);

        ArrayList<String> newPassSet = generator.getNewPasswordSet(10);
        System.out.println(newPassSet);
    }
}
