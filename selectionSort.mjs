let a = [6,8,1,4,2,8]
        // [6,8,1,4,2,8]

// * In selection sort, the idea of the algorithm is to find the smallest unsorted element and
// add it to the end of the sorted list.

let selectionSort  = (a)=>{

    for(let i=0; i<a.length; i++){
        let smallest = i
        for(let j=i+1; j<a.length; j++){
            if(a[j]<a[smallest]){
                smallest = j
            }
        }

        let temp = a[i]
        a[i] = a[smallest]
        a[smallest] = temp

    }

    return a
}

console.log(selectionSort(a))