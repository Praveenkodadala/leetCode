//
//let a = [4,5,8,3,1,9]

let findElem = (a,elm)=>{

    for(let i=0; i<a.length; i++){
        if(a[i] == elm){
            console.log('position', i+1)
            break
        }
    }


}

console.log(findElem([4,5,8,3,1,9],1))