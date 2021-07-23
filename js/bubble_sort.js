// var dataArray = [0, 0, 0, 0, 0, 0];
function BubbleSort(dataArray) {
  var numMax = dataArray.length;
  var cycleMax = dataArray.length-1;
  for (var cycle= 0; cycle<cycleMax; cycle++) {
    for (var num = 1; num<numMax-cycle; num++){
      if(dataArray[num-1]>dataArray[num]){
        var dataStay = dataArray[num-1];
        dataArray[num-1] = dataArray[num];
        dataArray[num] = dataStay;
      }
    };
  }
  return dataArray;
};

export default BubbleSort;
  