<!DOCTYPE html>
<html>
<body>
<?php

function is_positive($num) {
    return $num >= 0;
}

function positive_sum($arr) {
    return array_sum(array_filter($arr, "is_positive"));
}

echo positive_sum([1, 2, -3, 4, 5]);

?>
</body>
</html>