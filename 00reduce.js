// this me experimenting with reduce method

let arr = ["ron", "hermione", "harry", "vOlDemort"];

// we will convert this array of strings to an array of objects
const reducer = (accumulator, currentValue, currentIndex, source) => {
  // console.log("Type of acc: ", typeof accumulator); //object
  return accumulator.concat({
    name:
      // a bit of processing, wait what? this is almost replacing .map()
      currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase()
  });
};

console.log(arr.reduce(reducer, []));
