import {compile} from "../../templater";
import { inputProfileTmpl } from "./inputProfile.tmpl";
import './inputProfile.pcss'

type DataProps = {
    name: string,
    label: string,
    value: string,
    type?: string
    disabled?: string
}

type InputProfileProps = (data: DataProps) => string

export const InputProfile: InputProfileProps = ({
                                name,
                                label,
                                value,
                                type = 'text',
                                disabled = 'disabled'
                             }) => {
    return compile(inputProfileTmpl, {
        name,
        label,
        value,
        type,
        disabled,
    })
}