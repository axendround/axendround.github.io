document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('languageSelect');

  // Kiểm tra đường dẫn hiện tại để thiết lập ngôn ngữ ban đầu
  const path = window.location.pathname;
  if (path.startsWith("/vi")) {
    languageSelect.value = "vi";
  } else {
    languageSelect.value = "en";
  }

  // Lắng nghe sự kiện thay đổi ngôn ngữ
  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;

    // Lấy đường dẫn hiện tại nhưng đổi ngôn ngữ
    let newPath = `/${selectedLanguage}/`;

    // Nếu đang ở một trang con (ví dụ: /vi/about.html -> /en/about.html)
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage && currentPage !== "index.html") {
      newPath += currentPage;
    }

    // Chuyển hướng đến ngôn ngữ được chọn
    window.location.href = newPath;
  });
});

