import java.util.Scanner;

public class P03ThreeIntegersSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstNumber = scanner.nextInt();
        int secondNumber = scanner.nextInt();
        int thirdNumber = scanner.nextInt();

        if (!checkNumbers(firstNumber, secondNumber, thirdNumber) &&
                !checkNumbers(thirdNumber, firstNumber, secondNumber) &&
                !checkNumbers(secondNumber, thirdNumber, firstNumber)) {
            System.out.println("No");
        }
    }

    private static boolean checkNumbers(int first, int second, int third) {
        if (first + second != third) {
            return false;
        }

        if (first <= second) {
            System.out.printf("%d + %d = %d%n", first, second, third);
        } else {
            System.out.printf("%d + %d = %d%n", second, first, third);
        }

        return true;
    }
}
