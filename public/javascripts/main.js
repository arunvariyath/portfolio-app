async function getVideoTitle(videoId) {
  var url = 'https://www.youtube.com/watch?v=' + videoId;
  var title;
  await $.getJSON('https://noembed.com/embed',
    { format: 'json', url: url }, function (data) {
      title = data.title;
    })
  return title;
}
(function () {
  "use strict";
  /**
     * Easy selector helper function
     */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function (e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function () {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
     * Hero type effect
     */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  const ageSpan = select('#ageSpan')
  const dobSpan = select('#dobSpan')
  if (ageSpan && dobSpan) {
    let dob = dobSpan.textContent
    var mydate = new Date(dob);
    ageSpan.textContent = _calculateAge(mydate);
  }

})()
function submitContactMe() {
  alert('Submitted!')
  window.location.href = "/home"
}
function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


$(document).on("click", ".video-holder", function () {
  var poemId = $(this).data('id');
  getVideoTitle(poemId).then(data => $("#popupTitle").text(data));
  // to add custom close button
  // getVideoTitle(poemId).then(data => $("#popupTitle").html(data+'<span class="badge badge-danger" data-bs-dismiss="modal">X</span>'));
  $("#VideoFrame").attr('src', 'https://www.youtube.com/embed/' + poemId + '?autoplay=1');
});


$("#VideoModal").on('hidden.bs.modal', function (e) {
  $("#VideoFrame").attr("src", '#');
});


// const elment = document.querySelector('.navbar-nav');
// const elment1 = document.querySelector('.nav-link');

// elment1.addEventListener("click", () => {
//   elment.classList.toggle('active');
//   elment1.classList.toggle('active');
// })

// document.querySelector('.navbar-nav .nav-item .nav-link').addEventListener("click", () => {
//   this.classList.toggle('active');
//   document.querySelector('.navbar-nav .nav-item .nav-link').classList.toggle('active');
// })