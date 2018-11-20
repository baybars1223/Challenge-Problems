function toMilitary(time) {
  let newHours;
  let newMinutes;
  if (time[time.length - 1] === 'm') {
    console.log(time[time.length - 1]);
    if (time[time.length - 2] === 'p') {
      if (parseInt(time.split(':')[0]) === 12) {
        newHours = parseInt(time.split(':')[0]);
      } else {
        newHours = parseInt(time.split(':')[0]) + 12;
      }
      newMinutes = time.split(':')[1];
      console.log(newMinutes);
      if (newHours >= 24) {
        newHours -= 24;
      }
      console.log(newHours);
      if (time[0] === '0') {
        newHours = `${newHours}:${newMinutes.slice(0, 2)}`;
        console.log(newHours);
      } else {
        if (newHours === 0) {
          newHours = '00';
        }
        console.log(newHours, time);
        newHours = `${newHours}:${newMinutes.slice(0, 2)}`;
        console.log(newHours);
      }
      console.log(newHours);
    } else {
      newHours = parseInt(time.split(':')[0]);
      if (newHours >= 12) {
        newHours -= 12;
      }
      console.log(newHours);
      newMinutes = time.split(':')[1];
      console.log(newMinutes);
      if (newHours < 10) {
        newHours = `0${newHours}:${newMinutes.slice(0, 2)}`;
        console.log(newHours);
      } else {
        newHours = `${newHours}:${newMinutes.slice(0, 2)}`;
        console.log(newHours);
      }
      console.log(newHours);
    }
  } else if (time[time.length - 1] !== 'm') {
    newHours = time;
    console.log(newHours);
  }
  return newHours;
}

// toMilitary('01:00');
// toMilitary('01:00pm');
// toMilitary('1:00am');
// toMilitary('7:47pm');
// toMilitary('12:01am');
toMilitary('12:00pm');
// toMilitary('9:01am');

/*
Inputs:
1:00
01:00
1:00am
1:00pm
12:00
12:00am
12:00pm

What is military time:
if pm +12 hrs
if am +0 hrs
if - +0 hrs
*/
