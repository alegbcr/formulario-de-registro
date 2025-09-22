// function to validate email using regex
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// function to validate name
function isValidName(name) {
  return typeof name === "string" && name.length >= 3;
}

// function to validate form
function validateForm(user, users) {
  const { name, email, id } = user;
  if (!isValidName(name)) {
    return {
      isValid: false,
      error: "El nombre debe tener al menos 3 caracteres.",
    };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, error: "El correo electrÃ³nico no es vÃ¡lido." };
  }
  return { isValid: true };
}

module.exports = {
  isValidEmail,
  isValidName,
  validateForm,
};
