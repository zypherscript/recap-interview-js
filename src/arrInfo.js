export const arrInfoList = [{
    name: 'concat()',
    modifying: 'No',
    description: 'Concatenates two or more arrays and returns a new array.',
    details: `
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const newArray = array1.concat(array2);
    console.log(newArray);   // Output: [1, 2, 3, 4, 5, 6]`
  }, {
    name: 'map()',
    modifying: 'No',
    description: 'Creates a new array by applying a callback function to each element of the original array.',
    details: `
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6, 8]`
  }, {
    name: 'filter()',
    modifying: 'No',
    description: 'Creates a new array containing elements from the original array that satisfy a certain condition specified by a callback function.',
    details: `
    const numbers = [1, 2, 3, 4];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]`
  }, {
    name: 'reduce()',
    modifying: 'No',
    description: 'Applies a callback function to each element of the array, resulting in a single output value.',
    details: `
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
    console.log(sum); // Output: 10`
  }, {
    name: 'find()',
    modifying: 'No',
    description: 'Returns the first element in the array that satisfies a provided testing function.',
    details: `
    const numbers = [1, 2, 3, 4];
    const firstEven = numbers.find(num => num % 2 === 0);
    console.log(firstEven); // Output: 2`
  }, {
    name: 'some()',
    modifying: 'No',
    description: 'Checks if at least one element in the array satisfies a provided testing function.',
    details: `
    const numbers = [1, 2, 3, 4];
    const hasEven = numbers.some(num => num % 2 === 0);
    console.log(hasEven); // Output: true`
  }, {
    name: 'every()',
    modifying: 'No',
    description: 'Checks if all elements in the array satisfy a provided testing function.',
    details: `
    const numbers = [1, 2, 3, 4];
    const allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven); // Output: false`
  }, {
    name: 'slice()',
    modifying: 'Yes',
    description: 'Returns a shallow copy of a portion of an array into a new array.',
    details: `
    const numbers = [1, 2, 3, 4];
    const sliced = numbers.slice(1, 3);
    console.log(sliced); // Output: [2, 3]`
  }, {
    name: 'splice()',
    modifying: 'Yes',
    description: 'Modifies the array by removing or replacing existing elements and/or adding new elements.',
    details: `
    const numbers = [1, 2, 3, 4];
    const removedElements = numbers.splice(1, 2, 5, 6);
    console.log(numbers); // Output: [1, 5, 6, 4]
    console.log(removedElements); // Output: [2, 3]`
  }, {
    name: 'push()',
    modifying: 'Yes',
    description: 'Adds one or more elements to the end of the array and returns the new length of the array.',
    details: `
    const numbers = [1, 2, 3];
    const newLength = numbers.push(4, 5);
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    console.log(newLength); // Output: 5`
  }, {
    name: 'pop()',
    modifying: 'Yes',
    description: 'Removes the last element from the array and returns that element.',
    details: `
    const numbers = [1, 2, 3, 4, 5];
    const lastElement = numbers.pop();
    console.log(numbers); // Output: [1, 2, 3, 4]
    console.log(lastElement); // Output: 5`
  }, {
    name: 'shift()',
    modifying: 'Yes',
    description: 'Removes the first element from the array and returns that element, shifting all subsequent elements to a lower index.',
    details: `
    const numbers = [1, 2, 3, 4, 5];
    const firstElement = numbers.shift();
    console.log(numbers); // Output: [2, 3, 4, 5]
    console.log(firstElement); // Output: 1`
  }, {
    name: 'unshift()',
    modifying: 'Yes',
    description: 'Adds one or more elements to the beginning of the array and returns the new length of the array.',
    details: `
    const numbers = [2, 3, 4, 5];
    const newLength = numbers.unshift(1);
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    console.log(newLength); // Output: 5`
  }];
  