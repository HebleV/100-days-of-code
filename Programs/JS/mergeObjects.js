//@@@@@@@@@@@@@@@@@@@@@@ SHALLOW MERGE @@@@@@@@@@@@@@@@@@@@@@@@@@@@

const person = {
  name: "jack",
  age: "22",
  color: "blue",
};

const update = {
  book: "Atomic Habits",
  color: "black",
};

//Example 1 using spread operator
const mergeObj = { ...person, ...update };
// console.log(mergeObj);

//Example 2 using Object.assign
const merged = Object.assign({}, person, update);
// console.log(merged);

//Example 3 to show behavior
const person1 = {
  name: {
    first: "jack",
  },
  age: "22",
  color: "blue",
};

const update1 = {
  name: {
    last: "dawson",
  },
};

//This is not merging the nested object "name". It will rather over ride.
const mergeObj1 = { ...person1, ...update1 };
// console.log(mergeObj1);

//Example to show shallow behaviour

const name = {
  first: "john",
  last: "doe",
};

const person2 = {
  name,
  age: "22",
  color: "blue",
};

const update2 = {
  color: "black",
};

const mergedObj2 = { ...person2, ...update2 };
// console.log(mergedObj2)

// This will also add the change in mergedObj2.
name.first = "george";

// console.log(mergedObj2)




//@@@@@@@@@@@@@@@@@@@@@@ DEEP MERGE @@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Example 1 using spread operator (but only 1 deep level or any level that user knows, so it is not dynamic)

const person3 = {
  name: {
    first: "john",
  },
  age: "22",
  color: "blue",
  cities: ["Bangalore","Berlin"]
};

const update3 = {
  name: {
    last: "doe",
  },
  color: "black",
  cities: ["Bonn"]
};

const mergedObj3 = {
  ...person3,
  ...update3,
  name: { ...person3.name, ...update3.name },
  cities: [...person3.cities, ...update3.cities]
};
console.log(mergedObj3);

//Note: This would be better handled by libraries like "lodash" (merge function for deep objects) and "deepmerge"(for handling both objects and arrays inside object)
