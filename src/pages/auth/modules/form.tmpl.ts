export const formTmpl = `
    <form class="form {{className}}">
    {{title}}
    {{input}}
    <div class="form__body">
    </div>
    <div class="form__button">
     {{button}}
    </div>
    <a class="form__link" href="{{link.href}}">
        {{link.title}}
    </a>
    </form>
`;
