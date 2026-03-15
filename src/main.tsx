import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

/* === 仅新增：2026 鼠标流光追踪逻辑 (Mouse Tracker) === */
if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        // 计算鼠标相对于窗口的百分比位置
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // 将坐标实时传递给 body 的 CSS 变量
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);
    });
}
