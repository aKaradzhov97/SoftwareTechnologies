<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Product of 3 Numbers</title>
</head>
<body>
<form>
    X: <input type="text" name="num1" />
    Y: <input type="text" name="num2" />
    Z: <input type="text" name="num3" />
    <input type="submit">
</form>

<?php
if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
    $negativesCount = 0;

    $numberOne = floatval($_GET['num1']);
    $numberTwo = floatval($_GET['num2']);
    $numberThree = floatval($_GET['num3']);

    $numbers = [$numberOne, $numberTwo, $numberThree];

    foreach ($numbers as $number) {
        if ($number == 0) {
            echo "Positive";
            return;
        }
        if ($number < 0) {
            $negativesCount++;
        }
    }
    if ($negativesCount % 2 == 1) {
        echo 'Negative';
    } else {
        echo 'Positive';
    }
}
?>
</body>
</html>