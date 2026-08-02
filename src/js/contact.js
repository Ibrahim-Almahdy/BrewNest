const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(input, message) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");

    input.nextElementSibling.textContent = message;
  }

  function showSuccess(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (fullName.value.trim().length < 3) {
      showError(fullName, "Full name must be at least 3 characters.");
      isValid = false;
    } else {
      showSuccess(fullName);
    }

    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email.");
      isValid = false;
    } else {
      showSuccess(email);
    }

    if (subject.value.trim().length < 3) {
      showError(subject, "Subject must be at least 3 characters.");
      isValid = false;
    } else {
      showSuccess(subject);
    }

    if (message.value.trim().length < 20) {
      showError(message, "Message must be at least 20 characters.");
      isValid = false;
    } else {
      showSuccess(message);
    }

    if (isValid) {
      contactForm.reset();

      [fullName, email, subject, message].forEach((input) => {
        input.classList.remove("is-valid");
      });

      alert("Message sent successfully!");
    }
  });
}
