let head=document.getElementById("heading");
let gtleft=document.getElementById("gate_left");
let gtrg=document.getElementById("gate_right");

let tl=document.getElementById("tree_left")
let tr=document.getElementById("tree_right")

window.addEventListener("scroll",()=>{
    let sc=window.scrollY;
    head.style.marginTop=sc*2.5+"px";

    gtleft.style.marginLeft=sc*0.47+"px";

    gtrg.style.marginLeft=sc*-0.47+"px"

    tl.style.marginLeft=sc*-2+"px";

    tr.style.marginLeft=sc*+2+"px";

})

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    document.getElementById('gate_left').style.top = -55 + scrollPosition + 'px';
    document.getElementById('gate_right').style.top = -55 + scrollPosition + 'px';
});
