(()=>{const e=document.querySelector(".button"),t=document.querySelector(".player"),n=document.querySelector(".board1"),d=document.querySelector(".board2");document.querySelector(".all");let l=!1,i=!1,o=!1,s=!0,c=[9,19,29,39,49,56,69,79,89,99],a=[0,10,20,30,40,50,60,70,80,90],r=[],u=[];for(let e=0;e<100;e++){const t=document.createElement("div");t.classList.add("cubeA",`cube${e}`),r[e]=t,n.appendChild(t)}console.log(r);for(let e=0;e<100;e++){const t=document.createElement("div");t.classList.add("cubeB",`cube${e}`),u[e]=t,d.appendChild(t)}n.addEventListener("mouseover",(e=>{e.target.style.backgroundColor="yellow"})),n.addEventListener("mouseout",(e=>{e.target.style.backgroundColor=""})),d.addEventListener("mouseover",(e=>{e.target.style.backgroundColor="red"})),d.addEventListener("mouseout",(e=>{e.target.style.backgroundColor=""}));let C=0,h=0;function m(n){if(i||"X"===n.target.textContent){if(1===h&&!n.target.hasChildNodes()){const l=document.createElement("div"),o=document.createElement("div");let s=u.indexOf(n.target);c.includes(s)&&!u[s-1].hasChildNodes()||u[s+1].hasChildNodes()&&!a.includes(s)?(u[s].appendChild(l),u[s-1].appendChild(o),i=!0,h=2):c.includes(s)&&u[s-1].hasChildNodes()||(a.includes(s)&&!u[s+1].hasChildNodes()?(u[s].appendChild(l),u[s+1].appendChild(o),i=!0,h=2):a.includes(s)&&u[s+1].hasChildNodes()||(u[s].appendChild(l),u[s+1].appendChild(o),i=!0,h=2)),2===h&&(l.textContent="Y",o.textContent="Y",l.classList.add("textY1"),o.classList.add("textY2"),t.textContent="begin",d.removeEventListener("click",m),e.addEventListener("click",p))}}else{const e=document.createElement("div");n.target.appendChild(e),e.textContent="Y",console.log(n.target),e.classList.add("textY"),i=!0,h=1,console.log(h)}}function p(){t.textContent="player1";const l=document.querySelector(".textX"),i=document.querySelector(".textX1"),c=document.querySelector(".textX2"),a=document.querySelector(".textY"),C=document.querySelector(".textY1"),h=document.querySelector(".textY2");l.style.visibility="hidden",i.style.visibility="hidden",c.style.visibility="hidden",a.style.visibility="hidden",C.style.visibility="hidden",h.style.visibility="hidden",e.disabled=!0,n.addEventListener("click",(function(e){t.textContent="player2",function(e,t,n,d){let l=r.indexOf(e.target);if(!1===d)if("X"!==e.target.textContent&&null!==e.target.textContent)e.target.textContent="O";else if("X"===e.target.textContent){const e=r[l].firstElementChild;console.log(e.className),e.style.visibility="visible"}}(e,0,0,o),o=!0,s=!1})),d.addEventListener("click",(function(e){t.textContent="player1",function(e,t,n){let d=u.indexOf(e.target);if(!1===n)if("Y"!==e.target.textContent&&null!==e.target.textContent)e.target.textContent="O";else if("Y"===e.target.textContent){const e=u[d].firstElementChild;console.log(e.className),e.style.visibility="visible"}}(e,0,s),s=!0,o=!1}))}n.addEventListener("click",(function e(i){if(0===C){const e=document.createElement("div");i.target.appendChild(e),e.textContent="X",console.log(i.target),e.classList.add("textX"),l=!0,C=1,console.log(C)}else if(1===C&&!i.target.hasChildNodes()){const o=document.createElement("div"),s=document.createElement("div");let u=r.indexOf(i.target);c.includes(u)&&!r[u-1].hasChildNodes()||r[u+1].hasChildNodes()&&!a.includes(u)?(r[u].appendChild(o),r[u-1].appendChild(s),l=!0,C=2):c.includes(u)&&r[u-1].hasChildNodes()||(a.includes(u)&&!r[u+1].hasChildNodes()?(r[u].appendChild(o),r[u+1].appendChild(s),l=!0,C=2):a.includes(u)&&r[u+1].hasChildNodes()||(r[u].appendChild(o),r[u+1].appendChild(s),l=!0,C=2)),2===C&&(o.textContent="X",s.textContent="X",o.classList.add("textX1"),s.classList.add("textX2"),t.textContent="player2",n.removeEventListener("click",e),d.addEventListener("click",m))}}))})();