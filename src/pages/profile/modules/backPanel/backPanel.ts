import './backPanel.pcss';
import {compile} from "../../../../templater";
import {backPanelTmpl} from "./backPanel.tmpl";
import {FunProps} from "../../../../models";

const backPanelContext = {
    link: {
        href: '#chat',
        name: 'Назад'
    }
}

export const BackPanel:FunProps = () => {
    return compile(backPanelTmpl, backPanelContext)
}