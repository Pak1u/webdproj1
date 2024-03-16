function toggleForm(form) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const message = document.querySelector('.message');
  
    message.textContent = ''; // Clear any previous messages
  
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
  
    document.querySelectorAll('.toggle-container button').forEach(button => {
      button.classList.remove('active');
    });
  
    document.querySelector(`button[onclick="toggleForm('${form}')"]`).classList.add('active');
  }
  
  // Handle form submissions (assuming you have server-side validation)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      const formData = new FormData(form);
      const formType = form.id; // 'login-form' or 'signup-form'
  
      // Simulate sending data to a server (replace with your actual logic)
      console.log(`Submitted ${formType} form with data:`, formData);
      message.textContent = `Submitted ${formType} form successfully!`; // Simulate a success message
    });
  });
  
  // Show login form by default
  toggleForm('login');
  