function dates() {
    var x = new Date("Sep 5 2023 03:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}

function explodeCake() {
    const cake = document.getElementById('poop-cake');
    const container = document.querySelector('.cake-container');
    
    // Hide the cake image
    cake.style.display = 'none';

    // Create the explosion effect
    createExplosion(container, cake.src);

    // Optionally, you can play a sound effect here
    // let sound = new Audio('explosion_sound.mp3');
    // sound.play();
}

function createExplosion(container, src) {
    const pieces = 80; // Number of pieces
    const pieceSize = 30; // Size of each piece (in pixels)

    for (let i = 0; i < pieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'cake-piece';
        piece.style.backgroundImage = `url(${src})`;
        piece.style.backgroundPosition = `${-(i % 5) * pieceSize}px ${-Math.floor(i / 5) * pieceSize}px`;
        piece.style.width = `${pieceSize}px`;
        piece.style.height = `${pieceSize}px`;

        // Set random animation properties
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${Math.random() * 100}%`;
        piece.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`;
        piece.style.opacity = '0';

        container.appendChild(piece);
    }

    // Remove the pieces after the animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 4000); // Adjust the timing to match the animation duration
}

function showText() {
    document.getElementById('hiddenText').style.display = 'block';
}

