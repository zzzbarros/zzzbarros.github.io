function verif() {
    var nome = document.getElementById('usr').value
    console.log(nome)
    
    var nav = document.getElementById('navbar')
    var idloggin = document.getElementById('log')
    var home = document.getElementById('homePage')
    nav.classList.remove('dpsoff')
    idloggin.classList.add('dpsoff')
    home.classList.remove('dpsoff')
    var rdp = document.getElementById('rdp')
    rdp.classList.remove('sizeDefined')

    document.getElementById("span-nome").innerHTML = nome + "."
}

function moreInfo() {

    var mInfo = document.getElementById('moreInf')
    if ($("#moreInf").hasClass("dpsoff")) {
        mInfo.classList.remove('dpsoff')
    }
    else {
        mInfo.classList.add('dpsoff')
    }
    
}















// Filter letters input
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[A-Za-z ]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }