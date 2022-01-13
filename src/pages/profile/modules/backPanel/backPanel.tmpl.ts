

export const backPanelTmpl = `
    <div class="back-panel">
        <div class="back-panel__wrapper-link">
            <img class="back-panel__icon" src="arrow_left.svg"/>
            <a class="back-panel__link" href="{{link.href}}">
                {{link.name}}
            </a>
        </div>
    </div> 
`;