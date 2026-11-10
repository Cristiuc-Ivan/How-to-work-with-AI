# Модели Claude — Resources

## Knowledge

- [Docs: Models overview](https://platform.claude.com/docs/en/models/overview)
  Линейка Fable / Opus / Sonnet / Haiku: ID, назначение, задержка, цены, контекст, effort по умолчанию. Use for: сравнение моделей, цены, «с чего начать».
- [Docs: Effort](https://platform.claude.com/docs/en/build-with-claude/effort)
  Что такое effort, уровни low…max, рекомендации по каждой модели. Use for: выбор уровня effort.
- [Docs: Steering thinking / adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
  Как модель сама решает, думать ли и сколько; как thinking-токены попадают в счёт. Use for: понять, за что реально платишь.
- [Docs: Claude Code — Model configuration](https://code.claude.com/docs/en/model-config)
  Алиасы (`opus`, `sonnet`, `haiku`, `fable`, `opusplan`), `/model`, `/effort`, `ultrathink`, приоритет настроек. Use for: практика в Claude Code.
- [Docs: Claude Code — Manage costs](https://code.claude.com/docs/en/costs)
  Как не перерасходовать: модель, effort, `/clear`, размер контекста, субагенты. Use for: экономия лимитов.
- [Docs: Thinking](https://platform.claude.com/docs/en/build-with-claude/thinking) и [Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
  Блоки размышления, что видит пользователь, устаревший режим с бюджетом. Use for: что скрыто за серым курсивом, биллинг размышления.
- [Docs: Prompting Claude Sonnet 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5)
  Советы по Sonnet 5 (не 5.5), в том числе поднимать effort при недодумывании. Use for: эскалация effort.
- [Help: Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)
  Что такое Claude Design, общие лимиты с Claude Code, экспорт, передача в Claude Code, известные ограничения. Use for: расход и рабочий процесс в Claude Design. Без абсолютной даты обновления.
- [Anthropic: Introducing Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
  Анонс от 17.04.2026. Часть данных устарела (модель, тарифы доступа). Use for: исходная идея продукта.
- [Docs: Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
  Официальный гид по выбору. Найден поиском, ещё не прочитан целиком.

## Wisdom (Communities)

- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/)
  Не проверено на качество модерации. Use for: сверка практики выбора модели с опытом других. Пока кандидат, не рекомендация.

## Gaps

- Claude Design: справка не называет модель и не описывает выбор модели или effort пользователем. Анонс (апрель 2026) называет Opus 4.7, возможно устарело.
- Нет проверенного сообщества с сильной модерацией.
- Нет независимых бенчмарков «модель × effort» для Java/Angular. Есть только цифры из системных карт Anthropic.
