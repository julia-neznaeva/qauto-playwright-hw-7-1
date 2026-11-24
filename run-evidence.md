# Run evidence

- **Тест** `tests/add-car.spec.ts` у проєкті `chromium`
- **Команда** `npx.cmd playwright test tests/add-car.spec.ts --project=chromium` з папки `playwright-starter/`
- **Середовище** Windows x64, Node.js `v24.21.0`, Playwright Test `1.62.1`, Chromium `151.0.7922.34`
- **Застосунок** `https://qauto.forstudy.space/`

## Перший запуск — 2026-11-24T01:41:18+02:00

Обмежений режим заблокував мережевий доступ до QAuto під час `page.goto('/')`. Початкова спроба та передбачений конфігом повтор завершилися однаковою помилкою. Код завершення `1`, рішення для цього запуску `STOP`.

```text
Running 1 test using 1 worker

    Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://qauto.forstudy.space/

  1 failed
```

## Повторний запуск — 2026-11-24T01:41:36+02:00

Ту саму команду запущено з мережевим доступом до QAuto. Код завершення `0`.

```text
Running 1 test using 1 worker

  ok 1 [chromium] › tests\add-car.spec.ts:3:5 › guest can add an Audi TT to Garage (2.6s)

  1 passed (3.5s)
```

| Елемент | Джерело |
| --- | --- |
| Гостьовий вхід і відкриття форми | Playwright CLI підтвердив кнопки `Guest log in` і `Add car` та перехід до `/panel/garage`. |
| Заповнення й збереження | Playwright CLI підтвердив `Brand` з опцією `Audi`, `Model` з опцією `TT`, поле `Mileage` і кнопку `Add`. Пробіг `12000` визначено в [specs/add-car.md](specs/add-car.md). |
| Перевірки | [Специфікація](specs/add-car.md) задає URL Garage та видимий запис `Audi TT`. Playwright CLI підтвердив шлях `/panel/garage` і текст `Audi TT` після збереження. |

**Рішення щодо повторного запуску** `ACCEPT`.
