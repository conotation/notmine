var sm, unamewrap, uname;

function init(){
    sm = document.getElementById("sm");
    sm.onmouseover = over;
    sm.onmouseout = out;
}

function over(){
    sm.style.backgroundColor="#9772fd";
}

function out(){
    sm.style.backgroundColor="#5F26FF";
}

function focuson(){
    unamewrap.style.backgroundColor="#E7DFFF";
}

