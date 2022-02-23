export const formTmpl = `
    {{title}}
    <div class="form__body">
     {{#with data}}
           <div class="form__input">{{input}}</div>
     {{/with}}
    </div>
    <div class="form__button">
     {{button}}
    </div>
    <div class="from__wrapper-link">
    {{link}}
    </div>
    
`;
