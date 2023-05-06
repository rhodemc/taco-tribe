const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirmPassword = document
    .querySelector('#confirm-password-signup')
    .value.trim();

  if (name && email && password && confirmPassword === password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (password === confirmPassword && response.ok) {
      document.location.replace('dashboard');
    }
  } else {
    alert('Passwords do not match, please try again.');
  }
};



document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
