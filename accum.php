<?php
function accum($s) {
    $str = "";
    $chars = str_split(strtolower($s));
    for ($x = 0; $x < sizeof($chars); $x++) {
        $x < sizeof($chars) - 1 ? 
        $str .= strtoupper($chars[$x]) . str_repeat($chars[$x], $x) . "-" :
        $str .= strtoupper($chars[$x]) . str_repeat($chars[$x], $x);
    }
    return $str;
}

accum("ZpglnRxqenU");
?>