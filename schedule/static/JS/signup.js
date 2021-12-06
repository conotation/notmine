var regb;

function init(){
    regb = document.getElementById("regb");
    regb.onmouseover = over;
    regb.onmouseout = out;
}

function over(){
    regb.style.backgroundColor="#9772fd";
}

function out(){
    regb.style.backgroundColor="#5F26FF";
}
