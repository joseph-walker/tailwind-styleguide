
const code = ".styleguide-section.svelte-pm61xa{display:flex}.left.svelte-pm61xa{width:var(--left-column-width);margin-right:var(--common-gutter);position:relative}.sticky.svelte-pm61xa{position:sticky;top:var(--common-gutter)}.right.svelte-pm61xa{flex:1}h2.svelte-pm61xa{font-size:2rem;font-weight:800}em.svelte-pm61xa{font-style:normal;color:#999}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);