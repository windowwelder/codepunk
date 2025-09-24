// Given a string str, 
// find the length of the longest substring without repeating characters.

const str = "abcghjkdsabcbb"
const strArr = str.split("")
let acc = [strArr[0]]
let lengthOfLongestSubstring = 0

for (i = 0; i < strArr.length - 1; i++) {
    if (acc.includes(strArr[i+1])) {
        acc = acc.slice(1)
        acc.push(strArr[i+1])
    }
    else {
        acc.push(strArr[i+1])
        lengthOfLongestSubstring = lengthOfLongestSubstring <= acc.length ? acc.length : lengthOfLongestSubstring
        console.log(lengthOfLongestSubstring)
    }
   
    console.log(acc)
}