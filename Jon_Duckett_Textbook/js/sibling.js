// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextElementSibling;

// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';