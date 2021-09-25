const handlePageScroll = () => {
  const $header = document.querySelector('.header')
  const isScrollAfterHeader = window.scrollY >= 70

  const setHeaderBackground = isScrollAfterHeader
    ? $header.classList.add('header--background')
    : $header.classList.remove('header--background')
}

window.addEventListener('scroll', handlePageScroll)