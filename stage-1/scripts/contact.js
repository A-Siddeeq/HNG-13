const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    document.getElementById("test-contact-error-name").textContent =
      "Full name is required.";
    valid = false;
  }
  if (!email || !emailPattern.test(email)) {
    document.getElementById("test-contact-error-email").textContent =
      "Enter a valid email address.";
    valid = false;
  }
  if (!subject) {
    document.getElementById("test-contact-error-subject").textContent =
      "Subject is required.";
    valid = false;
  }
  if (!message || message.length < 10) {
    document.getElementById("test-contact-error-message").textContent =
      "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.hidden = false;
    form.reset();
  } else {
    successMsg.hidden = true;
  }
});
