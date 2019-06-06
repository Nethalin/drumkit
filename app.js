// Play drum by keyboard press

// Play music by mouse click

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 65){
    document.getElementById('clap').play();
    console.log('Hello')
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 83){
    document.getElementById('hihat').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 68){
    document.getElementById('kick').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 70){
    document.getElementById('openhat').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 71){
    document.getElementById('boom').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 72){
    document.getElementById('ride').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 74){
    document.getElementById('snare').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 75){
    document.getElementById('tom').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 76){
    document.getElementById('tink').play();
    }
  });