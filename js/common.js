import RandomNum from "./random_num.js";
import DataToArray from "./data_to_array.js";
import BubbleSort from "./bubble_sort.js";

var dataArray = [];
$(document).ready(function(){
  $('.get_random_num').click(function(){
    const num1 = RandomNum(1,100);
    dataArray = DataToArray(num1,dataArray);
    console.log(dataArray);
    return dataArray
  });

  $('.bubble_sort').click(function(){
    BubbleSort(dataArray);
    console.log(dataArray);
    
  });


});
