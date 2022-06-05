// totalArray([{‘name’: ‘a’, ‘count’: 5},{‘name’: ‘b’, ‘count’: 7},{‘name’: ‘a’, ‘count’: 5}], [{‘name’: ‘a’, ‘count’: 5},{‘name’: ‘c’, ‘count’: 5},{‘name’: ‘b’, ‘count’: 5}]
// Output = [{‘name’:’a’, ‘count’: 15},{‘name’: ‘b’, ‘count’: 12}, {‘name’: ‘c’, ‘count’: 5}]

function totalArray(arr1, arr2) {
  const newObj1 = {};
  arr1.forEach(arr => {
  newObj[arr1.name] = arr1.count1 + (newObj1[arr1.name] || 0);
});
