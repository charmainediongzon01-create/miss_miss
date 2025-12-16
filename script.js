const music = document.getElementById("bgMusic");
const video = document.getElementById("discoVideo");

video.addEventListener("pause", () => video.play());

function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}

function toggleGallery() {
  const gallery = document.getElementById("gallery");
  gallery.style.display = gallery.style.display === "block" ? "none" : "block";
}
