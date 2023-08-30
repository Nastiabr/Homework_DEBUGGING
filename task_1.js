const sumSliceArray = (arr, first, second) => {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
  
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error("Indexes must be numbers");
    }
  
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw new Error("Indexes are out of range");
    }
  
    return arr[first] + arr[second];
  };
  
  try {
    const arr = [1, 2, 3, 4, 5];
    const sum = sumSliceArray(arr, 2, 4);
    console.log(sum); // 8 (3 + 5)
  
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
  