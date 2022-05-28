import Block from './block';

/**
 * Сначала заменяет компоненты на заглушки,
 * после меняет обратно заглушки на элементы
 * @param templater
 * @param tmpl
 * @param props
 */
export const compile = (templater: (tmpl: string, p: any) => string, tmpl: string, props: any): DocumentFragment => {
  const fragment = document.createElement('template');
  const components: Record<string, Block> = {};
  //Вставляем заглушку вместо элемента
  Object.entries(props).forEach(([name, value]) => {
    //Если это массив, то проходимся по всем элементам массива
    if (Array.isArray(value)) {
      props[name] = value.map((item) => {
        Object.entries(item).map(([key, val]) => {
          if (val instanceof Block) {
            components[val.id] = val;
            item[key] = `<div id="id-${val.id}"></div>`;
          }
        });
        return item;
      });
    }
    if (value instanceof Block) {
      components[value.id] = value;
      props[name] = `<div id="id-${value.id}"></div>`;
    }
  });

  fragment.innerHTML = templater(tmpl, props);
  //Заменяем заглушки обратно на элементы
  Object.entries(components).forEach(([id, component]) => {
    const stub = fragment.content.querySelector(`#id-${id}`);
    if (!stub) {
      return;
    }
    stub.replaceWith(component.getContent());
  });

  return fragment.content;
};
