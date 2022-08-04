function moveZeros(arr) {
  return arr.sort(function(a) {
       if (a === 0) {
         arr.pop(a)
         return arr.push(a)
       }
    });   
};

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));