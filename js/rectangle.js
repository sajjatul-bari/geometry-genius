function rectangleMethod() {
  // width value
  const inputWidth = document.getElementById("input-width");
  const inputWidthText = inputWidth.value;
  const width = parseFloat(inputWidthText);

  // length value
  const inputLength = document.getElementById("input-length");
  const inputLengthText = inputLength.value;
  const length = parseFloat(inputLengthText);

  //calculate rectangle

  const rectangle = width * length;

  // display

  const displayRectangle = document.getElementById("display-rectangle");
  displayRectangle.innerHTML = rectangle;
}
