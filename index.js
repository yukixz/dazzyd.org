// Particle Ground
window.addEventListener('DOMContentLoaded', function () {
  window.particleground(document.getElementById('particles'), {
    dotColor: 'rgba(255, 255, 255, 0.6)',
    lineColor: 'rgba(255, 255, 255, 0.1)',
    density: 20000,
    parallaxMultiplier: 20,
    particleRadius: 4
  })
}, false)
// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-77259235-2', 'auto');
ga('send', 'pageview');
