import{S as c}from"./assets/vendor-D0gBiHs0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i="https://pixabay.com/api/",l="49355059-ef28fa3d6cd8d2c420ac797e4";function u(a){const t={key:l,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},n=new URLSearchParams(t).toString(),o=`${i}?${n}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.hits}).catch(e=>console.error("Error fetching data:",e))}const f=document.querySelector(".gallery");function h(a){const t=a.map(o=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      data-source="${o.largeImageURL}"
      alt="${o.tags}"
    />
  </a>
</li>
  `).join("");f.innerHTML=t;const n={captionsData:"alt",captionDelay:250};new c(".gallery-link",n)}const g=document.getElementById("search-form");g.addEventListener("submit",m);function m(a){a.preventDefault();const t=a.currentTarget.elements.query.value;u(t).then(n=>{console.log(n),h(n)})}
//# sourceMappingURL=index.js.map
