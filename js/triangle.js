function triangleMethod() {
  // base value
  const inputBase = document.getElementById("input-base");
  const inputBaseText = inputBase.value;
  const base = parseFloat(inputBaseText);

  //   height value
  const inputHeight = document.getElementById("input-height");
  const inputHeightText = inputHeight.value;
  const height = parseFloat(inputHeightText);

  //calculate triangle

  const triangle = 0.5 * base * height;

  // display

  const displayTriangle = document.getElementById("display-triange");
  displayTriangle.innerHTML = triangle;
}
