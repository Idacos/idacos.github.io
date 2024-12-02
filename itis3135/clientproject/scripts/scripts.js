document.addEventListener('DOMContentLoaded', () => {
    const images = [
        ['images/rednail1.jpg', 'images/rednail2.jpg'],
        ['images/lilynail.jpg', 'images/lilynail2.jpg'],
        ['images/blacknail1.jpg', 'images/blacknail2.jpg'],
        ['images/bunnynail.jpg', 'images/bunnynail2.jpg'],
        ['images/christnail1.jpg', 'images/christnail2.jpg'],
        ['images/bluenail.jpg', 'images/bluenail2.jpg']
    ];

    document.querySelectorAll('.gallery-item img').forEach((img, index) => {
        img.addEventListener('mouseenter', () => {
            img.src = images[index][1];
        });

        img.addEventListener('mouseleave', () => {
            img.src = images[index][0];
        });
    });
});

// Dynamic greeting based on time of day
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const greeting = document.createElement('div');
    greeting.textContent =
        new Date().getHours() < 12
            ? 'Good morning!'
            : new Date().getHours() < 18
            ? 'Good afternoon!'
            : 'Good evening!';
    greeting.style.position = 'absolute';
    greeting.style.top = '50%';
    greeting.style.right = '20px';
    greeting.style.transform = 'translateY(-50%)';
    greeting.style.color = '#ff5a8a';
    greeting.style.fontWeight = 'bold';
    greeting.style.fontSize = '18px';
    header.style.position = 'relative';
    header.appendChild(greeting);
});

// Button to scroll back to the top
const topButton = document.createElement('button');
topButton.textContent = '↑ Back to Top';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.padding = '10px 15px';
topButton.style.backgroundColor = '#a64ca6';
topButton.style.color = '#fff';
topButton.style.border = 'none';
topButton.style.borderRadius = '5px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
    topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
