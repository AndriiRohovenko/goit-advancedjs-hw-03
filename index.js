import{a as c,i as f,S as p}from"./assets/vendor-Dz-Xk4tS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const d="49355059-ef28fa3d6cd8d2c420ac797e4";function g(r){const s={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"},o=`?${new URLSearchParams(s).toString()}`;return c.get(o).then(e=>{if(!e.data.hits||e.data.hits.length===0){const t="❌ Sorry, there are no images matching your search query. Please try again!";throw u(t),new Error(t)}return e.data.hits}).catch(e=>console.error("Error fetching data:",e))}function u(r){f.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const l=document.querySelector(".gallery"),h={captionsData:"alt",captionDelay:250};function m(r){if(!r||r.length===0){l.innerHTML="";return}const s=r.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${o.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${o.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${o.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${o.downloads}</span></p>
      </div>
    </li>
  `).join("");l.innerHTML=s,new p(".gallery a",h).refresh()}const y=document.getElementById("search-form");y.addEventListener("submit",w);const i=document.getElementById("loader");function w(r){r.preventDefault(),i.style.display="block";const s=r.currentTarget.elements.query.value;if(!s){u("The request cant be empty, please fill in the input value!"),i.style.display="none";return}r.currentTarget.reset(),g(s).then(a=>{i.style.display="none",m(a)})}
//# sourceMappingURL=index.js.map
