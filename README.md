## [Сылка на Netlify](https://genuine-bublanina-6e8acb.netlify.app)
    https://genuine-bublanina-6e8acb.netlify.app/
    
## Figma
    https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1
    
## [Сылка pull requests (Sprint 3)](https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/6)
    https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/6

## Messager
Проект чата, проект в разработке.
На данные момент реализовано:
- Шаблон генерирующий строку с тегами и подставленными значениями из контекста
- Верстка всех страниц
- Временный роутинг с использованием тега \<a>
- Реализована  валидация с выводом данных в консоль

## Клонирование проекта
SSH `git clone git@github.com:drozdovdn/middle.messenger.praktikum.yandex.git`

После клонирования выполнить команду `npm i`

`npm run dev` - режим разработки (запускается parcel) PORT=3000

`npm run start` - режим servera (вначале проект билдится и express server раздает статику из папки dist) PORT=3000

`npm run buid` - сборка проекта

`npm run lint` - запускает Eslint c Prettier 

`npm run stylelint` - запускает Stylelint

`npm run stylelint:fix` - запускает Stylelint и фиксит код

`npm run prettier` - запускает Prettier 


  В проекте подключен Eslint, Stylelint и Prettier так же подключен пакет Hucky
  который запускает перед коммитом Stylelint и Eslint c Prettier


### Структура проекта

```bash
    src/
        features/   //Фичи 
        components/ //Компоненты
        pages/      //Страницы
          ...
            modules/  //Модули
            ...
        templater/  //Шаблонизатор
        utils/      //Вспомогательные функции
    static/         //Статические файлы (icons/, index.html)   
```
