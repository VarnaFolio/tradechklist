function calculate() {
  const checks = document.querySelectorAll('.yes');
  let yesCount = 0;
  checks.forEach(c => { if (c.checked) yesCount++; });

  const percent = Math.round((yesCount / checks.length) * 100);
  const bar = document.getElementById("progressBar");
  bar.style.width = percent + "%";
  bar.innerHTML = percent + "%";

  let message = "";
  if (percent >= 80) {
    bar.style.backgroundColor = "#4CAF50";
    message = "🟢 Висока вероятност за успех — добра основа за вход";
  } else if (percent >= 50) {
    bar.style.backgroundColor = "#FFC107";
    message = "🟡 Средна вероятност — изчакай потвърждение";
  } else {
    bar.style.backgroundColor = "#F44336";
    message = "🔴 Ниска вероятност — по-добре пропусни";
  }

  document.getElementById("output").innerHTML = `✅ ${percent}% отговори „Да“<br>${message}`;
}