
// You should implement your task here.

function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let newArr = [];

    matrix.forEach((element, index) => {
        if (index % 2 !== 0) {
            newArr = newArr.concat(element.reverse());
        } else {
            newArr = newArr.concat(element);
        }

    });

    return newArr;
}

module.exports = towelSort;

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(towelSort(matrix));
