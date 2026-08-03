import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },

  fallbackLng: "en",

  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
    lookupLocalStorage: "userLang",
  },

  interpolation: {
    escapeValue: false,
  },
});

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = i18next.t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = i18next.t(key);
  });

  const lang = i18next.language;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

window.addEventListener("DOMContentLoaded", () => {
  updateContent();

  const btn = document.getElementById("language-toggle");

  if (btn) {
    btn.addEventListener("click", () => {
      const newLang = i18next.language === "en" ? "ar" : "en";

      i18next.changeLanguage(newLang).then(() => {
        localStorage.setItem("userLang", newLang);
        updateContent();
      });
    });
  }
});

export default i18next;
