const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let r=null,n=!0;t.addEventListener("click",(function(e){n&&(t.setAttribute("disabled","disabled"),n=!1,r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1e3))})),e.addEventListener("click",(function(e){clearInterval(r),n=!0,t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.29c7fb90.js.map