// <--! document. is used to access various properties and methods of the document object -->
// <--! getElementById() is a method in JavaScript that belongs to the document object and is used to access an HTML element by its unique id attribute -->
// <--! addEventListener() is a method in JavaScript that allows you to attach an event handler to a specified element -->
// <--! let is a keyword in JavaScript used to declare variables -->
// <--! audio element is used to embed sound content (such as music, audio files, or other sounds) in a web page -->
document.getElementById('boomButton').addEventListener('click', () => {
    let audio = document.getElementById('boomSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('boomSound');
    if (event.code === 'KeyQ') {
        audio.play();
    }
});

document.getElementById('clapButton').addEventListener('click', () => {
    let audio = document.getElementById('clapSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('clapSound');
    if (event.code === 'KeyW') {
        audio.play();
    }
});

document.getElementById('hihatButton').addEventListener('click', () => {
    let audio = document.getElementById('hihatSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('hihatSound');
    if (event.code === 'KeyE') {
        audio.play();
    }
});

document.getElementById('kickButton').addEventListener('click', () => {
    let audio = document.getElementById('kickSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('kickSound');
    if (event.code === 'KeyR') {
        audio.play();
    }
});

document.getElementById('openhatButton').addEventListener('click', () => {
    let audio = document.getElementById('openhatSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('openhatSound');
    if (event.code === 'KeyT') {
        audio.play();
    }
});

document.getElementById('rideButton').addEventListener('click', () => {
    let audio = document.getElementById('rideSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('rideSound');
    if (event.code === 'KeyY') {
        audio.play();
    }
});

document.getElementById('snareButton').addEventListener('click', () => {
    let audio = document.getElementById('snareSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('snareSound');
    if (event.code === 'KeyU') {
        audio.play();
    }
});

document.getElementById('tinkButton').addEventListener('click', () => {
    let audio = document.getElementById('tinkSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('tinkSound');
    if (event.code === 'KeyI') {
        audio.play();
    }
});

document.getElementById('tomButton').addEventListener('click', () => {
    let audio = document.getElementById('tomSound');
    audio.play();
});
 
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('tomSound');
    if (event.code === 'KeyO') {
        audio.play();
    }
});