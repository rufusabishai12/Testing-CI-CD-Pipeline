// script.js

document.getElementById('loadContent').addEventListener('click', function() {
    const contentArea = document.getElementById('contentArea');
    contentArea.style.display = 'block';
    contentArea.innerHTML = `
        <h2>Dynamic Content Loaded!</h2>
        <p>This content was loaded dynamically using JavaScript. Your CI/CD pipeline page is working perfectly!</p>
    `;
});
