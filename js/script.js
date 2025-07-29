
  document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const welcomeNameEl = document.getElementById("welcomeName");
    const welcomeMessage = document.querySelector("#welcome-message1");
    const form = document.getElementById("messageForm");
    const infoBox = document.getElementById("infoBox");

    // Prompt sapaan pengguna
    const promptName = prompt("Masukkan nama Anda:");
    if (welcomeNameEl) {
      welcomeNameEl.textContent = promptName || "Pengunjung";
    }

    // Update sapaan secara live saat mengetik
    nameInput.addEventListener("input", () => {
      const nameVal = nameInput.value.trim();
      if (nameVal.length > 0) {
        welcomeMessage.textContent = `Hi ${nameVal}, Welcome to Website`;
      } else {
        welcomeMessage.textContent = `Hi ${promptName || "Pengunjung"}, Welcome to Website`;
      }
    });

    // Handler form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);
      const name = data.get("name");
      const birthdateVal = data.get("dob");
      const birthdate = new Date(birthdateVal);
      const gender = data.get("gender");
      const message = data.get("message");

      if (!gender) {
        alert("Silakan pilih jenis kelamin.");
        return;
      }

      // Format tanggal
      const day = String(birthdate.getDate()).padStart(2, "0");
      const month = String(birthdate.getMonth() + 1).padStart(2, "0");
      const year = birthdate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      // Tampilkan hasil di infoBox
      infoBox.innerHTML = `
        <div class="mb-1 font-bold">Current time :</div>
        <div id="currentTime" class="mb-3">${new Date().toString()}</div>
        <div>
          <b>Nama</b> : ${name}<br />
          <b>Tanggal Lahir</b> : ${formattedDate}<br />
          <b>Jenis Kelamin</b> : ${gender}<br />
          <b>Pesan</b> : ${message}
        </div>
      `;
    });

    // Update jam setiap detik
    function updateTime() {
      const timeNow = new Date().toString();
      const timeEl = document.getElementById("currentTime");
      if (timeEl) {
        timeEl.textContent = timeNow;
      }
    }
    setInterval(updateTime, 1000);
    updateTime();
  });
