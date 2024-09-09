function SortArray(arr){
    let first = 0;
    let second = 0;
    let final = arr.length-1;

    while (second<= final){
        if(arr[second]===0){
            [arr[first],arr[second]] = [arr[second],arr[first]];
            first++;
            second++;

        }
        else if (arr[second] ===1){
            second++
        }
        else{
            [arr[final],arr[second]]= [arr[second],arr[final]];
            final--
        }
    }
}

let dynamicArr = [2, 1, 1, 2, 1, 0, 2, 1];
SortArray(dynamicArr);
console.log(dynamicArr)