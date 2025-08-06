function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function encrypt() {
  const message = document.getElementById('message').value;
  const password = document.getElementById('password').value;

  let result = '';
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i) + password.length;
    result +=
