# Docker Resources

## Knowledge

- [Docker Docs: Docker overview](https://docs.docker.com/get-started/docker-overview/)
  Официальное описание платформы, архитектуры (клиент, демон, реестр) и объектов Docker. Use for: что такое Docker и из чего он состоит.
- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)
  Определение контейнера, отличие от виртуальной машины, практика с `welcome-to-docker`. Use for: контейнеры, изоляция, первый запуск.
- [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)
  Определение образа, слои, неизменяемость. Use for: образ против контейнера, слои, теги.
- [Docker Docs: Writing a Dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/)
  Основные инструкции Dockerfile и пример для Python. Use for: чтение Dockerfile, назначение FROM/RUN/CMD и др.
- [Docker Docs: Build cache](https://docs.docker.com/build/cache/)
  Как слои связаны с кэшем сборки и что его инвалидирует. Use for: порядок инструкций, скорость сборки.
- [Docker Docs: Build, tag, and publish an image](https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/)
  `docker build`, `-t`, формат имени образа. Use for: сборка и теги.
- [Docker Docs: What is Docker Compose?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-docker-compose/)
  Назначение Compose, `up`/`down`, пример приложения с БД. Use for: первый запуск многоконтейнерного проекта.
- [Docker Docs: Compose application model](https://docs.docker.com/compose/intro/compose-application-model/)
  Сервисы, сети, тома, проекты. Use for: словарь Compose.
- [Docker Docs: Compose file, services](https://docs.docker.com/reference/compose-file/services/)
  Справочник по ключам сервиса (image, build, ports, environment, depends_on, volumes). Use for: расшифровка незнакомого ключа.
- [Docker Docs: Persisting container data](https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/)
  Почему данные теряются и как их сохранять томами. Use for: базы данных в контейнерах.
- [Docker Hub: postgres (официальный образ)](https://hub.docker.com/_/postgres)
  Переменные окружения и пример Compose для PostgreSQL. Use for: запуск PostgreSQL локально.
- [Docker Docs: Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
  Несколько FROM, `AS`, `COPY --from`. Use for: чтение Dockerfile с отдельным этапом сборки.
- [Docker Docs: Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
  Полный справочник инструкций (CMD, EXPOSE, COPY). Use for: точное значение инструкции. Страница длинная, прочитана только её первая часть.
- [Docker Docs: Extend your Compose configuration](https://docs.docker.com/compose/how-tos/multiple-compose-files/extends/)
  Как работает `extends`. Use for: проекты, где Compose разбит на несколько файлов.
- [npm Docs: npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci)
  Чистая установка по lock-файлу. Use for: фронтенд-сборки и CI.

## Wisdom (Communities)

Пока не подобраны. Добавлю, когда дойдём до практики с реальными проектами и CI.

## Gaps

- Сети в Compose: как сервисы находят друг друга по имени (в документации ещё не разобрано)
- Dockerfile для Java/Spring Boot: нужен проверенный источник. В проекте rebalance образ бэкенда собирается jib (по комментарию в Dockerfile), источник по jib не найден
- Образ nginx-unprivileged: страница на Docker Hub не описывает пользователя и порт; нужен источник по актуальному `nginx/nginx-unprivileged`
- Docker в CI (GitHub Actions и аналоги)
- Testcontainers: связь с Docker для Java-стека
