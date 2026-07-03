# Обновление расписания кинотеатра

## Процесс (3 шага)

### 1. Подготовить данные

1. Открыть `ExternalScripts/Excel/macros.ods`
2. Внести изменения в расписание на листе "Лист2"
3. Сохранить файл

### 2. Сгенерировать JSON

```bash
yarn get_schedule
```

Скрипт прочитает Excel-файл и создаст `public/schedule.json` с актуальным расписанием.

### 3. Загрузить на сервер

```bash
yarn deploy:schedule
```

Скрипт скопирует `public/schedule.json` на сервер по SCP.

**Готово!** Ребилд и деплой приложения не требуется.

---

## Предварительная настройка

### Настроить Caddy на сервере

В `Caddyfile` добавить маршрут для отдачи JSON-файла с расписанием:

```
example.com {
    root * /var/www/react_sovremennik/dist
    file_server

    # API endpoint для расписания (без кеширования)
    handle_path /api/schedule.json {
        root * /var/www/data
        file_server
        header Cache-Control "no-cache, must-revalidate"
        header Pragma "no-cache"
        header Expires "0"
    }

    # SPA fallback
    handle {
        try_files {path} /index.html
        file_server
    }
}
```

Перезагрузить Caddy:

```bash
caddy reload
```

### Создать директорию для данных

```bash
ssh root@your-server.com
mkdir -p /var/www/data
```

### Настроить скрипт деплоя

Отредактировать `ExternalScripts/deploySchedule.sh` — указать свои:

- `SERVER_USER` — пользователь для SSH
- `SERVER_HOST` — адрес сервера
- `SERVER_PATH` — путь, куда копировать JSON (должен совпадать с root в Caddyfile)

---

## Проверка

После деплоя JSON должен быть доступен по URL:

```
https://example.com/api/schedule.json
```

Откройте в браузере — должен отображаться JSON с расписанием.

---

## Если что-то пошло не так

| Проблема | Решение |
|----------|---------|
| `yarn deploy:schedule` не работает | Проверьте SSH-доступ к серверу и пути в скрипте |
| На сайте не отображается расписание | Откройте `/api/schedule.json` в браузере — должен быть JSON |
| Ошибка "Расписание временно недоступно" | Проверьте, что JSON на сервере доступен и Caddy настроен |
| Старое расписание в браузере | Обновите страницу (Ctrl+F5 для полной перезагрузки без кеша) |