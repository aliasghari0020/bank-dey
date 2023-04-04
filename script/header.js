let $slider = $ (".swiper")
const searchBox = () => {
  let $openBtn = $('.icon-searchbar');
  let $box = $('.seacrh-bar__header');
  let $input = $(".seacrh-bar__header input")
  $(document).mouseup((e) => {
    if (!$openBtn.is(e.target)
      && $openBtn.has(e.target).length === 0) {
      $openBtn.removeClass('none');
      $box.removeClass("active-search-bar");
      $slider.removeClass('zIndex')
    }
  });
  $('.searchbar__navbar').click(() => {
    $openBtn.addClass('none');
    $box.addClass("active-search-bar");
    $input.focus()
    $slider.addClass('zIndex')
  });
}
searchBox()


const sttickyMenu = () => {
  let header = document.querySelector('header');
  window.addEventListener('scroll', () => header.classList.toggle('fixed-navbar', window.scrollY > 300));
}

sttickyMenu()
const sideBarHandler = () => {
 
  let arrows = document.querySelectorAll(".arrow");
  let $sidebar = $(".sidebar");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    })
  })
  $(document).mouseup(() => {
    $sidebar.addClass('close')
    $slider.removeClass('zIndex')

  });
  $('.bx-menu').click(() => {
    $sidebar.removeClass('close')
    $slider.addClass('zIndex')
  });
  $('.sidebar').click(() => {
    $sidebar.removeClass('close')
    $slider.addClass('zIndex')
  });
 
}


sideBarHandler()






















