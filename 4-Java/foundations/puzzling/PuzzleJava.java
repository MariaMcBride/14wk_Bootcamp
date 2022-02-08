import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {

    public ArrayList<Integer> getTenRolls() {
        Random randMachine = new Random();
        ArrayList<Integer> randomRolls = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++) {
            int randomNum = randMachine.nextInt(21);
            randomRolls.add(randomNum);
        }
        return randomRolls;
    }

    public char getRandomLetter() {
        Random randMachine = new Random();
        char[] characters = {
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z'
        };
        return characters[randMachine.nextInt(26)];
    }

    public String generatePassword() {
        String randomPassword = new String();
        for (int i = 0; i < 8; i++) {
            randomPassword += getRandomLetter();
        }
        return randomPassword;
    }

    public ArrayList<String> getNewPasswordSet(int length) {
        ArrayList<String> newPassSet = new ArrayList<String>();
        for (int i = 0; i < length; i++) {
            newPassSet.add(generatePassword());
        }
        return newPassSet;
    }
}
