import './control.pcss';
import ItemControl from "../../../../components/itemControl";
import {compile} from "../../../../templater";
import {controlTmpl} from "./control.tmpl";
import {FunProps} from "../../../../models";


const controlContext = {
    data: [
        {
            item: ItemControl({title: 'Изменить данные', className: 'item-control__change-data'})
        },
        {
            item: ItemControl({title: 'Изменить пароль', className: 'item-control__change-password'})
        },
        {
            item: ItemControl({title: 'Выйти', className: 'item-control_red'})
        },
    ]
}

export const Control:FunProps = () => {
    return compile(controlTmpl, controlContext)
}