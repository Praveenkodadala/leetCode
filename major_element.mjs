/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    for(let i=0;i<nums.length; i++){
             let count =1
             if( obj[nums[i]]){
                  count = count + obj[nums[i]]
             }
             obj[nums[i]] = count

    }
    console.log(obj)
    let major  = 0
    console.log("major", major)
    let resut = ''
    for(let key in obj){
        console.log("obj[key]",obj[key] )
         if(obj[key]>major){
             major = obj[key]
             resut = key
         }
    }


return parseInt(resut);


};

console.log(majorityElement( [2,2,1,1,1,2,2]))