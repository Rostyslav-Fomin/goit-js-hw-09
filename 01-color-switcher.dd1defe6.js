!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(n){timerId=setInterval(e,1e3),n.target.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(e){clearInterval(timerId),t.startBtn.disabled=!1,e.target.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.dd1defe6.js.map
