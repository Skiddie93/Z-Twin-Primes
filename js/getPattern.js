var smallZ=[];
var tallZ=[];


async function getPattern(shape){
let indexOfPrime = 0;
var linebreak;
var printline="";

const responsePrime = await fetch("primes/1mprimes.txt");
var primes = await responsePrime.text()
primes = primes.match(/\d+/g);

for (var i = 0; i < primes.length; i++) {
  primes[i] = parseInt(primes[i]);
}
/*---------------------------------------------------------------------------------------------------------------*/
if (shape=="s") {



for (var i = 0; i <= primes.length; i++) {
  console.log(i);
  if (primes[i]-2 == primes[i-1] & primes.includes(primes[i]+100) & primes.includes(primes[i]+102)) {
    smallZ.push(primes[i], primes[i]-2, primes[i]+100, primes[i]+102)
  }else if (primes[i]+2 == primes[i+1] & primes.includes(primes[i]+100) & primes.includes(primes[i]+98)){
    smallZ.push(primes[i], primes[i]+2, primes[i]+100, primes[i]+98)
 }

  }
  console.log(JSON.stringify(smallZ));
}else if(shape=="t"){

  /*---------------------------------------------------------------------------------------------------------------*/


  for (var i = 0; i <= primes.length; i++) {
    console.log(i);
    if (primes[i]-2 == primes[i-1] & primes.includes(primes[i]+200) & primes.includes(primes[i]+202)) {
      tallZ.push(primes[i], primes[i]-2, primes[i]+200, primes[i]+202)
    }else if (primes[i]+2 == primes[i+1] & primes.includes(primes[i]+200) & primes.includes(primes[i]+198)){
      tallZ.push(primes[i], primes[i]+2, primes[i]+200, primes[i]+198)
   }

    }
    console.log(JSON.stringify(tallZ));


  }
}
