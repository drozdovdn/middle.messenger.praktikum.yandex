## [Сылка на Heroku](https://thawing-coast-30633.herokuapp.com/)
    https://thawing-coast-30633.herokuapp.com/

## [Сылка на Netlify](https://genuine-bublanina-6e8acb.netlify.app/)
    https://genuine-bublanina-6e8acb.netlify.app/
    
## [Figma](https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1)
    https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1
    
## [Сылка pull requests (Sprint 4)](https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/10)
    https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/10

## Messenger
Самостоятельный проект <b>MESSENGER</b> в котором реализовано:
- Собственный щаблонизатор генерирующий строку с тегами и подставленными значениями из контекста
- Собственный роутинг страниц
- Реализована авторизация, регистрация, возможность создавать чат, добавлять / удалять пользователя из чата
обмениваться сообщениями по webSocket
- Написаны тесты с использованием mocha и chai
- Проект собирает Webpack 5
- Добавлен Dockerfile, который заворачивает проект в контейнер

### Клонирование проекта
SSH `git clone git@github.com:drozdovdn/middle.messenger.praktikum.yandex.git`

После клонирования выполнить команду `npm i`

`npm run test` - запуск тестов

`npm run dev` - режим разработки (запускается parcel) PORT=3000

`npm run start` - режим server (вначале проект билдится и express server раздает статику из папки dist) PORT=3000

`npm run buid` - сборка проекта

`npm run lint` - запускает Eslint c Prettier 

`npm run stylelint` - запускает Stylelint

`npm run stylelint:fix` - запускает Stylelint и фиксит код

`npm run prettier` - запускает Prettier 


  В проекте подключен Eslint, Stylelint и Prettier так же подключен пакет Hucky
  который запускает перед коммитом Stylelint и Eslint c Prettier, проверят типы и запускает тесты


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

### TODO 
- удаление чата
- передачу файлов
- icon чата
- ping чата
  

