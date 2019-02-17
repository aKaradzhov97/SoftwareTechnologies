<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sort Lines</title>
</head>
<body>
<?php
    $sortedLines = "";
    if (isset($_GET['lines'])) {
        $lines = explode("\n", $_GET['lines']);
        $lines = array_map('trim', $lines);
        sort($lines, SORT_STRING);
        $sortedLines = implode("\n", $lines);
    }
?>
<form>
  <textarea rows="10" name="lines"><?= $sortedLines
      ?></textarea> <br>
    <input type="submit" value="Sort">
</form>
</body>
</html>