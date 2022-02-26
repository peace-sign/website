export {}
let svg = /*svg*/ `<svg 
  xmlns="http://www.w3.org/2000/svg" 
  height="32" 
  width="32" 
  viewBox="0 0 32 32">
  <text
    x="0"
    y="30"
    fill="#fff"
    font-size="42px">☮</text>
</svg>
`;
let blob = new Blob([svg], {
  type: 'image/svg+xml',
});
let url = URL.createObjectURL(blob);
let link = document.createElement('link');
link.rel = 'icon';
link.href = url;
document.head.appendChild(link);