import java.util.Scanner;

public class P02BooleanVariable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        boolean boolValue = Boolean.parseBoolean(input);

        if (boolValue) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
