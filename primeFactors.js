 const args = process.argv;
let integer=args[2];
// var arr=[];
// for(let i=1;num!=0;i++)
// if(num%i==0)
// {num=num/i;
//     let flag=1;
//     for(let j=2;j<i;j++)
//     {
//         if(i%j==0)
//         flag=0;
//     }
//     if(flag==1)
//     arr.push(i);
// }

// console.log(arr);

var primeArray = [];
var isPrime;
//find divisors starting with 2

for (i = 2; i < integer/2; i++) {
  if (integer % i == 0) {

    //check if divisor is prime
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}