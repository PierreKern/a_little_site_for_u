const boutonNon = document.getElementById('monBouton');

function deplacerAleatoirement() {
    const largeurEcran = window.innerWidth;
    const hauteurEcran = window.innerHeight;

    const nouvellePositionX = Math.random() * (largeurEcran - boutonNon.offsetWidth);
    const nouvellePositionY = Math.random() * (hauteurEcran - boutonNon.offsetHeight);

    boutonNon.style.position = 'absolute';
    boutonNon.style.left = nouvellePositionX + 'px';
    boutonNon.style.top = nouvellePositionY + 'px';
}

boutonNon.addEventListener('mouseover', deplacerAleatoirement);
