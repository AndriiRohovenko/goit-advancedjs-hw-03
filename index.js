import{i as c,S as l}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="49355059-ef28fa3d6cd8d2c420ac797e4";function g(o){const s={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(s).toString(),n=`${u}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){const r="Sorry, there are no images matching your search query. Please try again!";throw p(r),new Error(r)}return e.hits}).catch(e=>console.error("Error fetching data:",e))}function p(o){c.show({title:"Error:",message:o,backgroundColor:"red",titleColor:"white",messageColor:"white",position:"topRight"})}const i=document.querySelector(".gallery"),h={captionsData:"alt",captionDelay:250},m=new l(".gallery a",h);function d(o){if(m.refresh(),!o||o.length===0){i.innerHTML="";return}const s=o.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${t.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${t.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${t.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${t.downloads}</span></p>
      </div>
    </li>
  `).join("");i.insertAdjacentHTML("beforeend",s)}const y=document.getElementById("search-form");y.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.currentTarget.elements.query.value;g(s).then(t=>{console.log(t),d(t)})}
//# sourceMappingURL=index.js.map
