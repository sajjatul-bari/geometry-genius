function calculatePentagonArea() {
  const peri = getInputValueById("peri");
  const apo = getInputValueById("apo");

  const pentagonArea = 0.5 * peri * apo;

  setdisplayValue("display-pentagon", pentagonArea);
}
function getInputValueById(inputFieldId) {
  const inputValue = document.getElementById(inputFieldId);
  const inputValueText = inputValue.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setdisplayValue(elementId, area) {
  const displayValue = document.getElementById(elementId);
  displayValue.innerHTML = area;
}
