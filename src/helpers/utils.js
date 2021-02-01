export const resumeMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const resumeWeekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];


export function getSaudation() {
  const actualHour = new Date().getHours();

  if (actualHour < 5) {
    return 'Good Night';
  } else if (actualHour < 12) {
    return 'Good Morning';
  } else if (actualHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Night';
  }
}

export function getCurrentDay() {
  const date = new Date();

  return {
    currentDay: `${resumeMonths[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}`,
    currentDayName: weekDays[date.getDay()]
  };
}

export function getCurrentMonth() {
  const date = new Date();

  return `${resumeMonths[date.getDay()]} ${date.getFullYear()}`;
}