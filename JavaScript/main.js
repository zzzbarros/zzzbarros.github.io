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
    document.getElementById("span-nome-2").innerHTML = nome 
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

function validmail() {

    var nameDisplay = document.getElementById('name-display')
    var emailDisplay = document.getElementById('email-display')
    var subjectDisplay = document.getElementById('subject-display')
    var msgDisplay = document.getElementById('msg-display')
    var alertsucess = document.getElementById('alert-sucess-email')

    if (document.getElementById('form_name').value == '') {
        nameDisplay.classList.remove('dpsoff')
    }
    else if (document.getElementById('form_email').value == '') {
        emailDisplay.classList.remove('dpsoff')
        nameDisplay.classList.add('dpsoff')
    } 
    else if (document.getElementById('form_subject').value == '') {
        subjectDisplay.classList.remove('dpsoff')
        emailDisplay.classList.add('dpsoff')
    } 
    else if (document.getElementById('form_message').value == '') {
        msgDisplay.classList.remove('dpsoff')
        subjectDisplay.classList.add('dpsoff')
    }
    else if ($("#alert-sucess-email").hasClass("fadeIn_alert")){
        alertsucess.classList.remove('fadeIn_alert')
    }
    else {
        msgDisplay.classList.add('dpsoff')
        alertsucess.classList.add('fadeIn_alert')
    }
}

// Filter letters input
function onlyletter(evt) {
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