function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
// 每秒更新一次时间
setInterval(updateClock, 1000);

const musicid = '2124731026';
document.getElementById('music').src = `//music.163.com/outchain/player?type=2&id=${musicid}&auto=1&height=66`;

    // 加载Markdown文件的函数
    function loadMarkdown(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(markdownText => {
                // 使用marked.js解析Markdown
                const htmlContent = marked.parse(markdownText);
                // 将解析后的HTML插入到页面中指定的元素
                document.getElementById(elementId).innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('加载Markdown文件时出错：', error);
                document.getElementById(elementId).innerText = '加载Markdown内容失败！';
            });
    }

    // 调用函数，加载并显示Markdown内容
    loadMarkdown('https://raw.githubusercontent.com/WYC-E/WYC-E/main/README.md', 'markdownContent');

    // 测试