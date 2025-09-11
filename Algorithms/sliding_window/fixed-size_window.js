//You are given an array of integers nums and an integer k.
//Find the maximum sum of any subarray of length k.

const nums = [2, 1, 5, 1, 3, 2]
const k = 3
let sum = nums.slice(0, k).reduce((acc,val) => acc + val, 0)
console.log(nums.slice(0, k - 1))

for ( let i = 0; i < k + 1; i++) {
    i === 0 ? null : sum = sum - nums[i - 1] + nums[i + 2]
    console.log(sum)
}



