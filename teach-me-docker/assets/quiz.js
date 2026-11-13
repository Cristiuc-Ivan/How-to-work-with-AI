// Переиспользуемый квиз. Разметка:
// <div class="quiz"><div class="q" data-correct="1"><p>Вопрос</p>
//   <button class="opt">A</button>... <div class="why">Объяснение</div></div></div>
// <div class="score" id="score"></div>
(function () {
  var qs = document.querySelectorAll('.quiz .q');
  var done = 0, right = 0;
  var score = document.querySelector('.quiz .score');
  qs.forEach(function (q) {
    var correct = parseInt(q.dataset.correct, 10);
    var opts = q.querySelectorAll('button.opt');
    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        opts.forEach(function (b) { b.disabled = true; });
        opts[correct].classList.add('right');
        if (i === correct) { right++; } else { btn.classList.add('wrong'); }
        q.querySelector('.why').style.display = 'block';
        done++;
        if (score && done === qs.length) {
          score.textContent = 'Результат: ' + right + ' из ' + qs.length +
            (right === qs.length ? '. Отлично.' : '. Перечитайте объяснения у ошибок и спросите меня, если что-то неясно.');
        }
      });
    });
  });
})();
