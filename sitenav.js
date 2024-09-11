const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

document.addEventListener('mouseenter', () => {
    site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    var x = e.clientX;
    var y = e.clientY;

    // Set the position of the custom cursor
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

// Optional code to prevent the custom cursor from disappearing while scrolling
window.addEventListener('scroll', function() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    window.scrollTo(scrollX, scrollY);
});

document.addEventListener('mousemove', TrackCursor);
document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
    const w = site_wide_cursor.clientWidth;
    const h = site_wide_cursor.clientHeight;

    site_wide_cursor.style.transform = 
        `translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
}

// Box Bound Cursors
const boxes = document.querySelectorAll('.boxes .box');

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const cursor = box.querySelector('.custom-cursor');

    box.addEventListener('mouseenter', () => {
        site_wide_cursor.style.display = 'none';
    });
    
    box.addEventListener('mouseleave', () => {
        site_wide_cursor.style.display = 'block';
    });
    
    document.addEventListener('mousemove', TrackBoxCursor.bind(box));
    document.addEventListener('mousedown', () => cursor.classList.add('active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));
}

function TrackBoxCursor (evt) {
    console.log(this);
    const box = this;
}
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
  }
  window.onscroll = function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
