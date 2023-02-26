
// You should implement your task here.

function towelSort (matrix) {
  let newArr = [];

  matrix.forEach((element) => {
     const i = 0;
  const concArr = newArr.concat(matrix[i], matrix[i].reverse(), matrix[i]);
  return concArr;

  });

}

module.exports = towelSort;
