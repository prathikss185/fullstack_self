document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send login request to backend
  fetch('http://54.243.7.73:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Login successful!') {
      alert(`Welcome ${data.user.username}, Role: ${data.user.role}`);
      
      // Check user role and redirect to appropriate dashboard
      if (data.user.role === 'admin') {
        // Redirect to admin dashboard
      //  window.location.href = '/var/www/html/login_page/admin-dashboard.html';
      window.location.href = 'http://54.243.7.73:3001/admin-dashboard.html';
      } else {
        // Redirect to user dashboard
      //  window.location.href = '/var/www/html/login_page/user-dashboard.html';
      window.location.href = 'http://54.243.7.73:3001/user-dashboard.html';
      }
    } else {
      alert(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Something went wrong! Please try again.');
  });
});
// Card flip interaction logic
const card = document.querySelector('.card');
card.addEventListener('click', () => {
  card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});
