module.exports =
  `const root = document.querySelector("#root");
  let commandDown = !1;
  const listenerKeys = [17, 91], OPEN_KEY = "__open-stack-frame-in-editor-handle";
  window.addEventListener("keydown", t => {
    const { keyCode: e } = t;
    listenerKeys.find(t => t === e) && (commandDown = !0)
  }),
    window.addEventListener("keyup", t => {
      const { keyCode: e } = t; listenerKeys.find(t => t === e) && (commandDown = !1)
    }),
    root.addEventListener("click", t => {
      t.stopPropagation();
      const { path: e } = t, n = e.find(t => t.getAttribute && t.getAttribute("launch-stack-path"));
      if (n) {
        const t = n.getAttribute("launch-stack-path"),
          e = n.getAttribute("launch-stack-line"),
          o = n.getAttribute("launch-stack-column");
        commandDown && fetch( (OPEN_KEY + "?fileName=" + t + "&lineNumber=" + e + "&colNumber=" + o));
        commandDown = !1
      }
    })`
