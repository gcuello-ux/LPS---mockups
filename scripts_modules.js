// scripts_modules.js
document.addEventListener('DOMContentLoaded', () => {
    // Tabs toggle
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            const content = document.getElementById(`tab-${tab}`);
            const isActive = btn.classList.contains('active');

            // Hide all
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            tabBtns.forEach(b => b.classList.remove('active'));

            if (!isActive) {
                btn.classList.add('active');
                content.classList.remove('hidden');
            }
        });
    });

    // Accordion
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isOpen = !content.classList.contains('hidden');

            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));

            if (!isOpen) {
                content.classList.remove('hidden');
            }
        });
    });

    // QR Popup
    const qrBtn = document.querySelector('.qr-btn');
    const qrPopup = document.querySelector('.qr-popup');
    qrBtn.addEventListener('click', () => {
        qrPopup.classList.toggle('hidden');
    });
});