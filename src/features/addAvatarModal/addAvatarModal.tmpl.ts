export const addAvatarModalTmpl = `
    <div class="add-avatar-modal">
       <div class="add-avatar-modal__content">
       <span class="add-avatar-modal__error">{{error}}</span>
       <h3 class="add-avatar-modal__title">{{title}}</h3>
        <label class="add-avatar-modal__label">
            <span class="add-avatar-modal__name">{{name}}</span>
            {{input}}
        </label>
        <div class="add-avatar-modal__button">
            {{button}}
            <span class="add-avatar-modal__warning">{{warning}}</span>
        </div>
        </div>
    <div>
`;
