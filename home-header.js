// Loaded only by index.html. Menu opacity follows aria-expanded directly in CSS.
(() => {
  const header=document.querySelector('.home-overlay .site-header');
  if(!header)return;
  let scheduled=false;
  function sync(){
    header.classList.toggle('is-scrolled',window.scrollY>60);
    scheduled=false;
  }
  sync();
  requestAnimationFrame(()=>header.classList.add('header-ready'));
  window.addEventListener('scroll',()=>{
    if(!scheduled){scheduled=true;requestAnimationFrame(sync)}
  },{passive:true});
  window.addEventListener('pageshow',sync);
})();
