const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('contact-modal');

openModal.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});