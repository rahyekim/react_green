
let x= 10; let y= "20"; 

let z= x+y ;

document.getElementById('small').innerHTML = z;

//nan
let nan = NaN;

document.getElementById('nan').innerHTML = 
`${100/ "후후"} + ${100/"10"} + ${typeof nan}`;

//NaN 10 number





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