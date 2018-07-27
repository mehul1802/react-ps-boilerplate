export default (function getTheme(){
  const currentTime = new Date();
  var month = currentTime.getMonth();
  var date = currentTime.getDate();
  if(month === 5 && (date >10 && date <24)){
    return "fathers-day";
  }
  else{
    // return "default";
     return "fathers-day";    
  }
  // return "default";
})();