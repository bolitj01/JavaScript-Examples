let nav = document.querySelector('nav');
let newLink = document.createElement('a');
newLink.href = 'https://www.google.com';
let newLinkText = document.createTextNode('New link to Google');
newLink.appendChild(newLinkText);
nav.appendChild(newLink);
