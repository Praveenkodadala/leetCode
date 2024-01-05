/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
     return 0;
   }
     let tempArr = []
     for(let i=0; i<nums.length; i++){
         if(tempArr.indexOf(nums[i])===-1){
             tempArr.push(nums[i])
         }
     }
 console.log("tempArr", tempArr)
   
     for(let i=0; i<nums.length; i++){
        if (tempArr[i]===0 || tempArr[i]){
         nums[i]=tempArr[i]
        }else{
         nums[i]=nums[i]
        }
     }
 
     console.log("nums here", nums)
 
   return tempArr.length
     
     
 };
 
 //console.log(removeDuplicates([1,1,2]))