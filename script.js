let isAltImage = false;
let globalVolume = 1;

// Load saved theme and volume
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.style.backgroundColor = savedTheme;
    document.getElementById('themeSelect').value = savedTheme;
  }

  const savedVolume = localStorage.getItem('volume');
  if (savedVolume !== null) {
    globalVolume = parseFloat(savedVolume);
    document.getElementById('volumeControl').value = globalVolume;
  }
};

function setTheme(color) {
  document.body.style.backgroundColor = color;
  localStorage.setItem('theme', color);
}

function setVolume(val) {
  globalVolume = parseFloat(val);
  localStorage.setItem('volume', globalVolume);
}

function handleClick() {
  const button = document.querySelector('.animated-btn');
  button.classList.add('flip');
  setTimeout(() => button.classList.remove('flip'), 600);
  playClickSound();
}

function playClickSound() {
  const audio = new Audio('click-sound.mp3');
  audio.volume = globalVolume;
  audio.play();
}

function triggerImageAnimation(image) {
  image.classList.add('flip');
  setTimeout(() => {
    image.classList.remove('flip');
    image.src = isAltImage ? 'image1.jpg' : 'alt-image.jpg';
    isAltImage = !isAltImage;
  }, 300);
}
