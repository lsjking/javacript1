// ✅ 등장 애니메이션
const sections = document.querySelectorAll('.page')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  },
  { threshold: 0.6 },
)

sections.forEach((el) => observer.observe(el))

// ✅ 위로 버튼
const btn = document.getElementById('topBtn')

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none'
})

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
