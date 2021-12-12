let sm;
let unamewrap, lb, uname;
let warnon;

function init() {
    warnon=false;
    
    sm = document.getElementById("sm");
    unamewrap = document.getElementById("unamewrap");
    uname = document.getElementById("uname");
    lb=document.getElementById("lb");

    lb.style.visibility="hidden";

    sm.addEventListener('mouseover',()=>{
        over();
    })
    sm.addEventListener('mouseout',()=>{
        out();
    })

    uname.addEventListener('focusin',()=>{
        userNameDivStyleChange();
        userNameStyleChange();
    })
    uname.addEventListener('focusout',()=>{
        userNameDivBack();
        userNameStyleBack();
    })
}

function over() {
    sm.style.backgroundColor = "#9772fd";
}

function out() {
    sm.style.backgroundColor = "#5F26FF";
}

function userNameDivStyleChange(){
    if(!warnon){
        unamewrap.style.backgroundColor="#e7dfff";
        unamewrap.style.boxShadow="0px 2px 0px #5f26ff";
    }
}

function userNameStyleChange(){
    if(!warnon){
        uname.style.width="90%";
        uname.style.outline="none";
        uname.style.backgroundColor="#e7dfff";
        uname.style.color="#5f26ff";
        uname.style.paddingLeft="12px";
    }
}

function userNameDivBack(){
    if(!warnon){
    unamewrap.style.backgroundColor="#FFFFFF";
    unamewrap.style.boxShadow="0px 2px 0px #ADADAD";
    }
}

function userNameStyleBack(){
    if(!warnon){
    uname.style.width="100%";
    uname.style.backgroundColor="#FFFFFF";
    uname.style.color="black";
    uname.style.paddingLeft="20px";
    }
}