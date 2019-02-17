<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RGB Table</title>
    <style>
        table * {
            border: 1px solid black;
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <td>
            Red
        </td>
        <td>
            Green
        </td>
        <td>
            Blue
        </td>
    </tr>
    <?php
    for ($i = 51; $i <= 255; $i+= 51) {
        echo "<tr>";
        for ($j = 1; $j <= 3; $j++) {
            if ($j == 1) {
                echo "<td style='background-color:rgb($i, 0, 0)'></td>";
            } else if ($j == 2) {
                echo "<td style='background-color:rgb(0, $i, 0)'></td>";
            } else {
                echo "<td style='background-color:rgb(0, 0, $i)'></td>";
            }
        }
        echo "</tr>";
    }
    ?>
</table>
</body>
</html>