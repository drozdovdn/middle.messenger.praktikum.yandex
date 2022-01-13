import {compile} from "../../templater";
import {titleTmpl} from "./title.tmpl";
import './title.pcss';

export const Title = (title: string) => {
    return compile(titleTmpl, {title})
}