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
  constructor(props: DataProps) {
    super('input', { ...props, className: [props.className, 'input'] });
    if (!this.element) {
      return;
    }

    if (props.name) {
      this.element.setAttribute('name', props.name);
    }
    if (props.type) {
      this.element.setAttribute('type', props.type);
    }
    if (props.placeholder) {
      this.element.setAttribute('placeholder', props.placeholder);
    }
    if (props.value) {
      this.element.value = props.value;
    }
    if (props.disabled) {
      this.element.disabled = props.disabled;
    } else {
      this.element.disabled = false;
    }
    this.element.setAttribute('required', 'required');
  }
}
