
const code = "#uploader.svelte-1fjm7re{display:none}.splash.svelte-1fjm7re{margin:auto;width:100%;max-width:480px;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.drop-handler.svelte-1fjm7re{width:100%;height:240px;border-radius:24px;display:flex;flex-direction:column;justify-content:center;align-items:center;border:4px dashed var(--primary-color);cursor:pointer;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)}.upload-instructions.svelte-1fjm7re{font-style:normal;margin-top:16px;font-size:0.8rem;font-weight:600;color:var(--primary-color)}.divider.svelte-1fjm7re{--divider-thicc:36px;position:relative;width:100%;border-bottom:1px solid var(--less-subtle-color);margin:var(--divider-thicc) 0}.divider.svelte-1fjm7re::after{position:absolute;content:\"or\";font-size:0.8rem;color:#999;line-height:var(--divider-thicc);width:calc(var(--divider-thicc) * 2);background-color:#FFF;top:calc(var(--divider-thicc) / -2);left:50%;margin-left:calc(-1 * var(--divider-thicc));text-align:center}.button.svelte-1fjm7re{width:100%;text-align:center;padding:24px;background-color:var(--primary-color);color:#FFF;font-weight:600;border-radius:24px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);