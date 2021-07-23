function RandomNum(minNum,maxNum){
  var getRandomNum = Math.floor(Math.random()*(maxNum+1-minNum)+minNum);
  return getRandomNum;
};
export default RandomNum;