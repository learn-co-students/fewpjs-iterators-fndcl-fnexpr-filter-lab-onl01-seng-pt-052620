// let array = [1, 2, 3, 4, 5, 6];
// let even = [];
// for(var i=0; i<array.length; i++){
//     if (array[i] % 2 === 0) even.push(array[i]);
// }


// let even = array.filter(n => {
//     return n % 2 === 0;
// });


function findMatching(array, string){
    let emptyArray = [] 
    array.filter(n =>{
        if (n.toLowerCase() == string.toLowerCase()) emptyArray.push(n) 
    })
    return emptyArray
}

function fuzzyMatch(array, string){
   return array.filter(n => {
    return n[0] == string[0]
    })
}

function matchName(array, string){
    return array.filter(n=> {
        return n.name == string 
    })
}

