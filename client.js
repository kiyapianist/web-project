document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const responseEl = document.getElementById('formResponse');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      responseEl.textContent = result.message;
      responseEl.style.color = res.ok ? "green" : "red";
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      responseEl.textContent = "Something went wrong. Try again.";
      responseEl.style.color = "red";
    }
  });
});
