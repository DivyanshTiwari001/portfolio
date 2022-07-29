let a = document.getElementById("intro").innerHTML;
setInterval(() => {
    document.getElementById("intro").innerHTML=a;
}, 1000);
setInterval(() => {
    document.getElementById("intro").innerHTML="BTECH 1<sup>st</sup> YEAR , CSE"
}, 2000);