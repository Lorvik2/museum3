function startTour() {
  const message = document.getElementById("tourMessage");
  message.textContent = "Онлайн-тур запущен: сейчас можно перейти к просмотру виртуальных залов музея.";
}

document.querySelector(".form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Заявка на билет оформлена!");
});
