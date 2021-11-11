window.onload = () => {
  function $(el) {
    return document.querySelector(el);
  }
  const pageWrapper = $(".page-wrapper");
  if (
    !pageWrapper.classList.contains("page-wrapper-grey") &&
    location.pathname === "/signin"
  ) {
    pageWrapper.classList.add("page-wrapper-grey");
  }

  window.onclick = () => {
    if (
      !pageWrapper.classList.contains("page-wrapper-grey") &&
      location.pathname === "/signin"
    ) {
      pageWrapper.classList.add("page-wrapper-grey");
    }
  };
};
