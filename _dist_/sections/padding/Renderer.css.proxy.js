
const code = ".description.svelte-rgfx3y{margin-bottom:var(--common-gutter)}.swatch.svelte-rgfx3y,.swatch-fill.svelte-rgfx3y{width:32px;height:32px;border-top-left-radius:8px;border-bottom-left-radius:8px}.swatch.svelte-rgfx3y{box-sizing:content-box;background-color:var(--less-subtle-color)}.swatch-fill.svelte-rgfx3y{background-color:var(--primary-color)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);