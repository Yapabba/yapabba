/* ===============================
   MARCAR MENÚ ACTIVO
================================ */

const links = document.querySelectorAll(".menu a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ===============================
   FORMULARIO DE CONTACTO
================================ */

lucide.createIcons();

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

  let valid = true;

  // Validar campos
  const validName = validateField("name", "error-name");
  const validEmail = validateField("email", "error-email");
  const validMessage = validateField("message", "error-message");

  // ❌ Si hay errores, NO enviar
  if (!validName || !validEmail || !validMessage) {
    e.preventDefault();
    return;
  }

  // ✅ Todo correcto
  e.preventDefault(); // detenemos envío inmediato
  successMessage.classList.add("show");

  // ⏳ enviamos a FormSubmit después del feedback visual
  setTimeout(() => {
    form.submit();
  }, 800);

});

/* ===============================
   FUNCIÓN VALIDAR CAMPOS
================================ */

function validateField(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);

  if (!field.value.trim()) {
    field.classList.add("invalid");
    field.classList.remove("valid");
    error.style.display = "block";
    return false;
  } else {
    field.classList.add("valid");
    field.classList.remove("invalid");
    error.style.display = "none";
    return true;
  }
}
