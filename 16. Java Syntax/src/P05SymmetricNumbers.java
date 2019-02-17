import java.util.Scanner;

public class P05SymmetricNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            if (isSymmetric(i)) {
                sb.append(i);
                sb.append(" ");
            }
        }

        System.out.println(sb.toString().trim());
    }

    private static boolean isSymmetric(int num) {
        int n = num;
        int rev = 0;

        while (num > 0)
        {
            int dig = num % 10;
            rev = rev * 10 + dig;
            num = num / 10;
        }

        if (n == rev)
        {
            return true;
        }

        return false;
    }
}
