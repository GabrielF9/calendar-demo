import dayjs from "dayjs";

export const resumeMonths = [
  { "month": 'Jan', "is31": true },
  { "month": 'Feb', "is31": false },
  { "month": 'Mar', "is31": true },
  { "month": 'Apr', "is31": false },
  { "month": 'May', "is31": true },
  { "month": 'Jun', "is31": false },
  { "month": 'Jul', "is31": true },
  { "month": 'Aug', "is31": true },
  { "month": 'Sep', "is31": false },
  { "month": 'Oct', "is31": true },
  { "month": 'Nov', "is31": false },
  { "month": 'Dec', "is31": true }
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

export function getCurrentDay(actualDate) {
  return {
    currentDay: `${resumeMonths[actualDate.getMonth()].month} ${actualDate.getDate().toString().padStart(2, '0')}`,
    currentDayName: weekDays[actualDate.getDay()]
  };
}

export function getCurrentMonth() {
  const date = new Date();

  return `${resumeMonths[date.getMonth()].month.toUpperCase()} ${date.getFullYear()}`;
}

export function getMonthDaysPerWeek() {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const startOfMonth = dayjs().startOf('month').day();

  let days = 30;

  if (month === 1 && !isLeap(year)) {
    days = 28;
  } else if (month === 1 && isLeap(year)) {
    days = 29;
  } else if (resumeMonths[month].is31) {
    days = 31;
  }

  const monthDays = [];

  for (let i = 0; i < startOfMonth; i++) {
    monthDays.push('');
  }
  for (let i = 1; i <= days; i++) {
    monthDays.push(i.toString().padStart(2, '0'));
  }

  if (monthDays.length < 35) {
    for (let i = monthDays.length; i < 35; i++) {
      monthDays.push('');
    }
  }

  const result = [
    monthDays.slice(0, 7),
    monthDays.slice(7, 14),
    monthDays.slice(14, 21),
    monthDays.slice(21, 28),
    monthDays.slice(28, 35),
  ];

  return result;
}

export function isLeap(year) {
  return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)));
}

export function convertHexToRgba(hex, opacity = 1) {
  let hexR = parseInt(hex.substr(1, 2), 16);
  let hexG = parseInt(hex.substr(3, 2), 16);
  let hexB = parseInt(hex.substr(4, 2), 16);

  let rgba = `rgba(${hexR}, ${hexG}, ${hexB}, ${opacity})`;

  return rgba;
}

export function convert12hTo24h(hour) {
  if (hour.includes('am')) {
    return hour.includes('12') ? '00' : hour.split(' ')[0].padStart(2, '0');
  } else {
    return hour.includes('12') ? '12' : (12 + parseInt(hour.split(' ')[0])).toString().padStart(2, '0');
  }
}