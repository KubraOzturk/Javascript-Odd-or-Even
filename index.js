
function oddOrEven(num){
    let sum=String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

    if(sum%2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");

    }
}

oddOrEven(68);