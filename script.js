// // タイピング風自己紹介
// const text = "Thank you for visiting my profile!";
// let i = 0;
// function typingEffect() {
//   if (i < text.length) {
//     document.getElementById("typed-text").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typingEffect, 60);
//   }
// }
// typingEffect();

// スクロール表示アニメーション
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(el => observer.observe(el));

// テーマ切り替え（背景色変更）
function changeTheme() {
  document.body.style.background = "linear-gradient(to bottom right, #fff0e5, #ffd699)";
  document.body.style.color = "#703000";
}

