window.onload = window.onresize = function(){
    astrocalc = document.getElementsByClassName("astrocalc");
    
    for(i=0; i<astrocalc.length; i++){
        astrocalc[i].style.height = window.innerHeight + "px";
        console.log(window.innerHeight);
    }
}