let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Les presento mi vida resumida en esta pequeña pagina.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
