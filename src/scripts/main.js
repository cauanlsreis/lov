document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', function() {
        window.location.href = 'love.html';
    });

    noButton.addEventListener('mouseover', function() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        noButton.style.position = 'absolute';
        noButton.style.left = x + 'px';
        noButton.style.top = y + 'px';
    });

    noButton.addEventListener('click', function() {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            alert('Opção Inválida');
        }
    });
});