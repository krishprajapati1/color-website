const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const presetSelect = document.getElementById("presetSelect");

function getRandomColor() {
  const chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createColorBox(color) {
  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;

  const code = document.createElement("div");
  code.className = "color-code";
  code.textContent = color;

  box.appendChild(code);
  box.onclick = () => {
    navigator.clipboard.writeText(color);
    code.textContent = `Copied ${color}`;
    setTimeout(() => (code.textContent = color), 1000);
  };

  return box;
}

function generatePalette(colors = []) {
  palette.innerHTML = "";
  const paletteColors = colors.length ? colors : Array.from({ length: 5 }, getRandomColor);
  paletteColors.forEach(color => palette.appendChild(createColorBox(color)));
}

generateBtn.addEventListener("click", () => generatePalette());

presetSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  if (value) {
    const colors = value.split(",");
    generatePalette(colors);
  }
});

// Load default palette
generatePalette();



// Add this at the end of your existing script.js
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const whatsappNumber = "919909290110"; // ← Replace with your number (with country code)
    const text = `New Comment from ${name}: %0A${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
    this.reset();
  } else {
    alert("Please fill in both name and comment.");
  }
});
