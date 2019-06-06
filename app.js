window.addEventListener('load', async e => {

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('/sw.js', {scope: '/'})
      console.log('ServiceWorker Registered');
    } catch (error) {
      console.log('ServiceWorker Registration Failed');
    }
  }

});
