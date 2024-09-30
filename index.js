function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
// 每秒更新一次时间
setInterval(updateClock, 1000);

const musicid = '2624184715';
document.getElementById('music').src = `//music.163.com/outchain/player?type=2&id=${musicid}&auto=1&height=66`;


// -------------------------------------------markdown加载--------------------------------------------
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

document.getElementById('markdown!').style.display = 'none';

document.getElementById('inputmarkdown').addEventListener('click', () => {
    // 调用函数，加载并显示Markdown内容
    loadMarkdown('https://raw.githubusercontent.com/WYC-E/WYC-E/main/README.md', 'markdownContent');
    document.getElementById('inputmarkdown').style.display = 'none';
    document.getElementById('markdown!').style.display = 'block';
});
// -------------------------------------------markdown加载--------------------------------------------



window.onload = function() {  
    var path = window.location.search.replace('?img?', '');
    if (path === '') {
        document.body.style.background.url = 'index/footage/backgroundimg.jpg';
    } else {
        document.body.style.background.url = path;
    }
};


function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
     const mobileFlag = mobileAgents.some((mobileAgent) => {
        return userAgentInfo.indexOf(mobileAgent) > 0;
    });

    return mobileFlag;
}

console.log(isMobile() ? '移动端' : 'PC端');
