function processor(transmission) {
  if (transmission.indexOf("::") < 0) {
    return -1;
  }
  let parts = transmission.split("::");
  let rawData = parts[1];
  let id = Number(parts[0]);
  if (
    rawData[0] !== "<" ||
    rawData[rawData.length - 1] !== ">" ||
    rawData.slice(1, rawData.length - 1).includes("<") ||
    rawData.slice(1, rawData.length - 1).includes(">")
  ) {
    rawData = -1;
  }
  return {
    id: id,
    rawData: rawData,
  };
}
module.exports = processor;
