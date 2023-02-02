const getSleepHours = function(day) {
  //The function should accept a day as an argument and return the number of hours you slept that night.
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8; 
      break;

    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 7;
      break;

    case 'sunday':
      return 8;
        break;
}
};
//console.log(getSleepHours('sunday')); 

//To get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') +
  getSleepHours('sunday');
};
//console.log(getActualSleepHours());

const getIdealSleepHours = function(){
  let idealHours = 7;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());

const calculateSleepDebt = function(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (  actualSleepHours === idealSleepHours ) {
    console.log(' the user got the perfect amount of sleep.');
  } else if (actualSleepHours  > idealSleepHours) {
    console.log('you got' + (idealSleepHours - actualSleepHours) + 'hours  more  sleep than you needed this week .' );
  } else if ( actualSleepHours  < idealSleepHours ) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } 
};
calculateSleepDebt(5);







