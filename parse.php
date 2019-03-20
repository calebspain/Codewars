<?php
    function parse($data) {
        $num = 0;
        $result = array();
        $data = str_split($data);
        foreach($data as $command) {
            switch($command) {
                case "i":
                    $num++;
                    break;
                case "d":
                    $num--;
                    break;
                case "s":
                    $num *= $num;
                    break;
                case "o":
                    array_push($result, $num);
                    break;
                default:
                    break;
            }
        }
        var_dump($result);
        return $result;
    }
    parse("iiisdoso");
?>