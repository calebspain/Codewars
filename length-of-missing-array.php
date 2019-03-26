<?php

function getLengthOfMissingArray($arrayOfArrays) {
    $missingArrSize = 0;
    if ($arrayOfArrays != null && sizeof(min($arrayOfArrays)) !== 0) {
        usort($arrayOfArrays, function($a, $b) {
            return sizeof($a) - sizeof($b);
        });
    } else {
        return $missingArrSize;
    }
    for ($x = 0; $x < sizeof($arrayOfArrays) - 1; $x++) {
        sizeof($arrayOfArrays[$x]) === (sizeof($arrayOfArrays[$x + 1]) - 1) ? "" :
        $missingArrSize = sizeof($arrayOfArrays[$x]) + 1;
    }
    return $missingArrSize;
}

echo getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]);

?>