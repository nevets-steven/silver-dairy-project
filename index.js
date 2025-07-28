function popup(){
    document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a'); // capture anchor clicks
    if (!target) return;

    // Handle Menu popup
    if (target.id === 'menu-link') {
        e.preventDefault();
        document.getElementById('menu-popup').classList.add('active');
        document.body.classList.add('popup-open');
    } 
    
    // Handle Events popup
    else if (target.id === 'events-link') {
        e.preventDefault();
        document.getElementById('events-popup').classList.add('active');
        document.body.classList.add('popup-open');
    }
    });

    // Close logic for both popups
    document.querySelectorAll('.popup-overlay').forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-close') || e.target === popup) {
        popup.classList.remove('active');
        document.body.classList.remove('popup-open');
        }
    });
    });
}

popup();