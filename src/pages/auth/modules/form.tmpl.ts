export const formTmpl = `
    <form class="form {{className}}">
    {{title}}
    <div class="form__body">
     {{#with data}}
           <div class="form__input">{{input}}</div>
     {{/with}}
    </div>
    <div class="form__button">
     {{button}}
    </div>
    <a class="form__link" href="{{link.href}}">
        {{link.title}}
    </a>
    </form>
`