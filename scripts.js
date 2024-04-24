// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animar elementos ao rolar
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // O produto é considerado visível quando pelo menos 50% está na viewport
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate'); // Remover a classe de animação se a área não estiver visível
        }
    });
}, options);

document.querySelectorAll('.product').forEach(product => {
    observer.observe(product);
});
