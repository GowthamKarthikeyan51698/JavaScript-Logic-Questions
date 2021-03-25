// Matrix multiplication

function multiplymatrix(m1, m2){
    var result = [];
    for(let i=0; i<m1.length; i++){
        result[i] = [];
        for(let j=0; j<m2[0].length; j++){
            var mul = 0;
            for(let k=0; k<m1[0].length; k++){
                mul += m1[i][k] * m2[k][j];
            }
            result[i][j] = mul;
        }
    }
    return result;
}

let m1=[[1,2],[3,4]],
    m2=[[5,6],[7,8]];
console.log(multiplymatrix(m1, m2));
