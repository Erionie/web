var names =['elsa','era','eda']

var x;

for (x of names){
    //console.log(x)
    document.write(x + "<br>")
}

var text = "elsa"

var y ;

for (y of text){
    document.write(y + "<br>")
}

//

let n=0;

do {
    n+=1;
    console.log(n)
}while (n<5)

//

//loopa 2

let e=0
let r=0
while (e<3){
    e++;
    r+=e
}

console.log(e);
console.log(r);

//

var cars=['mercedes','audi','bmw']

for (var z=0;<cars.length;z++){
    console.log(cars[z])
}