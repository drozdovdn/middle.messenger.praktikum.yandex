
export const errorTmpl = `
    <section class="error {{className}}">
        <h1 class="error__title">{{title}}</h1>
        <p class="error__desc">{{desc}}</p>
        <a class="error__link" href="{{link.href}}">
            {{link.title}}
        </a>
    </section>

`