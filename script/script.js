window.addEventListener("load", () => {
  const language_selection = document.getElementById("languageSelector");
  const english_version = document.getElementById("english_test");
  const test_display = document.getElementById("testing_language");

  // Set default English content
  english_version.textContent = "Carry On inside this loop";
  english_version.style.display = "block";
  test_display.style.display = "none";

  language_selection.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;

    if (selectedLanguage === "ne") {
      test_display.style.display = "block";
      test_display.textContent = "Site Under Construction";
      english_version.style.display = "none";
      console.log("Nepali Language Selected");
    } else {
      test_display.style.display = "none";
      english_version.style.display = "block";
      english_version.textContent = "Carry On inside this loop";
      console.log("English or default selected");
    }
  });

});
