const form = document.getElementById("regForm");
const successMsg = document.getElementById("successMsg");


const firstname = document.getElementById("firstname");
const middlename = document.getElementById("middlename");
const lastname = document.getElementById("lastname");
const batch = document.getElementById("batch");
const technology = document.getElementById("technology");
const idnumber = document.getElementById("idnumber");
const contact = document.getElementById("contact");

// Error spans
const fnameError = document.getElementById("fnameError");
const mnameError = document.getElementById("mnameError");
const lnameError = document.getElementById("lnameError");
const batchError = document.getElementById("batchError");
const techError = document.getElementById("techError");
const idError = document.getElementById("idError");
const contactError = document.getElementById("contactError");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Reset
  fnameError.textContent = "";
  mnameError.textContent = "";
  lnameError.textContent = "";
  batchError.textContent = "";
  techError.textContent = "";
  idError.textContent = "";
  contactError.textContent = "";
  successMsg.style.display = "none";

  if (!/^[A-Za-z]+$/.test(firstname.value.trim())) {
    fnameError.textContent = "Enter a valid first name (letters only)";
    valid = false;
  }


  if (!/^[A-Za-z]+$/.test(middlename.value.trim())) {
    mnameError.textContent = "Enter a valid middle name (letters only)";
    valid = false;
  }

  if (!/^[A-Za-z]+$/.test(lastname.value.trim())) {
    lnameError.textContent = "Enter a valid last name (letters only)";
    valid = false;
  }

  if (!/^(20[0-9]{2})$/.test(batch.value)) {
    batchError.textContent = "Enter valid batch year (2000–2099)";
    valid = false;
  }

  
  if (technology.value.trim() === "") {
    techError.textContent = "Technology is required";
    valid = false;
  }


  if (!/^[0-9]{5,10}$/.test(idnumber.value)) {
    idError.textContent = "ID must be 5–10 digits";
    valid = false;
  }

  if (!/^[0-9]{10,11}$/.test(contact.value)) {
    contactError.textContent = "Enter valid contact number (10–11 digits)";
    valid = false;
  }

  if (valid) {
    successMsg.style.display = "block";
    form.reset();
  }
});
