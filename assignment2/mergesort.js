function mergesort(arr) {
    if (arr.length == 1) {
        return arr;
    } else {
        const mid = Math.floor((0 + arr.length) / 2);
        const arr1 = arr.slice(0, mid);
        const arr2 = arr.slice(mid, arr.length)
        return merge(mergesort(arr1,), mergesort(arr2))
    }
}

function merge( arr1, arr2){
    let temp =[];
    while(arr1.length>0 && arr2.length>0){
        if(arr1[0]<arr2[0]){
            const ele = arr1.shift();
            temp.push(ele);
        }else{
            const ele = arr2.shift();
            temp.push(ele);
        }

    }
    if(arr1.length>0){
        temp = [...temp,...arr1];
    }
    if(arr2.length>0){
        temp = [...temp,...arr2];
    }
    return temp;
}


const arr1 = [-6, 4, -2, 8 ,5, 9]
console.log(mergesort(arr1));
const arr2 = [-6, 4, 10,33,-44,-2, 8 ,5, 9]
console.log(mergesort(arr2));
const arr3 = [-6, 4, 12,90,-2, 8 ,5, 9]
console.log(mergesort(arr3));

