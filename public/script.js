(() => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita recargar la página

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Convertir valores vacíos a null
    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        data[key] = null;
      }
    });
    // convertir fechas y números
    // Conversiones de tipos
    if (data.birth) data.birth = new Date(data.birth).toISOString();

    if (data.income !== null) data.income = parseInt(data.income, 10);
    if (data.networth !== null) data.networth = parseInt(data.networth, 10);
    if (data.openingAccount !== null)
      data.openingAccount = parseInt(data.openingAccount, 10);
    if (data.risk !== null) data.risk = parseInt(data.risk, 10);

    if (data.sigdate) data.sigdate = new Date(data.sigdate).toISOString();

    // eliminar campos que no existen en DB
    delete data.robot;

    try {
      const res = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Customer saved successfully!");
        form.reset();
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  });
})();

// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const formData = {
//       fname: document.getElementById("fname").value,
//       lname: document.getElementById("lname").value,
//       phone: document.getElementById("phone").value,
//       email: document.getElementById("email").value,
//       address: document.getElementById("address").value,
//       birth: document.getElementById("birth").value,
//     };

//     try {
//       const response = await fetch("/api/costumers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Formulario enviado con éxito ✅");
//         document.getElementById("registrationForm").reset();
//       } else {
//         alert("Error al enviar el formulario ❌");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Hubo un problema con la conexión al servidor");
//     }
//   });
