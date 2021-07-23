function RandomNum(minNum,maxNum){
  var getRandomNum = Math.floor(Math.random()*(maxNum+1-minNum)+minNum);
  if(maxNum<minNum){
    return false;
  };
  return getRandomNum;
};
export default RandomNum;