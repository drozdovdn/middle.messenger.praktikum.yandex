export const chatTmpl = `
    <div class="chat__list">
    <div class="chat__list-top">
    <div class="chat__block-top">
      <div class="chat__create">
        {{createChat}}
      </div>
      <div class="chat__wrapper-link">
        <img class="chat__link-icon" src="arrow_left.svg"/>
         {{link}}
      </div>
    </div>
    <div class="chat__search">
        {{search}}
    </div>
    </div>
    <div class="chat__list-items">
      {{messages}}
      {{#with chat.data_list}}
         <div class="chat__item">
            {{item}}
         </div>
        {{/with}}  
    </div>
    </div>
    <div class="wrapper__dialog">
      <span>Выбериите чат чтобы отправить сообщение</span>
    </div>
`;
