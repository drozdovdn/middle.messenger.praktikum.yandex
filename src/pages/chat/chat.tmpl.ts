export const chatTmpl = `
    <div class="chat__list">
    <div class="chat__list-top">
    <div class="chat__wrapper-link">
        <img class="chat__link-icon" src="arrow_left.svg"/>
         {{link}}
    </div>
    <div class="chat__search">
        {{search}}
    </div>
    </div>
        {{#with chat.data_list}}
            <div class="chat__item">
                {{item}}
            </div>
        {{/with}}    
    </div>
    <div class="chat__dialog">
        {{header}}
        <div class="chat__dialog-content">
        
        </div>
        {{controlChat}}
    </div>
`;
