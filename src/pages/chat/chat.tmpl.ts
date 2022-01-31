export const chatTmpl = `
    <section class="chat">
    <div class="chat__list">
        {{#with data_list}}
            <div class="chat__item">
                {{item}}
            </div>
        {{/with}}    
    </div>
    <div class="chat__dialog">
    
    </div>
    </section>
`;
