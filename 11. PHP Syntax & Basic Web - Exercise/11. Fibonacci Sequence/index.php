<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fibonacci Sequence</title>
</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit">
</form>

<?php
    function fibonacciN(int $n) :int {
        if ($n < 2) {
            return 1;
        }

        $fibonacciNumberOne = 1;
        $fibonacciNumberTwo = 1;
        $nextFibonacciNumber = 0;

        for ($i = 0; $i < $n - 1; $i++) {
            $nextFibonacciNumber = $fibonacciNumberOne + $fibonacciNumberTwo;

            $fibonacciNumberOne = $fibonacciNumberTwo;
            $fibonacciNumberTwo = $nextFibonacciNumber;
        }

        return $nextFibonacciNumber;
    }
    if (isset($_GET['num'])) {
        $number = intval($_GET['num']);
        for ($i = 0; $i < $number; $i++) {
            echo fibonacciN($i) . " ";
        }
    }
?>
</body>
</html>