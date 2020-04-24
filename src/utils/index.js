import { format } from "date-fns";

function isEmpty(object) {
  return Object.entries(object).length === 0 && object.constructor === Object;
}

function getParam(myParam) {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get(myParam);

  return param;
}

function formatDate(value) {
  return (value && format(new Date(value), "dd/MM/yyyy")) || null;
}

export default {
  isEmpty,
  getParam,
  formatDate,
};
