<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sub Lists</title>
</head>
<body>
<form>
    N: <input type="text" name="num1"/>
    M: <input type="text" name="num2"/>
    <input type="submit">
</form>
<ul>
    <?php
    if (isset($_GET['num1']) && isset($_GET['num2'])) {
        $outerListElements = intval($_GET['num1']);
        $innerListElements = intval($_GET['num2']);

        if ($outerListElements > 0) {
            for ($i = 1; $i <= $outerListElements; $i++) { ?>
                <li> List <?php echo $i ?>
                    <ul>
                        <?php
                        for ($j = 1; $j <= $innerListElements; $j++) {
                            echo "<li>Element $i.$j</li>";
                        }
                        ?>
                    </ul>
                </li>
            <?php } ?>
        <?php } ?>
    <?php } ?>
</ul>
</body>
</html>