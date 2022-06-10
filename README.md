## [Сылка на Netlify](https://deploy--upbeat-torvalds-1689b2.netlify.app/)
    https://deploy--upbeat-torvalds-1689b2.netlify.app/
    
## [Figma](https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1)
    https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1
    
## [Сылка pull requests (Sprint 2)](https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/4)
    https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/4

## Messager
Проект чата, проект в разработке.
На данные момент реализовано:
- Шаблон генерирующий строку с тегами и подставленными значениями из контекста
- Верстка всех страниц
- Роутинг страниц
- Реализована авторизация, регистрация, возможность создавать чат, добавлять / удалять пользователя из чата
обмениваться сообщениями по webSocket
- Написаны тесты

## Клонирование проекта
SSH `git clone git@github.com:drozdovdn/middle.messenger.praktikum.yandex.git`

После клонирования выполнить команду `npm i`

`npm run test` - запуск тестов

`npm run dev` - режим разработки (запускается parcel) PORT=3000

`npm run start` - режим servera (вначале проект билдится и express server раздает статику из папки dist) PORT=3000

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
