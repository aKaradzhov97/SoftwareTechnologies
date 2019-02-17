<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fifty shades of grey</title>
    <style>
        div {
            display: inline-block;
            margin: 1rem;
            width: 4rem;
            height: 4rem;
        }
    </style>
</head>
<body>
<?php
for ($i = 0; $i < 255; $i += 51) {
    $inc = $i;
    for ($j = 0; $j < 10; $j++) {
        echo "<div style='background-color:rgb($inc, $inc, $inc)'></div>";
        $inc += 5;
    }
    echo "<br />";
}
?>
</body>
</html>