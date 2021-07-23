var dataArray = [];
var arrayLength = dataArray.length;
function DataToArray(inputData,Array){
  arrayLength = dataArray.length;
  dataArray[arrayLength] = inputData;
  return dataArray;
};
export default DataToArray;