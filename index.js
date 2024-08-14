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