const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const floatingPhotos = document.querySelectorAll(".floating-photo");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // setelah animasi buka
  setTimeout(() => {
    envelope.classList.add("fade-out");
  }, 1200);

  // setelah fade-out selesai
  setTimeout(() => {
    envelope.style.display = "none";
    content.classList.remove("hidden");

    document.body.style.alignItems = "flex-start";
    document.body.style.overflow = "auto";

    // === TAMPILKAN FOTO PELAN ===
    floatingPhotos.forEach((photo, i) => {
      setTimeout(() => {
        photo.classList.add("show");
      }, i * 200); // muncul satu-satu
    });

  }, 2000);
});

/* PARALLAX */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 60;
  const y = (window.innerHeight / 2 - e.clientY) / 60;

  floatingPhotos.forEach((photo, index) => {
    const depth = (index + 1) * 0.6;
    photo.style.transform = `
      translate(${x * depth}px, ${y * depth}px)
    `;
  });
});