function DataToArray(inputData,dataArray){
  var arrayLength = dataArray.length;
  dataArray[arrayLength] = inputData;
  return dataArray;
};
export default DataToArray;