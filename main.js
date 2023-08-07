document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const table = document.querySelector("table");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
  
      if (name === "" || phone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      const existingContact = Array.from(table.rows).find(row => row.cells[0].textContent === name);
  
      if (existingContact) {
        alert("Contato já existente.");
        return;
      }
  
      const newRow = table.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
  
      cell1.textContent = name;
      cell2.textContent = phone;
  
      nameInput.value = "";
      phoneInput.value = "";
    });
  });
  