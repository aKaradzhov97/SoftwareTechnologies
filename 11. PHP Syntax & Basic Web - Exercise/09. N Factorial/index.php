<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>N Factorial</title>
</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit">
</form>

<?php
    if (isset($_GET['num'])) {
        $number = intval($_GET['num']);
        $result = 1;
        for ($i = 1; $i <= $number; $i++) {
            $result *= $i;
        }
        echo $result;
    }
?>
</body>
</html>