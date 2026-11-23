var text="the best school in the world is digital school";
var results= text.search(/digital school/);
document.getElementById("results2").innerHTML=results;

var results3= text.replace(/digital school/,"176 shkurti);

document.getElementsById("result3").innerHTML=results3;

var text="abcdef"
var regex=new RegExp ('abc');
document.getElementById("results4").innerHTML=regex.test(text);