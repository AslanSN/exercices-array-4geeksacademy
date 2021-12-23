# JS exercises of 03/11/2021

#### Exercises pre-build arrays and objects:
```JavaScript
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function() {}, () => {}, "10", 100, {}];
const exampleArray2 = [[10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]];
function Point(x, y) {
    this.x = x;
    this.y = y;
};
```
### Instructions 

- Documented code
- Applying Functional Programming (Separated into functions)
- The declaration of functions and variables in ENGLISH
- Applying camel case scripting.
- Prepare a README file explaining what has been done and including the instructions to execute the project.


####  1. Create a function that finds the value 4 in the array exampleArray:
#####  Imperative programing
**My Code:**
By using an `object` I saved the position and the value found using a loop and a simple `if` with triple equal, which filters also the type of the item recieved.
```JavaScript
 const imperative4thElement = (arr) => {
    let FourthElement = {
        value: 0,
        position: 0
    };
    for (let i in arr) {
        if (arr[i] === 4) {
            FourthElement.value = arr[i];
            FourthElement.position = Number(i);
        }
    }
    return FourthElement;
}
```
**Output ex.:**
```Terminal
Imperative coding: { value: 4, position: 1 }
```
#####  Declarative programming
**My Code:**
Using a `.filter` method at the `console.log()` with the following simple algorithm the number 4 was found.

```JavaScript
 const declarative4thElement = (item) => item === 4 ? item : null;
```
**Output ex.:**
```Terminal
Declarative coding result:
4
```
####  2. Create a function that cleans up the shit array using declarative programming (split, join or any of them). The function should only leave the strings as the result.
**My Code:**
Using also an `.filter()` method, due I felt it was the most efficient declarative method for coding a small and elegant algorithm, I created this simple filter that discards any element that is not a `string`. 
```JavaScript
const filteringStrings = (item) => typeof item === "string" ? item : null;
```
**Output ex.:**
```Terminal
Shit array with strings only: function,10
```
_And yes, I added a `"10"` string to the original array._

#### 3. Create a function that calculates the distance between two points using the object I provide you as Point, you must use imperative programming for this exercise. Your function must receive two parameters, point a with the coordinates (x1,x2) and point b with the coordinates (y1,y2) and calculate the distance (x2-x1, y2-y1).

**My Code:**
Using a default object I used a `ternary` conditional `arrow function` to solve the algorithm as effective as possible.

```JavaScript
const distanceCalculation = (pointA, pointB) => ((pointA instanceof Point && pointB instanceof Point) ? new Point((pointB.x - pointA.x), (pointB.y - pointA.y)) : null)

```
**Output ex.:**
```Terminal
The distance between the two points registered is:  Point { x: 4, y: -6 }
```
#### 4. Create a function that compares the values of exampleArray2 and exampleArray1, but stops on the type. If the array is shorter it should stop comparing on the shorter one.
**My Code:**
I found myself obliged to use three steps/functions to achieve the desired result.


#####First step: THE MATRIX RENDER
```JavaScript
const render = (matrix, internalResponse = []) => {
    
    if (!Array.isArray(matrix)) {
      if (!typeof internalResponse === 'undefined') return;
      else return "Error trying to load matrix";
    }
    
    matrix.forEach((rhs) => {
      if (typeof rhs === 'number' || typeof rhs === 'string') internalResponse.push(rhs);
      return render(rhs, internalResponse);
    });
    return internalResponse;
  }
```
I made both of them pass the render to ensure that the `arrays` received were no more considered as `matrix` for the nexts steps be easier to manipulate them.
##### Second step: THE ARRAY COMPARATOR
I first needed to compare the length of both arrays to make the shorter one dictate the iterations in the loops that need to be used to evaluate each of the positions within them.

So I made a function that would compare the length and according to it call another function passing it the arrays to evaluate in a strategic position so that it would always iterate the values according to the maximum length of the smaller one.
```JavaScript
const arrayComparator = (arr1, arr2) => {
    let neatArray1 = render(arr1);
    let neatArray2 = render(arr2);
	
    if (neatArray1.length > neatArray2.length) 
    {
        console.log(`First array is longer by ${neatArray1.length - neatArray2.length}`)
        return valueComparator(neatArray2, neatArray1);
    } 
    else if (neatArray1.length = neatArray2.length) 
    {
        console.log(`Both arrays have the same length ${neatArray1.length} = ${neatArray2.length}`)
        return valueComparator(neatArray1, neatArray2);
    } 
    else 
    {
        console.log (`The second array is longer by ${neatArray2.length - neatArray1.length}`)
        return valueComparator(neatArray1, neatArray2);
    }
};
```
As you can see in the code I used two new `vars` to save the `rendered` arrays and make them suitable for the process.

Each condition logs out a declaration of which array is _longer_ and the length of each one!

Also you can point out that a new function is called insite each condition. What leads me to the following step:
##### Third step: THE VALUE COMPARATOR
```JavaScript
const valueComparator = (arr1, arr2) => {

    function Comparator (i, string ,type, type2) {
        this.id = i;
        this.comparation = string;
        this.arr1Type = type;
        this.arr2Type = type2;
    };

    let comparation = "";
    let comparationArr = [];
	
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
```
Finally you can appreciate that I didn't want a small info output, I wanted to be **clear** and **complete**. Each value compared to the value from the other array at the same position. So I figured out the best way was to create a `dictionary object` for each item from the **smallest** array. 

Due that the dictionary is declared as a function I had to create a new `var` to store each comparison's iteration and an `Array` to store the iterations one by one using a `.push()` method being the winner var to be `returned`. 

~~_GASP Too much info ..._ ~~:stuck_out_tongue: 

So! **TA-DAH!** :joy_cat:

**Output ex.:**
```Terminal
Both arrays have the same length 12 = 12

Comparation of each value of the arrays in the same position: [
  Comparator {
    id: 0,
    comparation: '10 = 10',
    arr1Type: 'number',
    arr2Type: 'number'
  },
  Comparator {
    id: 1,
    comparation: '4 = 4',
    arr1Type: 'number',
    arr2Type: 'number'
  },
  ...
```

------------
## How to run it
Just type `node index.js` into the terminal to run it! 

------------
> _Thank you for reading,
>Aslan_