function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const scriptUrl = 'q1.js'; // Replace with the actual path to your JavaScript file

loadScript(scriptUrl)
    .then(() => {
        alert('Script loaded successfully!');
    })
    .catch(() => {
        alert('Error loading the script.');
    });