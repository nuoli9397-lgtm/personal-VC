// 平滑滚动到指定区域
document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = btn.getAttribute("data-scroll-to");
    if (!target) return;
    const el = document.querySelector(target);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 简单的联系表单前端提示（不提交到后端）
const form = document.getElementById("contact-form");
const tip = document.getElementById("form-tip");

if (form && tip) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tip.textContent = "已收到你的留言（前端示例），可以在此接入真实后端。";
    tip.style.color = "#4ade80";
    form.reset();
    setTimeout(() => {
      tip.textContent = "";
      tip.style.color = "";
    }, 3500);
  });
}

// 设置年份
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

