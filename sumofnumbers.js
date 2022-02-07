function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log('For');
console.log(sumFor([1, 2, 3, 4, 5, 6]));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log('While');
console.log(sumWhile([1, 2, 3, 4, 5, 6]));

function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + sumRecursion(nums.slice(1));
}
console.log('Recursive');
console.log(sumRecursion([1, 2, 3, 4, 5, 6]));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (element, memo) => element + memo);
}
console.log('Underscore');
console.log(sumTheSimpleWay([1, 2, 3, 4, 5, 6]));
