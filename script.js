const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
});

document.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
});
