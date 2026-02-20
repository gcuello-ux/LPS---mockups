document.addEventListener('DOMContentLoaded', () => {
    // Role toggle
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Sticky footer reveal after scroll
    const footer = document.querySelector('.sticky-footer');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });
});