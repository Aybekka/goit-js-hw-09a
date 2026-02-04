
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

populateForm();

form.addEventListener("input", (event) => {
  const formData = new FormData(form);
  const data = {};
  
  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

form.addEventListener("submit", (event) => {

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData);
      
      
      if (email) form.elements.email.value = email;
      if (message) form.elements.message.value = message;
    } catch (error) {
      console.error("Depodan veri okunurken hata oluştu:", error);
    }
  }
}