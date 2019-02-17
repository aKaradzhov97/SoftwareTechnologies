<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multiply Or Divide Numbers</title>
</head>
<body>
<form>
    N: <input type="text" name="num1" />
    M: <input type="text" name="num2" />
    <input type="submit">
</form>

<?php
if (isset($_GET['num1']) && isset($_GET['num2'])) {
    if ($_GET['num1'] <= $_GET['num2']) {
        $result = intval($_GET['num1']) * intval($_GET['num2']);
    } else {
        $result = intval($_GET['num1']) / intval($_GET['num2']);
    }

    echo $result;
}
?>
</body>
</html>