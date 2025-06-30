document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shopperForm");
  const output = document.getElementById("jsonOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const shopper = {
      id: document.getElementById("shopperId").value.trim() || null,
      name: `${document.getElementById("firstName").value.trim()} ${document.getElementById("lastName").value.trim()}`,
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim() || null,
      age: parseInt(document.getElementById("age").value),
      address: document.getElementById("address").value.trim(),
      membership: document.getElementById("membership").value,
      timestamp: new Date().toISOString()
    };

    output.textContent = JSON.stringify(shopper, null, 2);

    
    form.reset();
    form.classList.remove("was-validated");
  });
});
