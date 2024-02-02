/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

   
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] ==0 ){
    //      let elem =  nums.splice(i,1)
    //      console.log("elem", elem)
    //        nums.push(0)
    //     }
    // }
    // console.log(nums)

console.log('hi')
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] ==0){
            nums.splice(i,1)
            nums.push(0)
        }
    }

    console.log(nums)

}

console.log(moveZeroes([0,1,0,3,12]))