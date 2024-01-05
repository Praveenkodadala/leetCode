//“abcd” and “dabc”  anagram

let a = "abcddd";
let b = "dabc";

// let anagram = (a, b) => {
//   let obj1 = {}
//   let obj2 = {}
//   for(let i=0; i<a.length; i++){
//     let count  =1
//     if( obj1[a[i]]){
//         count = obj1[a[i]]+1
//     }
//     obj1[a[i]] = count
//   }
//   for(let i=0; i<b.length; i++){
//     let count  =1
//     if( obj2[b[i]]){
//         count = obj2[b[i]]+1
//     }
//     obj2[b[i]] = count
//   }
//   console.log(obj1, obj2)
//   for(let key in obj1){
//     if(obj1[key] !== obj2[key]){
//         return false
//     }
//   }
//   return true
// };

// console.log(anagram(a, b));


let anagram = (c, b) => {
    // let map1 = new Map()
    // let map2 = new Map()

    // for(let i=0; i<a.length; i++){
    //     map1.set(a[i], (map1.has(a[i])||0) + 1    )
    // }

    // for(let i=0; i<b.length; i++){
    //     map2.set(b[i], (map2.has(b[i])||0) + 1    )
    // }
    
    // for(let [key, value] of map1){
    //          if(!map2.has(key)|| map2.get(key) !== value){
    //             return false
    //          }
    // }


    // console.log(map1.keys())
    // let keys = map1.keys()
    // let values = map1.values()

    // console.log(keys, values)


    let a= [1,2,3,4,1]
    // let temp = []
    // // let popped = a.pop()
    // // let shifted = a.shift()
    // // console.log("a", a)
    // // console.log('popped', popped)
    // // console.log("shifted", shifted)

    // for(let i=0;i<a.length; i++){
    //   if(!temp.includes(a[i])){
    //     temp.push(a[i])
    //   }
    // }
    // console.log(temp)

//     let map1 = new Map()

//     for(let i=0; i<a.length; i++){
//       map1.set(a[i], (map1.has(a[i])||0)+1)
//     }

//     console.log(map1)

//  return true

// let obj = { name: "Praveen", details: { age: 30 } };
// let person = new Object(obj);
// console.log(obj, person)

// person.name = "john"

// console.log("after", obj, person)

// const prefixProducts = new Array(2).fill(1);
// console.log('prefixProducts', prefixProducts)




  };
  
  console.log(anagram(a, b));



