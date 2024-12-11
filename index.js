function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

const musicId = '2624184715';
document.getElementById('music').src = `//music.163.com/outchain/player?type=2&id=${musicId}&auto=1&height=66`;

function loadMarkdown(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(markdownText => {
            const htmlContent = marked.parse(markdownText);
            document.getElementById(elementId).innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('加载Markdown文件时出错：', error);
            document.getElementById(elementId).innerText = '加载Markdown内容失败！';
        });
}

document.getElementById('markdown!').style.display = 'none';

document.getElementById('inputmarkdown').addEventListener('click', () => {
    loadMarkdown('https://raw.githubusercontent.com/WYC-E/WYC-E/main/README.md', 'markdownContent');
    loadMarkdown('./README.md', 'markdownContent_web');
    document.getElementById('inputmarkdown').style.display = 'none';
    document.getElementById('markdown!').style.display = 'block';
});

window.onload = function() {
    const path = window.location.search.replace('?img?', '');
    document.body.style.backgroundImage = path ? `url(${path})` : 'url(index/footage/backgroundimg.jpg)';
};

function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return mobileAgents.some(agent => userAgentInfo.indexOf(agent) > 0);
}

console.log(isMobile() ? '移动端' : 'PC端');