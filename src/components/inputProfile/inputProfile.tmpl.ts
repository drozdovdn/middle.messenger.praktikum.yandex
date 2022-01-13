
export const inputProfileTmpl = `
    <label class="profile__label">
    <span class="profile__input__name">{{label}}</span>
    <input 
           {{disabled}}
           type="{{type}}"
           name="{{name}}"
           value="{{value}}"
           class="profile__input"     
            />
    </label>
`