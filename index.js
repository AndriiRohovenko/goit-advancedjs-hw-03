import{i as u,S as f}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="49355059-ef28fa3d6cd8d2c420ac797e4";function h(o){const s={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"},r=new URLSearchParams(s).toString(),n=`${p}?${r}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){const t="❌ Sorry, there are no images matching your search query. Please try again!";throw c(t),new Error(t)}return e.hits}).catch(e=>console.error("Error fetching data:",e))}function c(o){u.show({title:"",message:o,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const l=document.querySelector(".gallery"),d={captionsData:"alt",captionDelay:250};function m(o){if(!o||o.length===0){l.innerHTML="";return}const s=o.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-image"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${r.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${r.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${r.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${r.downloads}</span></p>
      </div>
    </li>
  `).join("");l.innerHTML=s,new f(".gallery a",d)}const y=document.getElementById("search-form");y.addEventListener("submit",w);const i=document.getElementById("loader");function w(o){o.preventDefault(),i.style.display="block";const s=o.currentTarget.elements.query.value;if(!s){c("The request cant be empty, please fill in the input value!"),i.style.display="none";return}h(s).then(r=>{i.style.display="none",m(r)})}
//# sourceMappingURL=index.js.map
