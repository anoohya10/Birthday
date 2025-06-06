window.addEventListener("DOMContentLoaded", () => {
  const avengersTheme = document.getElementById("avengerstheme");
  const happyBirthday = document.getElementById("happyBirthday");
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", () => {
    // Hide start screen
    document.getElementById("startScreen").style.display = "none";

    // Show birthday section
    const birthdaySection = document.getElementById("birthdaySection");
    birthdaySection.classList.remove("hidden");

    // Start Avengers music
    avengersTheme.play().catch(() =>
      console.log("Autoplay might be blocked until user interacts.")
    );

    // Show blow popup after 8 seconds (cake entrance)
    setTimeout(() => {
      document.getElementById("popup").classList.remove("hidden");
    }, 8000);
  });
});

// Blow candle
function blowCandle() {
  const candle = document.getElementById("candle");
  candle.classList.add("blown-out");

  // Hide popup
  document.getElementById("popup").classList.add("hidden");

  // Play birthday song
  document.getElementById("happyBirthday").play();

  // Show name input
  setTimeout(() => {
    document.getElementById("nameInput").classList.remove("hidden");
  }, 1000);
}

// Show birthday message
function showMessage() {
  const name = document.getElementById("username").value || "Friend";
  message.innerHTML = `
    🎉 HAPPY BIRTHDAY🎂, ${name}! 🎉<br>Hope you have a wonderful birthday!<br>
    <br><br>
    <button onclick="downloadLetter()" id="downloadBtn">📜 Get Your Secret Letter</button>
  `;
  nameInput.classList.add("hidden");
  message.classList.remove("hidden");
}

// removing part
function downloadLetter() {
  const link = document.createElement("a");
  link.href = "birthday_letter_for_aditya.pdf";  
  link.download = "Secret_Letter_for_Aditya.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
