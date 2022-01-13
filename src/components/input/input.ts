import {compile} from "../../templater";
import {InputTmpl} from "./input.tmpl";
import './input.pcss';

type DataProps = {
    type: string,
    label: string,
    name: string,
    className?: string,
}

type InputProps = (data: DataProps) => string


export const Input: InputProps = ({
                                      type,
                                      label,
                                      className= '',
                                      name
}) => {

 return compile(InputTmpl, {
     label,
     className,
     type,
     name
 })
}