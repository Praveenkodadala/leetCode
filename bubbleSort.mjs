let a = [6,8,1,4,2,8]

let bubbleSort = (a)=>{

    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            console.log(a[i], a[j])
            if(a[j]>a[j+1]){
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }

    return a
}
console.log(bubbleSort(a))