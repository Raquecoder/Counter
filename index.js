let count= 0;
let countEl = document.getElementById("count-el");
console.log(countEl);


//Decrease
function decrease(){
    count= count-1;
    countEl.innerText=count;
    console.log(count);
}
decrease();
    

//Reset
function reset(){
    count= 0;
    countEl.innerText=count;
    console.log(count);
}
reset();

//Increase
function increase(){
    count= count+1;
    countEl.innerText=count;
    console.log(count);
}
increase();



