var regb;
let l_email, l_pw, l_pw2;
let d_email, d_pw, d_pw2;
let mid, pw, rpw;

function init(){
    l_email=document.getElementById("l_email");
    l_pw=document.getElementById("l_pw");
    l_pw2=document.getElementById("l_pw2");

    d_email=document.getElementById("d_email");
    d_pw=document.getElementById("d_pw");
    d_pw2=document.getElementById("d_pw2");

    mid=document.getElementById("mid");
    pw=document.getElementById("pw");
    pw2=document.getElementById("pw2");

    regb = document.getElementById("regb");

    l_email.style.visibility="hidden";
    l_pw.style.visibility="hidden";
    l_pw2.style.visibility="hidden";

    regb.onmouseover = over;
    regb.onmouseout = out;

    mid.addEventListener('focus', ()=>{
        userNameDivStyleChange();
        userNameStyleChange();
    })
    mid.addEventListener('blur',()=>{
        userNameDivBack();
        userNameStyleBack();
    })
}

function over(){
    regb.style.backgroundColor="#9772fd";
}

function out(){
    regb.style.backgroundColor="#5F26FF";
}

function userNameDivStyleChange(){
    d_email.style.backgroundColor="#e7dfff";
    d_email.style.boxShadow="0px 2px 0px #5f26ff";
}

function userNameStyleChange(){
    mid.style.width="90%";
    mid.style.outline="none";
    mid.style.backgroundColor="#e7dfff";
    mid.style.color="#5f26ff";
    mid.style.paddingLeft="12px";
}

function userNameDivBack(){
    d_email.style.backgroundColor="#FFFFFF";
    d_email.style.boxShadow="0px 2px 0px #ADADAD";
}

function userNameStyleBack(){
    mid.style.width="100%";
    mid.style.backgroundColor="#FFFFFF";
    mid.style.color="black";
    mid.style.paddingLeft="20px";
}