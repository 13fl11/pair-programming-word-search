const wordSearch = (letters, word) => { 
    // const horizontalJoin = letters.map(ls => ls.join(''))
    // const verticalJoin = letters.map(ls => ls.join(''))
    // for (l of horizontalJoin) {
    //     if (l.includes(word)) return true
    // }
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(verticalJoin);
    if (horizontalJoin.includes(word)) return true 
   const transpose1 = transpose(letters)
   console.log(transpose1);
    const verticalJoin = transpose1.map(ls => ls.join(''))
    if (verticalJoin.includes(word)) return true
    
    // put transpose function below
   return false 

}

const transpose = function(matrix) {
    // Put your solution here
  
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let elementArray = [];
      for (let j = 0; j < matrix.length; j++) {
        //console.log(matrix[i][j]);
      elementArray.push(matrix[j][i]);
     }
     newMatrix.push(elementArray);
  }
  
   return newMatrix
  
  };

module.exports = wordSearch