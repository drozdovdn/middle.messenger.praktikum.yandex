import {compile} from "../../templater";
import {buttonTmpl} from './button.tmpl';
import './button.pcss';

type DataType = {
    name: string,
    className?: string
}

type ButtonProps = (data: DataType) => string

export const Button: ButtonProps = ({
                           name,
                           className = ''
}) => {
    return compile(buttonTmpl, {name, className})
}