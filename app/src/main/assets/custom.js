window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 封装缩放函数，方便重复调用
function setBodyZoom() {
  // 避免除以 0 错误（极端情况容错）
  const zoomRatio = window.innerWidth / 2048 || 1;
  document.body.style.zoom = zoomRatio;
  // 可选：打印当前缩放比例（调试用）
  console.log('当前缩放比例：', zoomRatio.toFixed(2));
}

// 1. 页面加载完成后初始化缩放
window.addEventListener('load', setBodyZoom);

// 2. 窗口大小改变时重新计算缩放
window.addEventListener('resize', setBodyZoom);