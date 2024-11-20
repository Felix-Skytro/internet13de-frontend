
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('auswahl').style.display = 'none';
    document.getElementById('h3').style.display = 'none';
}

function zeigeInhalt() {
    const auswahl = document.getElementById('auswahl').value; // Den Wert des select-Elements abrufen
    const divs = document.querySelectorAll('#foto > div'); // Alle divs im Foto-Bereich abrufen

    divs.forEach(div => {
        if (div.id === auswahl) {
            div.style.display = 'flex'; // Das passende Div anzeigen
        } else {
            div.style.display = 'none'; // Alle anderen Divs ausblenden
        }
    });
}

function sendEmail() {

    var emailAddress = 'support@litael2.ch';
    var subject = '';
    var body = "";

    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + body;

    window.location.href = mailtoLink;
    }