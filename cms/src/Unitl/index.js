import { ToastError } from 'Components/Toast/toast-error.component';
import React from 'react';
import { Slide, toast } from 'react-toastify';

const moment = require('moment');
const json2html = require('html2json').json2html;

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

// ** Returns K format from a number
export const kFormatter = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

// ** Converts HTML to string
export const htmlToString = (html) => html.replace(/<\/?![^>]+(>|$)/g, '');

// ** Checks if the passed date is today
const isToday = (date) => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value);
  let formatting = { month: 'short', day: 'numeric' };

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => sessionStorage.getItem('userData');
export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === 'admin') return '/';
  if (userRole === 'client') return '/access-control';
  return '/login';
};

// ** React Select Theme Colors
export const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed', // for input hover border-color
  },
});

export const compareTimeToNow = (time, format = 'DD/MM/YYYY') => {
  if (!time) {
    return null;
  }

  const duration = moment(new Date()).diff(moment(new Date(time)), 'minutes');
  const diffMinitues = moment.duration(duration);
  // display date
  if (diffMinitues > 1440) {
    return moment(time).format(format);
  }

  // display hours ago
  if (diffMinitues > 60) {
    return Math.floor(diffMinitues / 60) + ' giờ trước';
  }

  return Math.floor(+diffMinitues) + ' phút trước';
};

export const toLocalTime = (dateTime = null, format = 'DD/MM/YYYY HH:mm:ss') => {
  if (!dateTime) {
    return null;
  }

  return moment(dateTime).local().format(format);
};

export const getMathRandom = () => {
  const ints = new Uint32Array(2);
  window.crypto.getRandomValues(ints);
  return ((ints[0] / 0xffffffff) * ints[1]) / 0xffffffff;
};

/**
 * get all value - format object to array string
 */
export const formatObjectToArrayStr = (object = {}) => {
  const arrStr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key]) {
      arrStr.push(object[key]);
    }
  }
  return arrStr;
};

/**
 * Stop enter submitting the form
 * @param {keyEvent} keyEvent: event triggered when the user presses a key
 */
export const stopKeydownEnter = (keyEvent) => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
};

export const removeWhiteSpace = (inputString) => {
  if (typeof inputString === 'string') return inputString.trim();
  return inputString;
};

export const removeSpecialCharacters = (value) => {
  if (typeof value === 'string' && value) return +value.replaceAll(',', '');
  if (typeof value === 'number') return value;
  return null;
};

export const formatCurrencyVND = (currency) => {
  if (currency)
    return new Intl.NumberFormat('en-EN', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(currency);
  return '';
};

export const formatStartAndEndTime = ({ startTime, endTime }) => {
  if (startTime) return toLocalTime(startTime, 'YYYY-MM-DD 00:00:00');
  if (endTime) return toLocalTime(endTime, 'YYYY-MM-DD 23:59:59');
  return null;
};

export const arrayMove = (array, from, to) => {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);

  return array;
};

export const parseJson2Html = (params) => {
  let check = params.charAt(0);
  if (check == '<') {
    return params;
  } else {
    let tmp = JSON.parse(params);
    let rsHtml = json2html(tmp);
    return rsHtml;
  }
};

export const onToastError = (message = '') =>
  toast.success(<ToastError messageError={message} />, { transition: Slide, hideProgressBar: true, autoClose: 2000 });

export const mappingFieldError = (errors = {}, mapField = []) => {
  const result = [];
  const fieldErrors = Object.keys(errors);

  fieldErrors.forEach((field) => {
    if (mapField[field]) result.push(mapField[field]);
  });

  onToastError(result.join(', ').toLowerCase());
};

export const checkIfDisplayed = (...rest) => rest.some((v) => !!v);

export const downloadFieldExcel = ({ outputFilename = 'download.xlsx', data }) => {
  const url = URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', outputFilename);
  document.body.appendChild(link);
  link.click();
};
