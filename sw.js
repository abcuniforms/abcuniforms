importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

const staticAssests = [
  './',
  './manifest.json',
  './css/main.css',
  './js/vendor/aos.js',
  './js/vendor/TweenMax.min.js',
  './js/animation.js',
  './js/navigation.js',
  './app.js',
  './img/logo/ABClogoWhite.png',
  './img/logo/logobg.jpg',
  './img/social/FBicon.png',
  './img/social/GMicon.png',
  './img/social/WAicon.png',
  './img/product.jpeg',
  './img/favicon.ico'
];


workbox.precaching.precacheAndRoute(staticAssests);
