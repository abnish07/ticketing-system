export function trigoSeries(cnt, strength) {
  const data = [];
  for (let i = 0; i < cnt; i++) {
    data.push(
      (Math.sin(i / strength) * (i / strength) + i / strength + 1) *
        (strength * 2)
    );
  }

  return data;
}

export function formatDateToLocal(inputDateStr, eta) {
  const inputDate = new Date(inputDateStr);
  const day = (eta ? inputDate.getDate() + 1 : inputDate.getDate())
    .toString()
    .padStart(2, "0");
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const year = inputDate.getFullYear();

  return `${day}-${month}-${year}`;
}

export function showLoader() {
  const evt = new CustomEvent("showLoader", {});
  window.dispatchEvent(evt);
}

export function hideLoader() {
  const evt = new CustomEvent("hideLoader", {});
  window.dispatchEvent(evt);
}

export function showToaster(data) {
  const evt = new CustomEvent("showToaster", { detail: data });
  window.dispatchEvent(evt);
}

export function hideToaster() {
  const evt = new CustomEvent("hideToaster", {});
  window.dispatchEvent(evt);
}

export const ROLE_MAPPING = {
  superadmin: "Super Admin",
  admin: "Admin",
  user: "User",
};

export const COUNTRY_MAPPING = {
  DE: "Germany",
  IN: "India",
};

export const STATUS_MAPPING = {
  0: "Deactive",
  1: "Active",
  2: "First Time Login",
  3: "Password Expired",
};

export const formatAddress = (address) => {
  const street = address.street || "-";
  const zipCode = address.zip_code || "-";
  const city = address.city || "-";
  const country = address.country || "-";

  return `${street}, ${zipCode}, ${city}, ${country}`;
};

export function isObjectEmpty(obj) {
  return obj && Object.keys(obj) && Object.keys(obj).length === 0;
}

export const validateForm = (field, value) => {
  const emailRegex = /\S+@\S+\.\S+/;
  switch (field) {
    case "email":
      if (!value || !emailRegex.test(value)) {
        return {
          isValid: false,
          errorMessage: "Please enter a valid email address",
        };
      }
      break;
    case "password":
      if (value.length < 8) {
        return {
          isValid: false,
          errorMessage: "Password must be at least 8 characters long",
        };
      }
      break;
    case "status":
      break;
    default:
      if (!value) {
        return {
          isValid: false,
          errorMessage: `${field.split("_").join(" ")} is required`,
        };
      }
  }
  return { isValid: true, errorMessage: "" };
};

export const getCommonHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const get3MonthAgoDate = () => {
  const d = new Date();
  const month = d.getMonth();
  d.setMonth(d.getMonth() - 3);
  while (d.getMonth() === month) {
    d.setDate(d.getDate() - 1);
  }
  return {
    startDate: d.toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  };
};

export const returnStatusStyle = (status) => {
  switch (status) {
    case "PENDING":
      return { backgroundColor: "#F3A537", color: "white" };
    case "ORDERED":
      return { backgroundColor: "#1E91CF", color: "white" };
    case "DELIVERED":
      return { backgroundColor: "#4BB64B", color: "white" };
    case "PARTIALLY_DELIVERED":
      return { backgroundColor: "#964B00", color: "white" };
    default:
      return { backgroundColor: "#E2D4D3", color: "white" };
  }
};

export const returnOperationStyle = (status) => {
  switch (status) {
    case "SUCCESS":
      return { backgroundColor: "#4BB64B", color: "white" };
    case "FAILED":
      return { backgroundColor: "#DE542F", color: "white" };
    default:
      return { backgroundColor: "#1E91CF", color: "white" };
  }
};

export const STATUS_MAP = {
  0: "ACTIVE",
  1: "INACTIVE",
};

export const DEALER_MAPPING = {
  "NORA Wolfsburg": "NORA",
  "Bleker Autoteile GmbH": "BLEKER",
  "Logistikpark Stollberg": "LPS",
  "EFA Autoteilewelt GmbH - Friedberg": "EFA",
  "Schade  Gmbh & Co KG": "SCHADE",
};

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const formattedDate = `${String(date.getUTCDate()).padStart(2, "0")}-${String(
    date.getUTCMonth() + 1
  ).padStart(2, "0")}-${date.getUTCFullYear()}`;
  const formattedTime = `${String(date.getUTCHours()).padStart(
    2,
    "0"
  )}:${String(date.getUTCMinutes()).padStart(2, "0")}:${String(
    date.getUTCSeconds()
  ).padStart(2, "0")}.${String(date.getUTCMilliseconds()).padStart(3, "0")}`;

  return { formattedDate, formattedTime };
}

export function formatGermanTimestamp(createdAt) {
  if (!createdAt) {
    return "-";
  }

  const formatData = createdAt?.split(", ");
  const geDate = formatData[0]?.split("/")?.join("-");
  const geTime = formatData[1];
  return { geDate, geTime };
}

export const PART_DEALER_MAP = {
  PART_DEALER_STOCK_INFO: "Stock Info",
  "PARTS_DEALER:PLACE_ORDER": "Place Order",
  "PARTS_DEALER:VALIDATATION_CHECK": "Validation",
  "PARTS_DEALER:DELIVERED": "Delivered",
};

export function convertToSentenceCase(key) {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function convertMilliseconds(ms) {
  const totalSeconds = ms / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  const seconds = Math.floor(remainingSeconds);
  const milliseconds = Math.floor((remainingSeconds - seconds) * 1000);

  return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(2, "0")}`;
}

export const formatXml = (xml) => {
  const PADDING = " ".repeat(2); // define the padding for indentation
  const reg = /(>)(<)(\/*)/g;
  let pad = 0;

  // add newlines and indentation
  return xml
    .replace(reg, "$1\r\n$2$3")
    .split("\r\n")
    .map((node) => {
      let indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/)) {
        if (pad !== 0) {
          pad -= 1;
        }
        /* eslint-disable */
      } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }

      const padding = PADDING.repeat(pad);
      pad += indent;

      return padding + node;
    })
    .join("\r\n");
};

export function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&"); // This is just to avoid case sensitiveness for query parameter name
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2]);
}

export const trimLabels = (labels) => {
  for (let index = 0; index < labels.length; index++) {
    labels[index] =
      labels[index].length > 15
        ? labels[index].substring(0, 15) + "..."
        : labels[index];
  }
};
