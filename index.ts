// Import stylesheets
import "./style.css";

import * as moment from 'moment';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const date = {
  from: "2020-04-06T00:00:00.000Z",
  to: "2020-05-06T23:59:59.000Z"
};
function generateDateList(startDate, days) {
  const date = new Date(startDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function generateDateInterval(startDate, endDate, days) {
  const dateList = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dateList.push(currentDate);
    currentDate = generateDateList(currentDate, days);
  }
  console.log("date list => ", JSON.stringify(dateList));
  return dateList;
}

const from = moment.utc(date.from);
const to = moment.utc(date.to);
generateDateInterval(from, to, 7);
