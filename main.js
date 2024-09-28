// Selected class variable
let selectedClass = null;

// Background music
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Add event listeners to the class boxes
document.querySelectorAll('.class-box').forEach(box => {
  box.addEventListener('click', function () {
    document.querySelectorAll('.class-box').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
    selectedClass = this.id; // Store selected class
  });
});

// Event listener for form submission
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.getElementById("username").value;

  if (!selectedClass) {
    alert('Please select a class.');
    return;
  }

  // Save username and class in cookies for result page
  document.cookie = `username=${userName}; path=/; max-age=86400`; // 1 day expiration
  document.cookie = `class=${selectedClass}; path=/; max-age=86400`; // 1 day expiration

  // Add fade-out animation before redirect
  document.querySelector('.container').classList.add('animate__fadeOut');
  setTimeout(() => {
    window.location.href = 'result.html';
  }, 1000); // Wait for the animation to finish before redirecting
});

// Background music toggle
let isPlaying = false;
musicToggle.addEventListener('click', function () {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.innerText = 'Play Background Music';
  } else {
    bgMusic.play();
    musicToggle.innerText = 'Pause Background Music';
  }
  isPlaying = !isPlaying;
});
