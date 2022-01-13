
export const profileTmpl = `
    <section class="profile">
      <div class="profile__left">
        {{backPanel}}
      </div>
      <div class="profile__right">
        <div class="profile__avatar">{{avatar}}</div>
          <div class="profile__settings">
           {{settings}}
          </div>
          <div class="profile__control">
           {{control}} 
          </div>   
      </div>
    </section>
  
`;