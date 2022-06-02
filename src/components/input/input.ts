import './input.less';
import Block from '../../utils/block';

type DataProps = {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
    change?: (e?: Event) => void;
    focus?: (e?: Event) => void;
    blur?: (e?: Event) => void;
  };
};
export class Input extends Block {
  el: HTMLInputElement;
  constructor(props: DataProps) {
    super('input', { ...props, className: [props.className, 'input'] });
    this.el = this.element as HTMLInputElement;

    if (!this.el) {
      return;
    }

    if (props.name) {
      this.el.setAttribute('name', props.name);
    }
    if (props.type) {
      this.el.setAttribute('type', props.type);
    }
    if (props.placeholder) {
      this.el.setAttribute('placeholder', props.placeholder);
    }
    if (props.value) {
      this.el.value = props.value;
    }
    if (props.disabled) {
      this.el.disabled = props.disabled;
    } else {
      this.el.disabled = false;
    }
    this.el.setAttribute('required', 'required');
  }
}
