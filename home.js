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

sections.forEach((section) => observer.observe(section))

// ✅ TOP 버튼
const topBtn = document.getElementById('topBtn')

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block'
  } else {
    topBtn.style.display = 'none'
  }
})

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
