
let x= 10; let y= "20"; 

let z= x+y ;

document.getElementById('small').innerHTML = z;

//nan

let nan = 100/"후" ; // nan ,10 

// 100/"10" : 10 

//document.getElementById('nan').innerHTML = typeof nan;/

console.log(typeof nan) ; // 숫자 number 임..

document.getElementById("nan").innerHTML =
    `값: ${nan}<br>타입: ${typeof nan}`;

//infinity

let num = 2;

let txt = "";

while ( num != Infinity) { 
    //무한수까지 증가 
    num = num * num ;
    txt = txt + num + "<br>";
}

document.getElementById('mu').innerHTML = txt;

//진수

let q= 0xFF ;

document.getElementById('six').innerHTML = "OxFF=" + q ;