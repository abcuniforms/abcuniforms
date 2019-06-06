Element.prototype.setAttributes = function (attrs) {
  for (var idx in attrs) {
      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
      } else if (idx === 'html') {
          this.innerHTML = attrs[idx];
      } else {
          this.setAttribute(idx, attrs[idx]);
      }
  }
};


// SECTION ABOUT US


// SECTION OUR PRODUCTS
document.querySelector('.sec-ourproducts').setAttributes({
  "data-aos":"fade-up",
  "data-aos-ease":"ease-in",
  "data-aos-duration":"1000",
  "data-aos-once":"false",
  "data-aos-anchor":".sec-aboutus h1",
  "data-aos-anchor-placement":"top-top",
})

// SECTION FIND US
document.querySelector('.sec-findus').setAttributes({
  "data-aos":"fade-up",
  "data-aos-ease":"ease-in",
  "data-aos-duration":"1000",
  "data-aos-once":"false",
  "data-aos-anchor":".sec-ourproducts h1",
  "data-aos-anchor-placement":"top-top",
})

// SECTION CONTACT US
document.querySelector('.sec-contactus').setAttributes({
  "data-aos":"fade-up",
  "data-aos-ease":"ease-in",
  "data-aos-duration":"1000",
  "data-aos-once":"false",
  "data-aos-anchor":".sec-findus h1",
  "data-aos-anchor-placement":"top-top",
})