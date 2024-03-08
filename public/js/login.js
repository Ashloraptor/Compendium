const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

//   document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);
// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.querySelector('.login-form');

//   loginForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }

//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' }
//       });

//       if (response.ok) {
//         // Redirect to profile page or any other page after successful login
//         window.location.replace('/profile');
//       } else {
//         // Handle error response
//         const errorData = await response.json();
//         alert(errorData.message); // Display error message
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please try again.');
//     }
//   });
// });

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup');
  const email = document.querySelector('#email-signup');
  const password = document.querySelector('#password-signup');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      // email: email.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
;
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
