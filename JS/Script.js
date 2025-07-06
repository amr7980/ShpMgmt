// JSON & jQuery Logic Contributor: Wonyoung Park

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shopperForm");
  const output = document.getElementById("jsonOutput");

  const productList = [];

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

    productList.push(shopper);

    output.textContent = JSON.stringify(productList, null, 2);

    form.reset();
    form.classList.remove("was-validated");
  });

  $(document).ready(function () {
    $('#searchBtn').click(function () {
      const keyword = $('#searchInput').val().trim().toLowerCase();

      if (!keyword) {
        $('#searchResult').text('Please enter a search term.');
        return;
      }

      if (productList.length === 0) {
        $('#searchResult').text('No shopper data available.');
        return;
      }

      const result = productList.filter(shopper => {
        return (
          (shopper.id && shopper.id.toLowerCase().includes(keyword)) ||
          (shopper.name && shopper.name.toLowerCase().includes(keyword))
        );
      });

      if (result.length > 0) {
        $('#searchResult').text(JSON.stringify(result, null, 2));
      } else {
        $('#searchResult').text('No matching result found.');
      }
    });
  });
});
