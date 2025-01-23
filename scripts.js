// Wait for the DOM to fully load before adding event listeners
window.addEventListener('DOMContentLoaded', function() {

    // Theme toggle button
    const themeButton = document.getElementById('themeToggle');
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode'); // Toggle the class for dark/light mode
    });

    // Language switch button
    const languageButton = document.getElementById('languageToggle');
    languageButton.addEventListener('click', function() {
        let bio = document.getElementById('bio');

        if (languageButton.innerText === "Switch to Vietnamese") {
            bio.innerHTML = `
                Chào, tớ là Axendround, một thực thể điện toán đến từ <span class="highlight">Việt Nam</span>. Tớ đam mê công nghệ.<br>
                Tớ học ngành <span class="highlight">Mạng máy tính và Truyền thông dữ liệu</span> tại trường <a href="https://utt.edu.vn/" class="link" target="_blank">Đại học Công nghệ Giao thông Vận tải</a>.<br>
                Tớ có đam mê về hệ thống, đặc biệt là lưu trữ dữ liệu. Hiện tại đang hướng tới lĩnh vực <span class="highlight">Quản trị Hệ thống</span>.<br>
            `;
            languageButton.innerText = "Switch to English";
        } else {
            bio.innerHTML = `
                Hi, I am Axendround, a cybernetical being based in <span class="highlight">Vietnam</span>. I'm obsessed with tech.<br>
                I major in <span class="highlight">Computer Networks and Data Communications</span> at the <a href="https://utt.edu.vn/" class="link" target="_blank">University of Transport Technology</a>.<br>
                I'm passionate about working with systems, particularly data storage. Currently focusing on <span class="highlight">System Administration</span>.<br>
            `;
            languageButton.innerText = "Switch to Vietnamese";
        }
    });

});