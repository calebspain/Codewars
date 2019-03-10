let arr = new Array();
let integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4];
let values_list = [1, 3];
Array.prototype.remove_ = (integer_list, values_list) => {
    return integer_list.filter(num => values_list.indexOf(num) < 0);
}

arr.remove_(integer_list, values_list); // [ 2, 2, 4 ]
