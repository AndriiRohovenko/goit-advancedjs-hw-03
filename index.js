import{i as u,S as f}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",g="49355059-ef28fa3d6cd8d2c420ac797e4";function h(o){const s={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(s).toString(),n=`${p}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){const r="❌ Sorry, there are no images matching your search query. Please try again!";throw c(r),new Error(r)}return e.hits}).catch(e=>console.error("Error fetching data:",e))}function c(o){u.show({title:"",message:o,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const l=document.querySelector(".gallery"),d={captionsData:"alt",captionDelay:250},m=new f(".gallery a",d);function y(o){if(m.refresh(),!o||o.length===0){l.innerHTML="";return}const s=o.map(t=>`
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
  `).join("");l.innerHTML=s}const w=document.getElementById("search-form");w.addEventListener("submit",L);const i=document.getElementById("loader");function L(o){o.preventDefault(),i.style.display="block";const s=o.currentTarget.elements.query.value;if(!s){c("The request cant be empty, please fill in the input value!"),i.style.display="none";return}h(s).then(t=>{console.log(t),i.style.display="none",y(t)})}
//# sourceMappingURL=index.js.map
