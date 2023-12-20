let btns = document.querySelectorAll("button");
let ops = document.querySelectorAll(".op");
let inp = document.querySelector(".input");
let str = "";

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")

    }, 1);
}

function btnpress() {
    let btn = this;
    btnflash(btn);
}
function press() {
    if (this.textContent == "=") {
        str = eval(str);
        inp.value = str;
    }
    else if(this.textContent == "AC"){
        str = "";
        inp.value = str;
    }
    else if(this.textContent == "DEL"){
        str = str.slice(0,(str.length)-1);
        inp.value = str;
    }
    else if(this.textContent == "%"){
        str /= 100;
        inp.value = str;
    }
    else {
        str += this.textContent;
        inp.value = str;
    }
}


for (let btn of btns) {
    btn.addEventListener("click", btnpress);
}
for (let btn of btns) {
    btn.addEventListener("click", press);
}
