var stad = 1;
function f(){
    /*
    document.getElementById('preload').innerHTML = `<img src="images/pl${stad}.png">`;
    stad++;
    if(stad === 4){
        stad = 1;
    }*/
}

var id = setInterval(f, 500);

window.onload = function(){
    clearInterval(id);
    document.getElementById('preload').innerHTML = '';
    document.getElementById('not_preload').style.opacity = 1;
}