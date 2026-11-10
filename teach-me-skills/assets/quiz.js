/* Переиспользуемый квиз. Использование:
   <div class="quiz" data-quiz='[{"q":"...","opts":["a","b","c","d"],"correct":2,"why":"..."}]'></div>
   <script src="../assets/quiz.js"></script>
   Обратная связь мгновенная; после ответа вопрос блокируется. */
(function () {
  document.querySelectorAll(".quiz[data-quiz]").forEach(function (root) {
    var items = JSON.parse(root.getAttribute("data-quiz"));
    var answered = 0, right = 0;
    var score = document.createElement("div");
    score.className = "score";

    items.forEach(function (it, qi) {
      var box = document.createElement("div");
      box.className = "q";
      var p = document.createElement("p");
      p.textContent = (qi + 1) + ". " + it.q;
      var opts = document.createElement("div");
      opts.className = "opts";
      var why = document.createElement("div");
      why.className = "why";
      var btns = [];
      it.opts.forEach(function (label, oi) {
        var b = document.createElement("button");
        b.className = "opt";
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", function () {
          btns.forEach(function (x) { x.disabled = true; });
          var ok = oi === it.correct;
          b.classList.add(ok ? "ok" : "bad");
          btns[it.correct].classList.add("ok");
          why.textContent = (ok ? "Верно. " : "Не то. ") + it.why;
          answered++; if (ok) right++;
          if (answered === items.length) {
            score.textContent = "Итог: " + right + " из " + items.length +
              (right === items.length ? ". Отлично, расскажи это агенту своими словами." :
               ". Вернись к ошибкам через день: так запоминается лучше всего.");
          }
        });
        btns.push(b);
        opts.appendChild(b);
      });
      box.append(p, opts, why);
      root.appendChild(box);
    });
    root.appendChild(score);
  });
})();
