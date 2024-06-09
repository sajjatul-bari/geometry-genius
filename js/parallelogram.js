function calculateParallelogramArea() {
  const base = getInputValueById("para-base");

  const height = getInputValueById("para-height");

  const parallelogramArea = base * height;

  setValue("display-parallelogram", parallelogramArea);
}

function getInputValueById(inputFieldId) {
  const inputValue = document.getElementById(inputFieldId);
  const inputValueText = inputValue.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setValue(element, area) {
  const displayValue = document.getElementById(element);
  displayValue.innerHTML = area;
}
