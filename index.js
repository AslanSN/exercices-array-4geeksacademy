const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function() {}, () => {}, "10", 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
]


console.log(`||Exercise 1||`);
console.log();

/**
 * !Finder
 * @param {array} arr 
 * @returns {Number} ? 4
 */
 const imperative4thElement = (arr) => {

    let FourthElement = {
        value: 0,
        position: 0
    }

    for (let i in arr) {
        if (arr[i] === 4) {
            FourthElement.value = arr[i];
            FourthElement.position = Number(i);
        }
    }

    return FourthElement;
}


console.log("Imperative coding:",imperative4thElement(exampleArray));
console.log();

/**
 * !Finder
 * @param {array} arr 
 * @returns Number  4
 */
const declarative4thElement = (item) => item === 4 ? item : null;


console.log(`Declarative coding result:
${
    exampleArray.filter(declarative4thElement)
}`);
console.log('-------------------------------------------')


/**
 * !Filter
 * @param {*} item 
 * @returns {string} string
 */
const filteringStrings = (item) => typeof item === "string" ? item : null;


console.log(`||EXERCISE 2||`);
console.log();
console.log(`Shit array with strings only: ${shit.filter(filteringStrings)}`);
console.log('-------------------------------------------');


console.log("||Exercise 3||");
console.log();


function Point(x, y) {
    this.x = x;
    this.y = y;
}

let a = new Point(5, 8);
let b = new Point(9, 2);

const distanceCalculation = (pointA, pointB) => ((pointA instanceof Point && pointB instanceof Point) ? new Point((pointB.x - pointA.x), (pointB.y - pointA.y)) : null)

console.log('The distance between the two points registered is: ',distanceCalculation(a,b));
console.log('-------------------------------------------')


console.log('||Exercise 4||');
console.log();

const render = (matrix, internalResponse = []) => {
    //comprobar que ya es numero
    if (!Array.isArray(matrix)) {
      if (!typeof internalResponse === 'undefined') return;
      else return "Error trying to load matrix";
    }
    //seguir descomponiendo la matriz
    matrix.forEach((rhs) => {
      if (typeof rhs === 'number' || typeof rhs === 'string') internalResponse.push(rhs);
      return render(rhs, internalResponse);
    });
    return internalResponse;
  }

/**
 * !Convertor
 * @param {*} item 
 * @returns {Number} item
 * @returns {Null} item
 */
const number = (item) =>  isNaN(item) === true ? null : Number(item); 

/**
 * !Filter
 * @param {*} item 
 * @returns {Number}
 */
const filteringNulls = (item) => typeof item === "null" ? null : item;

/**
 * !Comparator
 * ?Compares the VALUES
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array of objects} comparationArr
 */
const valueComparator = (arr1, arr2) => {

    function Comparator (i, string ,type, type2) {
        this.id = i;
        this.comparation = string;
        this.arr1Type = type;
        this.arr2Type = type2;
    }

    let comparation = "";
    let comparationArr = [];

    /**
     * !Comparator
     * @param {number || numberString} item 
     * @param {number || numberString} value 
     * @returns {string} compared item and value
     */
    const isCompared = (item, value) => 
        Number(item) > Number(value) ? 

            `${item} > ${value}` : 
            Number(item) == Number(value) ? 

                `${item} = ${value}` : 
                `${item} < ${value}`;

    for (let i = 0; i < arr1.length; i++) {

       comparation = new Comparator(
            i,
            isCompared(arr1[i], arr2[i]),
            typeof arr1[i],
            typeof arr2[i]
            );
        
        comparationArr.push(comparation);
        
    };

return comparationArr;
}

/**
 * !Comparator
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
const arrayComparator = (arr1, arr2) => {

    let neatArray1 = render(arr1);
    let neatArray2 = render(arr2);
    

    if (neatArray1.length > neatArray2.length) 
    {
        console.log(`First array is longer by ${neatArray1.length - neatArray2.length}`)
        console.log();

        return valueComparator(neatArray2, neatArray1);
    } 
    else if (neatArray1.length = neatArray2.length) 
    {
        console.log(`Both arrays have the same length ${neatArray1.length} = ${neatArray2.length}`)
        console.log();

        return valueComparator(neatArray1, neatArray2);
    } 
    else 
    {
        console.log (`The second array is longer by ${neatArray2.length - neatArray1.length}`)
        
        console.log();

        return valueComparator(neatArray1, neatArray2);
    }

};

console.log("Comparation of each value of the arrays in the same position:", arrayComparator(exampleArray, exampleArray2));



