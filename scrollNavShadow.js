const scrollNavShadow = () => {
  const $nav = document.querySelector('.header_nav');
  if (window.scrollY > 30) {
    $nav.classList.add('nav_shadow');
  } else if (window.scrollY < 30) {
    $nav.classList.remove('nav_shadow');
  }
};

window.addEventListener('scroll', scrollNavShadow);
// export default scrollNavShadow;
