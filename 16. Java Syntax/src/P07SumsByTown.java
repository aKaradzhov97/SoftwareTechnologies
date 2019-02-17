import java.util.Scanner;
import java.util.TreeMap;

public class P07SumsByTown {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int townsCount = Integer.parseInt(scanner.nextLine());
        TreeMap<String, Double> sumsByTown = new TreeMap<>();

        for (int i = 0; i < townsCount; i++) {
            String[] arguments = scanner
                    .nextLine()
                    .split("\\|");

            String town = arguments[0].trim();

            double townIncome = Double.parseDouble(arguments[1].trim());

            if (!sumsByTown.containsKey(town)) {
                sumsByTown.put(town, townIncome);
            } else {
                sumsByTown.put(town, townIncome + sumsByTown.get(town));
            }
        }

        for (String town : sumsByTown.keySet()) {
            System.out.println(town + " -> " + sumsByTown.get(town));
        }
    }
}
