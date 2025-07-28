import {nthNumber} from "./nthNumber";

export const formatDate = (inputDate: string): string => {
const date = new Date(inputDate);

const year = new Intl.DateTimeFormat("en", {year: "numeric"}).format(date);
const day = Number(new Intl.DateTimeFormat("en", {day: "numeric"}).format(date));
const month = new Intl.DateTimeFormat("en", {month: "long"}).format(date);
const dayOfWeek = new Intl.DateTimeFormat("en", {weekday: "long"}).format(date);
const nthDay = nthNumber(day);

const finalDate = dayOfWeek + "," + " " + day + nthDay + " " + month + " " + year;
return finalDate;
};
