import i18next from "../i18n";

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
      showNewsletterError(i18next.t("newsletter.validation.email"));
      return;
    }

    showNewsletterSuccess();

    alert(i18next.t("newsletter.validation.success"));

    newsletterForm.reset();

    newsletterEmail.classList.remove("is-valid");
  });
}
