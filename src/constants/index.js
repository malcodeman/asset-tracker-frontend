const IS_PROD_ENV = process.env.NODE_ENV === "production";
const API_URL = process.env.REACT_APP_API_URL;
const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};
const NAME = "Tracker";
const BREAKPOINTS = {
  SMALL_DEVICES: "576px",
  MEDIUM_DEVICES: "768px",
  LARGE_DEVICES: "992px",
  EXTRA_LARGE_DEVICES: "1200px",
};

export default {
  IS_PROD_ENV,
  THEMES,
  NAME,
  BREAKPOINTS,
  API_URL,
};
