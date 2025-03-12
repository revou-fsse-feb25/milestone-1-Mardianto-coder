document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    console.log('Form submitted:', { name, email, message });
  
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  