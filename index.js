import{a as c,i as u,S as f}from"./assets/vendor-Dz-Xk4tS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();c.defaults.baseURL="https://pixabay.com/api/";const d="49355059-ef28fa3d6cd8d2c420ac797e4";async function g(r){const s={params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}},a=(await c.get("",s)).data.hits;try{if(!a||a.length===0){const t="❌ Sorry, there are no images matching your search query. Please try again!";throw p(t),new Error(t)}return a}catch{throw console.error("Error fetching data:",error),error}}function p(r){u.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const l=document.querySelector(".gallery"),h={captionsData:"alt",captionDelay:250};function m(r){if(!r||r.length===0){l.innerHTML="";return}const s=r.map(t=>`
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
  `).join("");l.innerHTML=s,new f(".gallery a",h).refresh()}const y=document.getElementById("search-form");y.addEventListener("submit",w);const i=document.getElementById("loader");function w(r){r.preventDefault(),i.style.display="block";const s=r.currentTarget.elements.query.value;if(!s){p("The request cant be empty, please fill in the input value!"),i.style.display="none";return}r.currentTarget.reset(),g(s).then(a=>{i.style.display="none",m(a)})}
//# sourceMappingURL=index.js.map
