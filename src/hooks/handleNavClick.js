export const handleNavClick = (e) => {
  e.preventDefault();
  var target = e.target.getAttribute("href").substring(2);
  const location = document.getElementById(target).offsetTop;
  window.scrollTo({
    left: 0,
    top: location - 65,
  });
};
