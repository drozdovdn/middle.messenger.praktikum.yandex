import Block from './block';

export const compile = (
  templater: (tmpl: string, p: any) => string,
  tmpl: string,
  props: any
): DocumentFragment => {
  const fragment = document.createElement('template');
  const components: Record<string, Block> = {};
  //Вставляем заглушку вместо элемента
  Object.entries(props).forEach(([name, value]) => {
    if (value instanceof Block) {
      components[value.id] = value;
      props[name] = `<div id="id-${value.id}"></div>`;
    }
  });

  fragment.innerHTML = templater(tmpl, props);
  console.log(templater(tmpl, props));
  console.log({ components });
  Object.entries(components).forEach(([id, component]) => {
    const stub = fragment.content.querySelector(`#id-${id}`);
    if (!stub) {
      return;
    }
    stub.replaceWith(component.getContent());
  });

  return fragment.content;
};
