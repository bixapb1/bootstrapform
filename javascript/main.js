(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const input = document.querySelector("#phone");

fetch("https://ipinfo.io/json?token=111a681ed4b0c9")
  .then((response) => response.json())
  .then((jsonResponse) => {
    window.intlTelInput(input, {
      initialCountry: jsonResponse.country,
      preferredCountries: ["us", "gb", "ua"],
      separateDialCode: false,
      utilsScript: "javascript/utils.js",
    });
    const container = document.querySelector(".iti");
    const div = document.createElement("div");
    div.classList.add("invalid-feedback");
    div.style.position = `absolute`;
    div.innerText = "Введіть дійсний телефон.";
    container.append(div);
  });
