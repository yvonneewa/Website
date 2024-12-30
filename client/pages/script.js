// This file can contain any shared JavaScript functionality for all pages, like event listeners or helper functions.
console.log("Shared functionality loaded");
// A simple function to load the content dynamically
function showPage(pageName) {
    const content = document.getElementById('content');
    
    // Clear current content
    content.innerHTML = '';

    // Load the appropriate content
    switch (pageName) {
        case 'home':
            content.innerHTML = '<h1>Home Page</h1><p>Welcome to our website!</p>';
            break;
        case 'about':
            content.innerHTML = '<h1>About Us</h1><p>Learn more about us here.</p>';
            break;
        case 'clothing':
            content.innerHTML = '<h1>Clothing</h1><p>Check out our clothing collection.</p>';
            break;
        case 'trinkets':
            content.innerHTML = '<h1>Trinkets</h1><p>Discover our unique trinkets collection!</p>';
            break;
        case 'contact':
            content.innerHTML = '<h1>Contact Us</h1><p>Get in touch with us here.</p>';
            break;
        default:
            content.innerHTML = '<h1>404 - Page not found</h1>';
    }
}

// Load the home page initially
showPage('home');
