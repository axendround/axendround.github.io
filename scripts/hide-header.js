document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("homeButton");
  const header = document.getElementById("header");

  if (homeButton && header) {
    homeButton.addEventListener("click", function () {
      // Ẩn header với hiệu ứng mượt mà
      header.style.opacity = "0";
      header.style.pointerEvents = "none";

      // Sau khi ẩn header, chuyển hướng người dùng
      setTimeout(() => {
        // Lấy ngôn ngữ mặc định của trình duyệt
        const userLanguage = navigator.language || navigator.userLanguage;
        const defaultLanguage = userLanguage.startsWith("vi") ? "vi" : "en";

        // Chuyển hướng đến trang tương ứng
        window.location.href = `/${defaultLanguage}/`;
      }, 800); // Đợi 800ms để hoàn thành hiệu ứng ẩn header
    });
  }
});
