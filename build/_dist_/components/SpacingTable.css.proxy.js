
const code = "em.svelte-1r8sx4m{font-style:normal}.table.svelte-1r8sx4m{display:grid;grid-template-columns:1fr 1fr 6fr;align-items:stretch}@media(max-width: 768px){.table.svelte-1r8sx4m{grid-template-columns:2fr 3fr 6fr}}.cell.svelte-1r8sx4m{display:flex;align-items:center;padding:4px 8px;border-bottom:1px solid var(--subtle-color)}.cell.svelte-1r8sx4m:nth-child(3n - 2){padding-left:0}.cell.svelte-1r8sx4m:nth-child(3n){padding-right:0}.heading.svelte-1r8sx4m{font-weight:600}.measurement.svelte-1r8sx4m{text-align:right}.cell.heading.svelte-1r8sx4m{border:none}.cell.measurement.svelte-1r8sx4m{justify-content:flex-end}.cell.slot.svelte-1r8sx4m{overflow:hidden}.unit.svelte-1r8sx4m{font-size:0.8rem;color:#999;display:inline-block;padding-left:4px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);