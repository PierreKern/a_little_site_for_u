const bouton = document.getElementById('monBouton');

// Fonction pour déplacer le bouton aléatoirement
function deplacerAleatoirement() {
  const largeurEcran = window.innerWidth;
  const hauteurEcran = window.innerHeight;

  const nouvellePositionX = Math.random() * (largeurEcran - bouton.offsetWidth);
  const nouvellePositionY = Math.random() * (hauteurEcran - bouton.offsetHeight);

  bouton.style.position = 'absolute';
  bouton.style.left = nouvellePositionX + 'px';
  bouton.style.top = nouvellePositionY + 'px';
}

// Événement lorsque la souris survole le bouton
bouton.addEventListener('mouseover', deplacerAleatoirement)