let notes = []

// 새로고침 시 저장된 데이터 불러오기
window.onload = function () {
  const saved = localStorage.getItem('notes')
  if (saved) {
    notes = JSON.parse(saved) //불러오기: 문자열 배열로 복구
    notes.forEach((note) => renderNote(note))
  }
}

// TIP 보기
function toggleTip() {
  const tip = document.getElementById('tipBox')
  tip.style.display = tip.style.display === 'none' ? 'block' : 'none'
}

// 추가 + 저장
function addNote() {
  const note = {
    question: document.getElementById('question').value, //값 가져오기
    correct: document.getElementById('correct').value,
    myAnswer: document.getElementById('myAnswer').value,
    type: document.getElementById('type').value,
    analysis: document.getElementById('analysis').value,
  }

  notes.push(note)

  // 저장
  localStorage.setItem('notes', JSON.stringify(notes)) //데이터 저장

  renderNote(note)

  // 초기화
  document.getElementById('question').value = ''
  document.getElementById('correct').value = ''
  document.getElementById('myAnswer').value = ''
  document.getElementById('analysis').value = ''
}

// 화면 출력
function renderNote(note) {
  const list = document.getElementById('list')

  const item = document.createElement('div')
  item.className = 'note'

  item.innerHTML = //HTML을 JS로 만들어서 추가
    (
      <div class="flex">
        <div style="flex:1;">
          <h4>📝 문제</h4>
          <p>${note.question}</p>
          <p>정답: ${note.correct}</p>
          <p>내 답: ${note.myAnswer}</p>
          <p>유형: ${note.type}</p>
        </div>

        <div style="flex:1;">
          <h4>🔍 분석</h4>
          <p>${note.analysis}</p>
        </div>
      </div>
    )

  list.appendChild(item)
}
