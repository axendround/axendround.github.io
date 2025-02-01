document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('languageSelect');

  // Kiểm tra URL hiện tại để thiết lập lựa chọn ngôn ngữ ban đầu
  if (window.location.pathname.startsWith("/vi")) {
    languageSelect.value = "vi";
  } else {
    languageSelect.value = "en";
  }

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    window.location.href = `/${selectedLanguage}/`;
  });
});

