// script.js
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.sticky-footer');
    
    // Adjust this value: how many pixels to scroll before showing
    const scrollThreshold = 300;  

    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }

    // Run once on load
    checkScroll();
    
    // Listen to scroll
    window.addEventListener('scroll', checkScroll);
    
    // Optional: throttle for better performance on mobile
    // window.addEventListener('scroll', throttle(checkScroll, 100));
});

// Optional throttle helper (uncomment if you want smoother mobile scroll)
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}