import Block from '../../utils/block';
import './input.less';

type DataProps = {
  type?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string[];
  required?: boolean;
  events?: {
    click?: (e?: Event) => void;
    change?: (e?: Event) => void;
    focus?: (e?: Event) => void;
    blur?: (e?: Event) => void;
  };
};
export class Input extends Block {
  constructor(props: DataProps) {
    super('input', { ...props, className: [props.className, 'input'] });
    if (props.name) {
      this._element.setAttribute('name', props.name);
    }
    if (props.type) {
      this._element.setAttribute('type', props.type);
    }
    if (props.placeholder) {
      this._element.setAttribute('placeholder', props.placeholder);
    }
    if (props.value) {
      this._element.value = props.value;
    }
    if (props.disabled) {
      this._element.disabled = props.disabled;
    }
    this._element.setAttribute('required', 'required');
  }
}
