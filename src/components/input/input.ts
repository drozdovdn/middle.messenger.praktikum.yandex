import Block from '../../utils/block';
import './input.less';

type DataProps = {
  type?: string;
  name?: string;
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
    super('input', { ...props, className: ['input'] });
    if (props.name) {
      this._element.setAttribute('name', props.name);
    }
    if (props.type) {
      this._element.setAttribute('type', props.type);
    }
    this._element.setAttribute('required', 'required');
  }
}
