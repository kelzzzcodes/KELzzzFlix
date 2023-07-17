
export function handleSplit (str) {
    if (str.includes(":")) {
        return str.split(":")[0];
      } else if (str.includes("-")) {
        return str.split("-")[0];
      } else {
        return str;
      }
  }

