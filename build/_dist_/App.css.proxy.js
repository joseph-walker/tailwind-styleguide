
const code = "html, body{height:100%}body{padding:32px;font-size:16px;font-family:\"Raleway\", sans-serif;color:#333}:root{--common-gutter:32px;--left-column-width:320px;--section-margin:64px;--stacking-breakpoint:768px;--primary-color:#2a62f5;--subtle-color:#edf2f7;--less-subtle-color:#e2e8f0}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);