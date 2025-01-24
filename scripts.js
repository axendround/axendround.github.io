document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const languageToggle = document.getElementById('languageToggle');
    const languageLabel = document.getElementById('languageLabel');
    const bio = document.getElementById('bio');

    // Theme toggle
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.add('light-mode');
            themeLabel.innerHTML = '☀️ Light';
        } else {
            document.body.classList.remove('light-mode');
            themeLabel.innerHTML = '🌙 Dark';
        }
    });

    // Language toggle
    languageToggle.addEventListener('change', function () {
        if (languageToggle.checked) {
            languageLabel.innerHTML = '🇻🇳 Vietnamese';
            bio.innerHTML = `
                Chào, tớ là Axendround, một thực thể điện toán đến từ <span class="highlight">Việt Nam</span>.<br>
                Tớ học ngành <span class="highlight">Mạng máy tính và Truyền thông dữ liệu</span> tại trường <a href="https://utt.edu.vn/" class="link" target="_blank">Đại học Công nghệ Giao thông Vận tải</a>.<br>
                Tớ có đam mê về hệ thống, đặc biệt là lưu trữ dữ liệu. Hiện tại đang hướng tới lĩnh vực <span class="highlight">Quản trị Hệ thống</span>.<br>
            `;
        } else {
            languageLabel.innerHTML = '🇺🇸 English';
            bio.innerHTML = `
                Hi, I am Axendround, a cybernetical being based in <span class="highlight">Vietnam</span>.<br>
                I major in <span class="highlight">Computer Networks and Data Communications</span> at the <a href="https://utt.edu.vn/" class="link" target="_blank">University of Transport Technology</a>.<br>
                I'm passionate about working with systems, particularly data storage. Currently focusing on <span class="highlight">System Administration</span>.<br>
            `;
        }
    });

});