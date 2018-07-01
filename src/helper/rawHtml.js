import hljs from './hljs';

export default _html => (_element) => {
  let html = _html;
  const element = _element;

  if (!html || html.replace(/ /ig, '') === '<p><br/></p>') {
    html = '';
  }

  element.innerHTML = html;
  hljs(element);
};