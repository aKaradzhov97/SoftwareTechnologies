<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Prime Numbers from N to 1</title>
</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit">
</form>

<?php
function isPrime(int $number) : bool {
    if ($number < 2) {
        return false;
    }

    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) return false;
    }

    return true;
}

if (isset($_GET['num'])) {
    $number = intval($_GET['num']);
    for ($i = $number; $i >= 1; $i--) {
        if (isPrime($i)) {
            echo $i . " ";
        }
    }
}
?>
</body>
</html>