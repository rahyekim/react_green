
class Car {
    
    constructor(name, year){ //생성자
        this.carName = name;  // 속성 = 인수;
        this.carYear = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.carYear;
    }
}

const myCar = new Car("audi", 2026);

const yourCar = new Car("bmw", 2020);

document.getElementById("cls").innerHTML = 

myCar.carName + " "+ yourCar.carYear +"<br>"+
"내자동차는 " + myCar.age() + "살이고" + 
"<br> 니 차는 " + yourCar.age() + "살이다";


class Char {

    constructor(brand){
        this.charName = brand
        
    }

    present(){
        return 'i have a '+ this.charName;
    }
    
}

class Bike extends Char{

    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show() {
        return `차브랜드명(상속) : ${this.present()} 와 모델: ${this.model}`
    }
}

let vehicle = new Bike('ford', 'cls500')

document.getElementById("inherit").innerHTML = vehicle.show();
