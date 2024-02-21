function UnveilingTheSecrets(n) { 
    let arr = 0;
    const arrN = Array.from(String(n), Number); //change n to array 75 tobe [7,5]
    for (var i = 0; i < arrN.length; i++) {  // loop arrN
        arr += arrN[i] // every arr sum with arrN[i] (i is index of arrary in ArrN)
    }
    return arr + n; // return arr and sum with n 
}

export default UnveilingTheSecrets;
