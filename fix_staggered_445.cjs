const fs = require('fs');
let code = fs.readFileSync('src/components/StaggeredMenu.tsx', 'utf8');

code = code.replace(
  /\{items && items\.length \? \(\s*items\.map\(\(it, idx\) => \(\s*<li className="sm-panel-itemWrap" key=\{it\.label \+ idx\}>\s*<a className="sm-panel-item" href=\{it\.link\} aria-label=\{it\.ariaLabel\} data-index=\{idx \+ 1\}>\s*<span className="sm-panel-itemLabel">\{it\.label\}<\/span>\s*<\/a>\s*<\/li>\s*\)\)\s*\)\}/,
  `{items && items.length > 0 ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a className="sm-panel-item" href={it.link} aria-label={it.ariaLabel} data-index={idx + 1}>
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (`
);

code = code.replace(
  /<li className="sm-panel-itemWrap" aria-hidden="true">\s*<span className="sm-panel-item">\s*<span className="sm-panel-itemLabel">No items<\/span>\s*<\/span>\s*<\/li>\s*\}\}/,
  `<li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}`
);

fs.writeFileSync('src/components/StaggeredMenu.tsx', code);
