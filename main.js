"use strict";
let array1=[1,2,3,4];
let array2=[2,2,2,2];
let array=array1.concat(array2);
function select(arr1){
    for(let i=0;i<arr1.length;i++){
        for(let j=1+i;j<arr1.length;j++){
            if(arr1[i]===arr1[j]){
                arr1.splice(j,1);
            }
        }
    }
    for(let i=0;i<arr1.length;i++){
        for(let j=1+i;j<arr1.length;j++) {
            if(arr1[i]===arr1[j]){
                select(arr1);
            }
        }
    }
    return arr1;
}
console.log(select(array));
