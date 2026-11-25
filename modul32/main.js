var text="the best school in the world is digital school";
var results= text.search(/digital school/);
document.getElementById("results2").innerHTML=results;

var results3= text.replace(/digital school/,"176 shkurti);

document.getElementsById("result3").innerHTML=results3;

var text="abcdef"
var regex=new RegExp ('abc');
document.getElementById("results4").innerHTML=regex.test(text);

var text="hey hii hiiiii"
var regex=/hi?/g;
document.getElementById("results").innerHTML=text.match(regex);

var text="hey hii hiiiii"
var regex=/i{3}/g;
document.getElementById("results").innerHTML=text.match(regex);

var text="hey hii hiiiiiii"
var regex=/i{1,4}/g;
document.getElementById("results").innerHTML=text.match(regex);

var text="hello ello elloooooelo"
var regex=/ello$/g;
document.getElementById("results").innerHTML=text.match(regex);

var text="hello ello elloooooelo"
var regex=/^hi/g;
document.getElementById("results").innerHTML=text.match(regex);