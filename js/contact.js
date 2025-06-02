// ----------------- EMAIL JS
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_qxt6p23",
      "template_zie71gm",
      "#contact-form",
      "LhLMNadN7ztkPx1qP"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message sent successfully ✅";
        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        //   clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
