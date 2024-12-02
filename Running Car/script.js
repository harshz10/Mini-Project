// Create two audio elements
var audio1 = document.createElement('audio');
var audio2 = document.createElement('audio');

// Set the sources for each audio element
audio1.setAttribute('src', 'tokyo_drift.mp3');
audio2.setAttribute('src', 'sound.mp3');

// Set loop for both audio elements
audio1.loop = true;
audio2.loop = true;

// Set volume for each audio element
audio1.volume = 1; // Full volume for tokyo_drift.mp3
audio2.volume = 0.5; // Half volume for sound.mp3

// Play both audio elements
audio1.play();
audio2.play();
