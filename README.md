## ССЫлка на Netlify
    https://fervent-stonebraker-ab93f8.netlify.app/
    
## Figma
    https://www.figma.com/file/SsaMneaZ0TST9Qk7HIfUnZ/YandexPracticumeMessage?node-id=0%3A1
    
## [Сылка pull requests (Sprint 1)](https://github.com/drozdovdn/middle.messenger.praktikum.yandex/pull/2)
## Messager
Проект чата, проект в разработке.
На данные момент реализовано:
- Шаблон генерирующий строку с тегами и подставленными значениями из контекста
- Верстка страниц кроме страницы чата
- Временный роутинг с использованием тега \<a>
- Можно открыть модалку и загрузить аватарку

## Клонирование проекта
SSH `git clone git@github.com:drozdovdn/middle.messenger.praktikum.yandex.git`

После клонирования выполнить команду `npm i`

`npm run dev` - режим разработки (запускается parcel) PORT=3000

`npm run start` - режим servera (вначале проект билдится и express server раздает статику из папки dist) PORT=3000

`npm run buid` - сборка проекта

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
