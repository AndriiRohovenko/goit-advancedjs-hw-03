(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i="https://pixabay.com/api/",a="49355059-ef28fa3d6cd8d2c420ac797e4";function u(n){const o=new URLSearchParams(n).toString(),s=`${i}?${o}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{if(!r.hits||r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.hits}).catch(r=>console.error("Error fetching data:",r))}const l=document.getElementById("search-form");l.addEventListener("submit",f);function f(n){n.preventDefault();const o=n.currentTarget.elements.query.value;console.log(o);const r=u({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).then(e=>{console.log(e)});console.log(r)}
//# sourceMappingURL=index.js.map
