const vocab = [
  { jp: "い", kanji: "", vi: 'chữ "i"' },
  { jp: "あい", kanji: "愛", vi: "tình yêu" },
  { jp: "いぬ", kanji: "犬", vi: "con chó" },
  { jp: "あう", kanji: "会う", vi: "gặp gỡ" },
  { jp: "いう", kanji: "言う", vi: "nói" },
  { jp: "いえ", kanji: "家", vi: "nhà" },
  { jp: "あお", kanji: "青", vi: "màu xanh" },
  { jp: "おい", kanji: "", vi: "cháu trai (gọi bằng cô/chú/bác)" },
  { jp: "うお", kanji: "魚", vi: "cá" },
  { jp: "おう", kanji: "追う", vi: "đuổi theo" },
  { jp: "かお", kanji: "顔", vi: "khuôn mặt" },
  { jp: "かい", kanji: "貝", vi: "sò, ốc" },
  { jp: "かき", kanji: "柿", vi: "quả hồng" },
  { jp: "あき", kanji: "秋", vi: "mùa thu" },
  { jp: "かく", kanji: "書く", vi: "viết" },
  { jp: "きかい", kanji: "機械", vi: "máy móc" },
  { jp: "いけ", kanji: "池", vi: "cái ao" },
  { jp: "こえ", kanji: "声", vi: "giọng nói" },
  { jp: "かさ", kanji: "傘", vi: "cái ô, dù" },
  { jp: "しか", kanji: "鹿", vi: "con hươu" },
  { jp: "うし", kanji: "牛", vi: "con bò" },
  { jp: "しお", kanji: "塩", vi: "muối" },
  { jp: "すいか", kanji: "西瓜", vi: "dưa hấu" },
  { jp: "せかい", kanji: "世界", vi: "thế giới" },
  { jp: "そこ", kanji: "", vi: "chỗ đó" },
  { jp: "しかく", kanji: "四角", vi: "hình vuông" },
  { jp: "きそく", kanji: "規則", vi: "quy tắc, nội quy" },
  { jp: "いし", kanji: "石", vi: "hòn đá" },
  { jp: "えさ", kanji: "餌", vi: "thức ăn cho động vật" },
  { jp: "さく", kanji: "咲く", vi: "nở hoa" },
  { jp: "いき", kanji: "息", vi: "hơi thở" },
  { jp: "たいこ", kanji: "太鼓", vi: "trống Nhật" },
  { jp: "くち", kanji: "口", vi: "miệng" },
  { jp: "うち", kanji: "家", vi: "nhà, nhà mình" },
  { jp: "つくえ", kanji: "机", vi: "bàn học, bàn làm việc" },
  { jp: "たつ", kanji: "立つ", vi: "đứng" },
  { jp: "つき", kanji: "月", vi: "mặt trăng, tháng" },
  { jp: "て", kanji: "手", vi: "tay" },
  { jp: "ちかてつ", kanji: "地下鉄", vi: "tàu điện ngầm" },
  { jp: "おと", kanji: "音", vi: "âm thanh" },
  { jp: "おっと", kanji: "夫", vi: "chồng" },
  { jp: "そと", kanji: "外", vi: "bên ngoài" },
  { jp: "おとこ", kanji: "男", vi: "đàn ông" },
  { jp: "たけ", kanji: "竹", vi: "cây tre" },
  { jp: "くつ", kanji: "靴", vi: "giày" },
  { jp: "つち", kanji: "土", vi: "đất" },
  { jp: "さかな", kanji: "魚", vi: "cá" },
  { jp: "なつ", kanji: "夏", vi: "mùa hè" },
  { jp: "にく", kanji: "肉", vi: "thịt" },
  { jp: "にかい", kanji: "二階", vi: "tầng 2, lầu 2" },
  { jp: "ぬの", kanji: "布", vi: "vải" },
  { jp: "ねこ", kanji: "猫", vi: "con mèo" },
  { jp: "おかね", kanji: "お金", vi: "tiền" },
  { jp: "きのこ", kanji: "茸", vi: "nấm" },
  { jp: "おに", kanji: "鬼", vi: "quỷ, yêu quái" },
  { jp: "あね", kanji: "姉", vi: "chị gái" },
  { jp: "ねつ", kanji: "熱", vi: "sốt, nhiệt" },
  { jp: "のる", kanji: "乗る", vi: "lên xe, cưỡi, đi bằng" },
  { jp: "さか", kanji: "坂", vi: "con dốc, đường dốc" },
  { jp: "さけ", kanji: "酒", vi: "rượu" },
  { jp: "いす", kanji: "椅子", vi: "cái ghế" },
  { jp: "きつね", kanji: "狐", vi: "con cáo" },
  { jp: "ふえ", kanji: "笛", vi: "sáo" },
  { jp: "はこ", kanji: "箱", vi: "cái hộp" },
  { jp: "ふね", kanji: "船", vi: "thuyền, tàu" },
  { jp: "ほし", kanji: "星", vi: "ngôi sao" },
  { jp: "ひと", kanji: "人", vi: "người" },
  { jp: "へそ", kanji: "臍", vi: "rốn" },
  { jp: "はね", kanji: "羽", vi: "cánh, lông chim" },
  { jp: "ひなた", kanji: "日向", vi: "nơi có nắng, chỗ có ánh mặt trời" },
  { jp: "ふく", kanji: "服", vi: "quần áo" },
];

let mode = "mc";
let dir = "jp2vi";
let shuffled = [];
let current = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let answered = false;
let wrongWords = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setMode(m) {
  mode = m;
  document
    .querySelectorAll(".tab-btn")
    .forEach((b, i) =>
      b.classList.toggle("active", ["mc", "type", "flash"][i] === m),
    );
  renderQuestion();
}

function setDir(d) {
  dir = d;
  document
    .querySelectorAll(".dir-btn")
    .forEach((b, i) =>
      b.classList.toggle("active", ["jp2vi", "vi2jp"][i] === d),
    );
  renderQuestion();
}

function restart() {
  shuffled = shuffle(vocab);
  current = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  wrongWords = [];
  updateStats();
  document.getElementById("finishScreen").classList.remove("show");
  document.getElementById("quizCard").style.display = "";
  document.getElementById("wrongList").innerHTML = "";
  renderQuestion();
}

function updateStats() {
  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statWrong").textContent = wrong;
  document.getElementById("statTotal").textContent = current;
  document.getElementById("statStreak").textContent = streak;
  const pct = shuffled.length ? (current / shuffled.length) * 100 : 0;
  document.getElementById("progressFill").style.width = pct + "%";
}

function getPrompt(item) {
  return dir === "jp2vi" ? item.jp : item.vi;
}
function getAnswer(item) {
  return dir === "jp2vi" ? item.vi : item.jp;
}
function getKanji(item) {
  return dir === "jp2vi" ? item.kanji : "";
}

function renderQuestion() {
  if (current >= shuffled.length) {
    showFinish();
    return;
  }
  answered = false;
  const item = shuffled[current];

  // Card
  document.getElementById("qNum").textContent =
    `${current + 1} / ${shuffled.length}`;
  const hint =
    dir === "jp2vi"
      ? "Từ tiếng Nhật — nghĩa là gì?"
      : "Nghĩa tiếng Việt — tiếng Nhật là gì?";
  document.getElementById("cardHint").textContent = hint;

  const promptEl = document.getElementById("jpWord");
  const kanjiEl = document.getElementById("kanjiSub");

  if (dir === "jp2vi") {
    promptEl.style.fontFamily = "'Noto Sans JP', sans-serif";
    promptEl.textContent = item.jp;
    kanjiEl.textContent = item.kanji ? `(${item.kanji})` : "";
  } else {
    promptEl.style.fontFamily = "'Be Vietnam Pro', sans-serif";
    promptEl.textContent = item.vi;
    kanjiEl.textContent = "";
  }

  document.getElementById("flashAnswer").classList.remove("show");
  document.getElementById("flashAnswer").textContent = getAnswer(item);
  document.getElementById("feedbackBar").className = "feedback-bar";
  document.getElementById("nextBtn").classList.remove("show");

  // Mode-specific
  const optGrid = document.getElementById("optionsGrid");
  const typeWrap = document.getElementById("typeWrap");
  const revealBtn = document.getElementById("revealBtn");
  const flashBtns = document.getElementById("flashBtns");

  optGrid.style.display = "none";
  typeWrap.style.display = "none";
  revealBtn.style.display = "none";
  flashBtns.classList.remove("show");

  if (mode === "mc") {
    optGrid.style.display = "grid";
    renderOptions(item);
  } else if (mode === "type") {
    typeWrap.style.display = "flex";
    const inp = document.getElementById("typeInput");
    inp.value = "";
    inp.className = "type-input";
    inp.disabled = false;
    inp.focus();
  } else if (mode === "flash") {
    revealBtn.style.display = "block";
  }
}

function renderOptions(item) {
  const grid = document.getElementById("optionsGrid");
  grid.innerHTML = "";

  const correctAns = getAnswer(item);
  const pool = vocab.filter((v) => getAnswer(v) !== correctAns);
  const distractors = shuffle(pool)
    .slice(0, 3)
    .map((v) => getAnswer(v));
  const options = shuffle([correctAns, ...distractors]);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    if (dir === "vi2jp") {
      btn.style.fontFamily = "'Noto Sans JP', sans-serif";
      btn.style.fontSize = "1.15rem";
    }
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, opt, correctAns);
    grid.appendChild(btn);
  });
}

function selectOption(btn, chosen, correct_ans) {
  if (answered) return;
  answered = true;
  const allBtns = document.querySelectorAll(".opt-btn");
  allBtns.forEach((b) => {
    b.disabled = true;
    if (b.textContent === correct_ans) b.classList.add("correct");
  });

  if (chosen === correct_ans) {
    btn.classList.add("correct");
    markCorrect();
  } else {
    btn.classList.add("wrong");
    markWrong();
  }
  showNext();
}

function submitType() {
  if (answered) return;
  const item = shuffled[current];
  const input = document.getElementById("typeInput");
  const val = input.value.trim().toLowerCase();
  const correctAns = getAnswer(item).toLowerCase();

  // Flexible matching: accept if val is contained or close
  const isCorrect =
    val === correctAns ||
    (correctAns.includes(val) && val.length >= 3) ||
    val.includes(correctAns.split(",")[0].trim());

  answered = true;
  input.disabled = true;

  if (isCorrect) {
    input.classList.add("correct");
    markCorrect();
  } else {
    input.classList.add("wrong");
    markWrong();
  }
  showFeedback(isCorrect, getAnswer(item));
  showNext();
}

function revealFlash() {
  document.getElementById("flashAnswer").classList.add("show");
  document.getElementById("revealBtn").style.display = "none";
  document.getElementById("flashBtns").classList.add("show");
}

function flashAnswer(knew) {
  if (knew) {
    correct++;
    streak++;
  } else {
    wrong++;
    streak = 0;
    wrongWords.push(shuffled[current]);
  }
  current++;
  updateStats();
  document.getElementById("flashBtns").classList.remove("show");
  renderQuestion();
}

function markCorrect() {
  correct++;
  streak++;
  showFeedback(true);
}
function markWrong() {
  wrong++;
  streak = 0;
  wrongWords.push(shuffled[current]);
  showFeedback(false, getAnswer(shuffled[current]));
}

function showFeedback(ok, correctAns) {
  const bar = document.getElementById("feedbackBar");
  bar.className = "feedback-bar show " + (ok ? "correct-fb" : "wrong-fb");
  document.getElementById("feedbackIcon").textContent = ok ? "✅" : "❌";
  if (ok) {
    const msgs = ["Chính xác!", "Tuyệt vời!", "Đúng rồi!", "Xuất sắc!"];
    document.getElementById("feedbackText").textContent =
      msgs[Math.floor(Math.random() * msgs.length)] +
      (streak >= 3 ? ` 🔥 ${streak} liên tiếp!` : "");
  } else {
    document.getElementById("feedbackText").textContent =
      `Sai rồi. Đáp án đúng: ${correctAns || ""}`;
  }
}

function showNext() {
  updateStats();
  document.getElementById("nextBtn").classList.add("show");
}

function nextQuestion() {
  current++;
  updateStats();
  renderQuestion();
}

document.getElementById("typeInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (!answered) submitType();
    else if (answered) nextQuestion();
  }
});

function showFinish() {
  document.getElementById("quizCard").style.display = "none";
  document.getElementById("optionsGrid").style.display = "none";
  document.getElementById("typeWrap").style.display = "none";
  document.getElementById("revealBtn").style.display = "none";
  document.getElementById("flashBtns").classList.remove("show");
  document.getElementById("feedbackBar").className = "feedback-bar";
  document.getElementById("nextBtn").classList.remove("show");

  const total = vocab.length;
  const pct = Math.round((correct / total) * 100);
  let emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎌" : pct >= 50 ? "📖" : "💪";
  document.getElementById("finishEmoji").textContent = emoji;
  document.getElementById("finishScore").textContent =
    `${correct} / ${total} đúng (${pct}%)`;
  document.getElementById("finishSub").textContent =
    pct >= 90
      ? "Xuất sắc! Bạn học rất giỏi!"
      : pct >= 70
        ? "Tốt lắm, tiếp tục luyện tập nhé!"
        : "Cố gắng thêm, bạn sẽ làm được!";

  const finishScreen = document.getElementById("finishScreen");
  finishScreen.classList.add("show");

  if (wrongWords.length > 0) {
    const wl = document.getElementById("wrongList");
    wl.innerHTML = `<h3>Các từ cần ôn lại (${wrongWords.length})</h3>`;
    wrongWords.forEach((w) => {
      const d = document.createElement("div");
      d.className = "wrong-item";
      d.innerHTML = `<span class="jp">${w.jp}${w.kanji ? " (" + w.kanji + ")" : ""}</span><span class="vi">${w.vi}</span>`;
      wl.appendChild(d);
    });
  }

  document.getElementById("progressFill").style.width = "100%";
}

// Init
restart();
