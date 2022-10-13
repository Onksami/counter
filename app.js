const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

number.innerHTML =0;
decrease.innerHTML ="-";
reset.innerHTML ="Reset";
increase.innerHTML ="+";


let count = 0;

decrease.onclick = function () {
    count --;
    number.innerHTML = count;
    
};

reset.onclick =function() {
    count = 0;
    number.innerHTML =count;

};

increase.onclick = function () {
    count ++;
    number.innerHTML = count;
}

