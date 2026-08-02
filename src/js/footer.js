const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  const newsletterEmail = document.getElementById("newsletterEmail");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showNewsletterError(message) {
    newsletterEmail.classList.add("is-invalid");
    newsletterEmail.classList.remove("is-valid");

    newsletterEmail.nextElementSibling.textContent = message;
  }

  function showNewsletterSuccess() {
    newsletterEmail.classList.remove("is-invalid");
    newsletterEmail.classList.add("is-valid");
  }

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailPattern.test(newsletterEmail.value.trim())) {
      showNewsletterError("Please enter a valid email.");
      return;
    }

    showNewsletterSuccess();

    newsletterForm.reset();

    newsletterEmail.classList.remove("is-valid");
  });
}
