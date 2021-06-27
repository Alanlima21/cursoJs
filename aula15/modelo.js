let num = [5,8,2,9,3];
num.sort();

for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

console.log('------foreach-------')

for(let val in num){
    console.log(num[val]);
}
//num.push(3);
//console.log(`Nosso vetor é o ${num}`);