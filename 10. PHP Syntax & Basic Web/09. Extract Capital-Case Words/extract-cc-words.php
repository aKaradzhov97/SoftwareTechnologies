<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Extract CapitalCase Words</title>
</head>
<body>
<?php
    if (isset($_GET['text'])) {
        $text = $_GET['text'];

        preg_match_all('/\w+/', $text, $words);
        $words = $words[0];

        $capitalCaseWords = array_filter($words, function ($word) {
            return strtoupper($word) == $word;
        });

        echo implode(', ', $capitalCaseWords);
    }
?>
<form>
    <textarea rows="10" name="text"></textarea> <br>
    <input type="submit" value="Extract">
</form>
</body>
</html>