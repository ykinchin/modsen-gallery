# Tестовое задание Modsen Art Museum

## Содержание

- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Описание экранов](#Описание-экранов)
- [Используемые технологии](#Используемые-технологии)

## API:

#Деплой 
https://m-art-gallery.netlify.app

В приложении использовано Art Institute of Chicago API
[ART API](https://api.artic.edu/docs/#introduction)

## Реализованный основной функционал функционал


=======
-   [x] Получение данных о картинах с внешнего [API](https://github.com/ykinchin/modsen-gallery/blob/master/src/utils/api.ts);
-   [x] Отображение [списка картинс возможностью пагинации](https://github.com/ykinchin/modsen-gallery/blob/master/src/components/CarouselSection/index.tsx) ;
-   [x] Реализация [формы поиска с валидацией введенных данных](https://github.com/ykinchin/modsen-gallery/blob/master/src/pages/ResultsPage/index.tsx);
-   [x] Использование [роутинга](https://github.com/ykinchin/modsen-gallery/blob/master/src/router/AppRouter.tsx) для разделения страниц приложения;
-   [x] Реализация [дебаунса](https://github.com/ykinchin/modsen-gallery/blob/master/src/components/SearchForm/index.tsx) для поисковой формы;
-   [x] Возможность добавления картины в [список избранных с сохранением их в LocalStorage](https://github.com/ykinchin/modsen-gallery/blob/master/src/context/FavoritesContext.tsx);
-   [x] Возможность просмотра более [детальной информации о картине](https://github.com/ykinchin/modsen-gallery/blob/master/src/pages/ArtworkPage/index.tsx);
-   [x] [Интерфейс для просмотра списка избранных](https://github.com/ykinchin/modsen-gallery/blob/master/src/pages/FavoritesPage/index.tsx) и возможности удаления из списка;
-   [x] Реализация возможности [сортировки картин по различным критериям (по дате или алфавиту)](https://github.com/ykinchin/modsen-gallery/blob/master/src/pages/ResultsPage/index.tsx).

## Дополнительный функционал

-   [x] При загрузке картин реализован [Loader](https://github.com/ykinchin/modsen-gallery/tree/master/src/components/Loader);
-   [x] Оптимизация дизайна под [мобильные устройства](https://github.com/ykinchin/modsen-gallery/blob/master/src/styles/theme.ts);
-   [x] Реализация [burger-menu](https://github.com/ykinchin/modsen-gallery/blob/master/src/components/BurgerMenu/index.tsx);
-   [x] Использование [TypeScript](https://github.com/ykinchin/modsen-gallery/blob/master/src/sharedTypes/apiTypes.ts) для типизирования и уменьшения количества потенциальных багов;
-   [x] Обработка ошибок через паттерн [**_Error Boundaries_**](https://github.com/ykinchin/modsen-gallery/blob/master/src/components/ErrorBoundary/index.tsx);
-   [x] Использование [алиасов](https://github.com/ykinchin/modsen-gallery/blob/master/tsconfig.json) для импортирования файлов;
-   [x] Покрытие тестами 30% функциональности приложения;
-   [x] Организация файловой [структуры](https://github.com/ykinchin/modsen-gallery/tree/master/src) react приложения;
-   [x] Деплой приложения на платформу [Netlify](https://m-art-gallery.netlify.app);
-   [x] Настройка конфигурации [eslint](https://github.com/ykinchin/modsen-gallery/blob/master/.eslintrc.cjs), [prettier](https://github.com/ykinchin/modsen-gallery/blob/master/.prettierrc), [husky](https://github.com/ykinchin/modsen-gallery/tree/master/.husky);
-   [x] Использование корректного [GitFlow](https://github.com/ykinchin/modsen-gallery/commits/develop/) в проекте;
-   [x] Использование [styled-components](https://github.com/ykinchin/modsen-gallery/blob/master/src/components/GalleryItem/styled.ts) для стилизации приложения.

## Описание экранов

Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск данных. Так же на главной странице необходимо реализована пагинация по трем картинам. При клике на выбранную картину осуществляется переход на страницу с детальной информацией, чтобы изучить произведение подробнее. Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## Используемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_styled-components_** - система стилизации react компонентов;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_yup_** - библиотека для валидации форм;
- **_formik_** - библиотека для обработки элемента ввода формы.
- **_axios_** - библиотека для реализации запросов к api.
