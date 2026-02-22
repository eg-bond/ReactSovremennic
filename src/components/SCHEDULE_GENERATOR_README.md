# Генератор изображений расписания для браузера

## Описание

Компоненты для генерации изображений расписания кинотеатра непосредственно в браузере, аналог PhotoShop скрипта `makeSceduleImages.jsx`.

## Компоненты

### 1. ScheduleImageGenerator
Базовый компонент для генерации одного изображения.

### 2. ScheduleImageGeneratorBatch
Расширенный компонент с возможностью:
- Предпросмотра расписания
- Скачивания отдельных изображений
- Массового скачивания всех изображений
- Настройки дизайна

## Использование

### Базовое использование

```tsx
import { ScheduleImageGeneratorBatch } from './components/ScheduleImageGeneratorBatch';
import scheduleData from '../ExternalScripts/PhotoShopScedule/psSchedule.json';

function App() {
  return (
    <ScheduleImageGeneratorBatch scheduleData={scheduleData} />
  );
}
```

### С настройками дизайна

```tsx
const customConfig = {
  width: 1200,
  height: 800,
  backgroundColor: '#ffffff',
  titleFont: 'bold 48px Arial',
  titleColor: '#000000',
  timeFont: 'bold 36px Arial',
  priceFont: '32px Arial',
  textColor: '#333333',
  padding: 60,
  lineHeight: 80,
};

<ScheduleImageGeneratorBatch 
  scheduleData={scheduleData}
  config={customConfig}
/>
```

## Параметры конфигурации

| Параметр | Тип | Описание |
|----------|-----|----------|
| width | number | Ширина изображения в пикселях |
| height | number | Высота изображения в пикселях |
| backgroundColor | string | Цвет фона (hex, rgb) |
| titleFont | string | Шрифт заголовка (CSS font) |
| titleColor | string | Цвет заголовка |
| timeFont | string | Шрифт времени сеансов |
| priceFont | string | Шрифт цен |
| textColor | string | Цвет текста |
| padding | number | Отступы от краев |
| lineHeight | number | Высота строки между сеансами |

## Формат данных

Компонент использует тот же формат данных, что и PhotoShop скрипт:

```json
{
  "day0": {
    "titles": ["Фильм 1", "Фильм 2"],
    "seansScedule": {
      "Фильм 1": [
        ["11:10", "Фильм 1", "6+", "400₽", 0],
        ["17:40", "Фильм 1", "6+", "520₽", 3]
      ]
    }
  }
}
```

## Функции

- **Предпросмотр**: Выберите день и фильм, нажмите "Предпросмотр"
- **Скачать текущее**: Скачивает выбранное изображение в JPG
- **Скачать все**: Скачивает все изображения для всех дней и фильмов

## Интеграция в существующий проект

Добавьте компонент в нужное место вашего приложения:

```tsx
// В App.tsx или любом другом компоненте
import { ScheduleGeneratorExample } from './components/ScheduleGeneratorExample';

// Добавьте роут или условный рендеринг
<Route path="/schedule-generator" element={<ScheduleGeneratorExample />} />
```

## Преимущества перед PhotoShop скриптом

- ✅ Не требует PhotoShop
- ✅ Работает в браузере
- ✅ Быстрая генерация
- ✅ Легко настраивается
- ✅ Предпросмотр в реальном времени
- ✅ Массовая генерация

## Дальнейшие улучшения

Возможные доработки:
- Загрузка фоновых изображений
- Поддержка кастомных шрифтов
- Добавление логотипа
- Экспорт в PNG
- Настройка позиционирования элементов
