// Create animated particles
const backgroundLayer = document.getElementById("background-layer");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random size
  const size = Math.random() * 20 + 10; // Size between 10px and 30px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random start position
  const startX = Math.random() * 100; // Between 0% and 100% viewport width
  const startY = Math.random() * 100; // Between 0% and 100% viewport height
  particle.style.top = `${startY}vh`;
  particle.style.left = `${startX}vw`;

  // Random end position
  const endX = startX + (Math.random() * 200 - 100); // Randomly moves -100vw to +100vw
  const endY = startY + (Math.random() * 200 - 100); // Randomly moves -100vh to +100vh
  const duration = Math.random() * 5 + 5; // Duration between 5s and 10s

  // Add animation using inline styles
  particle.style.animation = `moveParticle ${duration}s linear infinite`;
  particle.style.setProperty("--endX", `${endX}vw`);
  particle.style.setProperty("--endY", `${endY}vh`);

  // Append particle and remove it after the animation
  backgroundLayer.appendChild(particle);
  setTimeout(() => {
    backgroundLayer.removeChild(particle);
  }, duration * 1000); // Remove after animation duration
}

// Generate particles at intervals
setInterval(createParticle, 500);
