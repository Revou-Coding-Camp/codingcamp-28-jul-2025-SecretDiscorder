
document.addEventListener("DOMContentLoaded", () => {
  // Prompt welcome message
  const name = prompt("Masukkan nama Anda:");
  if (name) {
    document.getElementById("welcome-message1").textContent = `Hi ${name}, Welcome to Website`;
  }

  const form = document.getElementById('messageForm');
  const output = document.getElementById('infoBox'); // ini harus sama dengan id di HTML

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    output.textContent = '';

    const name = form.name.value.trim();
    const dob = form.dob.value;
    const gender = form.gender.value;
    const message = form.message.value.trim();

    let errors = [];
    if(name === '') errors.push('Nama harus diisi.');
    if(dob === '') errors.push('Tanggal lahir harus diisi.');
    if(!gender) errors.push('Jenis kelamin harus dipilih.');
    if(message === '') errors.push('Pesan harus diisi.');

    if(errors.length > 0) {
      output.innerHTML = 'Error:\n' + errors.join('\n');
      return;
    }

    const now = new Date();
    const currentTime = now.toLocaleString();

    output.innerHTML =
      `Pesan berhasil dikirim!\n\n` +
      `Waktu submit : ${currentTime}\n` +
      `Nama         : ${name}\n` +
      `Tanggal Lahir: ${dob}\n` +
      `Jenis Kelamin: ${gender}\n` +
      `Pesan        : ${message}\n\n`;

    form.reset(); // opsional, untuk reset form setelah submit berhasil
    if (name) {
      document.getElementById("welcome-message1").textContent = `Hi ${name}, Welcome to Website`;
    }
  
  });
});
