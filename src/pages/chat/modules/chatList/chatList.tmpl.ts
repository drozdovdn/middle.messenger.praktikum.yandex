export const ChatListTmpl = `
  <div>
  {{messages}}
  </div>
  {{#with data_list}}
         <div class="chat__item">
            {{item}}
         </div>
  {{/with}}  
`;
