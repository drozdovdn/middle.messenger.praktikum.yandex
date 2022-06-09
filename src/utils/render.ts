import Block from './block';

export const render = (query: string, block: Block) => {
  const root = document.querySelector(query);
  if (!root) {
    return;
  }
  root.appendChild(block.getContent() as Node);

  return root;
};
