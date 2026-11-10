/* Квиз-компонент. Разметка:
 <div class="quiz" data-correct="2">
   <p class="q">Вопрос</p>
   <button class="opt">Вариант 0</button> ...
   <div class="fb">Пояснение</div>
 </div>
 data-correct — индекс правильного варианта (с 0). Мгновенная обратная связь после выбора.
 Опционально <div class="score" id="score"></div> — итог. */
(function () {
  var quizzes = document.querySelectorAll('.quiz');
  var answered = 0, right = 0;
  quizzes.forEach(function (quiz) {
    var correct = parseInt(quiz.dataset.correct, 10);
    var opts = quiz.querySelectorAll('button.opt');
    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        if (quiz.classList.contains('done')) return;
        quiz.classList.add('done');
        answered++;
        if (i === correct) { right++; btn.classList.add('ok'); }
        else { btn.classList.add('bad'); opts[correct].classList.add('ok'); }
        opts.forEach(function (b) { b.disabled = true; });
        var score = document.getElementById('score');
        if (score && answered === quizzes.length) {
          score.textContent = 'Итог: ' + right + ' из ' + quizzes.length +
            (right === quizzes.length ? ' — отлично.' : '. Вернитесь к абзацам, где ошиблись, и спросите учителя, если неясно.');
        }
      });
    });
  });
})();
