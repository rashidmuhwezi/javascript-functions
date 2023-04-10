function square(num){
    return num * num;
}
for(let i=1; i<=10; i++){
    console.log(`The square of ${i} is ${square(i)}`)
}


//try
function squareNumbers(max){
    for(let i = 1; i <= max; i++){ 
        console.log(`The square of ${i} is ${i*i}`)
    }
 }
squareNumbers(5);
squareNumbers(15)