import './itemControl.pcss';
import {compile} from "../../templater";
import {itemControlTmpl} from "./itemControl.tmpl";

type DataProps = {
    title: string,
    className?: string
}

type ItemControlProps = (data: DataProps) => string

export const ItemControl: ItemControlProps = ({
                                title,
                                className = ''
}) => {
    return compile(itemControlTmpl, {title, className})
}