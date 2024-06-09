function calculateEllipseArea() {
  const perameterA = getInputValueById("pera-a");
  const perameterB = getInputValueById("pera-b");
  const ellipse = 3.1416 * perameterA * perameterB;
  setdisplayValue("display-ellipse", ellipse);
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
