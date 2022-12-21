(function() {
  document.getElementById("submitBtn").addEventListener("click", (event) => {
    document.querySelectorAll(".message").forEach((message) => {
      message.remove();
    })
    const validationRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.form.email.value.match(validationRegExp)) {
      event.preventDefault();
      document.form.email.value = "";
      return document.getElementById("form").insertAdjacentHTML("afterend", `<div class="message valid"><i class="fa fa-check-circle"></i>Thank you!</div>`);
    }
    else {
      event.preventDefault();
      document.form.email.value = "";
      return document.getElementById("form").insertAdjacentHTML("afterend", `<div class="message invalid"><i class="fa fa-exclamation-circle"></i>Please provide a valid email.</div>`);
    }
  })
})();
