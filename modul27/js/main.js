function kthesms(){
    alert("Ky eshte nje funksion qe kthen nje sms ")
}
kthesms();

//parametra qe na ndihmojn per 
function sum(a,b,c){// per treguar funksionit se qfar vlera pret
    return a + b + c;
}
console.log(sum(2,5,7));

function ktheminutat(minutat){
    return minutat * 60;

}
console.log(ktheminutat(4));

var car={
    name:"mercedes",
    color:"red",
    year:2000,
    kilometrat:1000,
    //ni funksion brenda objektit quhet metode
    starEngine:function(){
        alert("vroom! ");
    },
    get getKm(){
        return this.kilometrat;
    },
    set setKm(km){
        this.kilometrat=km;
    }

};

console.log(car.getKm);

car.setKm=50;

console.log(car.getKm);



var school={
    name:"digital school",
    subject:"programim",
    studenta:2000,
    year:1000,
};
alert(school.name);


var computer= new Object();
computer.name="Lenovo";
computer.cpu="intel core i9";
computer.ram="16GB";

computer.type=function(){
    return this.name +" , " + this.cpu + " , " + this.ram +" , ";  

}

alert(computer.type());

//konstruktor i cili na ndihmon qe te kemi nje shbllon per te krijuar objekte te cilat kan
//atribute te njejta por vlera e tyre ndryshon 
function Computer(name,cpu,ram,gpu){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.gpu=gpu;

}
var c1=new Computer("mac","8-core","8GB","5600M");
var c2=new Computer("MAC2","8-core","16GB","5600M");
var c3=new Computer("mac 3", "8core","8gb","5600M")






