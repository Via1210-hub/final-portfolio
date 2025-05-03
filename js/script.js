// Option 1: Toggle Dark Mode
const darkModeBtn = document.getElementById("toggle-dark");
if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Option 2: Form Validation (if a form exists)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // prevent form from submitting
      alert("Please fill in all the fields before submitting.");
    }
  });
}

// Option 3: Dynamic Greeting Based on Time
function setGreeting() {
  const greeting = document.getElementById("greeting");
  if (!greeting) return;

  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning, sunshine!";
  } else if (hour < 18) {
    message = "Hope you're having a lovely afternoon!";
  } else {
    message = "Good evening, lovely soul!";
  }

  greeting.textContent = message;
}

setGreeting();
 