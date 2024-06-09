function calculateRhombusArea() {
  const d1 = getInputValueById("rhombus-d1");
  const d2 = getInputValueById("rhombus-d2");
  const rhombusArea = 0.5 * d1 * d2;

  setValue("display-rhombus", rhombusArea);
}

function getInputValueById(inputFieldId) {
  const inputValue = document.getElementById(inputFieldId);
  const inputValueText = inputValue.value;
  const value = parseFloat(inputValueText);
  return value;
}

function setValue(elementId, area) {
  const displayValue = document.getElementById(elementId);
  displayValue.innerHTML = area;
}
