var primes;
const scope = 1000000;

const loading = document.getElementById("loading");



async function read(){
let indexOfPrime = 0;
var linebreak;
var printline="";

const responsePrime = await fetch("primes/1mprimes.txt");
const responsesmallZ = await fetch("primes/smallZ.txt")
const responsetallZ = await fetch("primes/tallZ.txt")
var primes = await responsePrime.text()
var smallZ = await responsesmallZ.text()
var tallZ = await responsetallZ.text()
smallZ = smallZ.match(/\d+/g);
primes = primes.match(/\d+/g);
tallZ = tallZ.match(/\d+/g);

for (i in primes) {
  primes[i] = parseInt(primes[i]);
}

for (i in smallZ) {
  smallZ[i] = parseInt(smallZ[i]);
}

for (i in tallZ) {
  tallZ[i] = parseInt(tallZ[i]);
}

/*-------------------------------------------------------------------------------------*/

for (var i = 1; i < scope; i++) {
  linebreak = i-1;
  if (linebreak%100 == 0) {
    printline+="<br>"
  }

  if (i==primes[indexOfPrime]) {
    if (smallZ.includes(i) & tallZ.includes(i)) {

        printline+='<p style="color:red">.</p>'

    }else if (smallZ.includes(i)) {
        printline+='<p style="color:pink">.</p>'

     }else if(tallZ.includes(i)){

       printline+='<p style="color:orange">.</p>'


    }else{
    printline+="<p>.</p>"

     }
     indexOfPrime++
  }else{
    printline+="."

  }


 }

 document.getElementById("content").innerHTML= printline;
 loading.parentNode.removeChild(loading);
  }


read()
