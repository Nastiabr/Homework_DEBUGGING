function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new TypeError("Both width and height should be numbers");
    }
  
    if (width <= 0 || height <= 0) {
      throw new RangeError("Width and height should be positive numbers");
    }
  
    return width * height;
  }
  
  try {
    const width = parseFloat(prompt("Please enter the width of the rectangle:"));
    const height = parseFloat(prompt("Please enter the height of the rectangle:"));
  
    const area = calcRectangleArea(width, height);
    alert(`The area of the rectangle is: ${area}`);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }