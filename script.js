let counter = 0;
const counterEl = document.getElementById("counter");
const tasbeehBtn = document.getElementById("tasbeehBtn");
const resetBtn = document.getElementById("resetBtn");
const zekrSelect = document.getElementById("zekrSelect");
const currentZekr = document.getElementById("currentZekr");
const clickSound = document.getElementById("clickSound");

// تحديث الذكر الحالي
zekrSelect.addEventListener("change", () => {
  currentZekr.textContent = "الذكر الحالي: " + zekrSelect.value;
  counter = 0;
  counterEl.textContent = counter;
});

// زر التسبيح
tasbeehBtn.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
  clickSound.play(); // تشغيل الصوت
});

// زر الإعادة
resetBtn.addEventListener("click", () => {
  counter = 0;
  counterEl.textContent = counter;
});
function increaseCount() {
  count++;
  const countEl = document.getElementById("count");
  countEl.innerText = count;

  // الصوت
  let audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387'); 
  audio.play();

  // الأنيميشن
  countEl.classList.remove("animate");
  void countEl.offsetWidth; // إعادة تفعيل الأنيميشن
  countEl.classList.add("animate");
}
const btn = document.getElementById("tasbeeh-btn");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 200);
});
let count = 0;
const maxCount = 33; // ممكن تغيّريه لأي عدد

function increaseCount() {
  count++;
  const countEl = document.getElementById("count");
  countEl.innerText = count;

  // الصوت العادي للتسبيح
  let audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  audio.play();

  // أنيميشن الرقم
  countEl.classList.remove("animate");
  void countEl.offsetWidth; 
  countEl.classList.add("animate");

  // تأثير على الزر
  const btn = document.getElementById("tasbeeh-btn");
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 200);

  // تحقق من الحد الأقصى للتسبيحات
  if(count >= maxCount){
    alert("🌸 وصلت للعدد المحدد! 🌸");
    count = 0; // يرجع العداد للصفر تلقائي
    countEl.innerText = count;
  }
}
const duaaEl = document.getElementById("duaa");

const duas = [
  "اللهم اجعل هذه التسبيحات شفيعاً لي يوم القيامة 🌸",
  "اللهم اجعلها نوراً في قبري 🌷",
  "اللهم اغفر لي ولوالدي وللمسلمين 🌹",
  "سبحان الله وبحمده سبحان الله العظيم ✨",
  "اللهم ارزقنا الفردوس الأعلى بلا حساب 💖"
  // تقدري تزودي لحد ما تحبي
];

function showDuaa() {
  const randomIndex = Math.floor(Math.random() * duas.length);
  duaaEl.innerText = duas[randomIndex];
  duaaEl.style.display = "block";

  setTimeout(() => {
    duaaEl.style.display = "none";
  }, 3000); // يختفي بعد 3 ثواني
}

// في دالة increaseCount() ضيفي السطر ده في آخرها:
showDuaa();
// استرجاع العدد المحفوظ عند تحميل الصفحة
let savedCount = localStorage.getItem("tasbeehCount");
if(savedCount) {
  count = parseInt(savedCount);
  document.getElementById("count").innerText = count;
}

// تعديل increaseCount() لحفظ العدد
function increaseCount() {
  count++;
  const countEl = document.getElementById("count");
  countEl.innerText = count;

  // الصوت
  let audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  audio.play();

  // أنيميشن الرقم
  countEl.classList.remove("animate");
  void countEl.offsetWidth;
  countEl.classList.add("animate");

  // تأثير الزر
  const btn = document.getElementById("tasbeeh-btn");
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 200);

  // عرض دعاء
  showDuaa();

  // حفظ العدد في LocalStorage
  localStorage.setItem("tasbeehCount", count);

  // تحقق من الحد الأقصى للتسبيحات
  if(count >= maxCount){
    alert("🌸 وصلت للعدد المحدد! 🌸");
    count = 0;
    countEl.innerText = count;
    localStorage.setItem("tasbeehCount", count);
  }
}

// تعديل resetCount() لحفظ الصفر عند إعادة التصفير
function resetCount() {
  count = 0;
  document.getElementById("count").innerText = count;
  localStorage.setItem("tasbeehCount", count);
}