var theme1=document.querySelector("#t1");
theme1.style.transformOrigin="left top";
theme1.onmouseenter = function(e){
    console.log(e);
    theme1.classList.add('expanded');
    theme1.children[0].children[0].classList.add('cirexp');
    theme1.children[0].classList.add('anipla');
    toggleLayer("tiges");
};
theme1.onmouseleave = function() {
    theme1.classList.remove('expanded');
    theme1.children[0].children[0].classList.remove('cirexp');
    theme1.children[0].classList.remove('anipla');
    toggleLayer("tiges");
}

function toggleLayer(layerId) {
    var layer = document.getElementById(layerId);
    if (layer.style.display === 'none') {
      layer.style.display = 'block';
    } else {
      layer.style.display = 'none';
    }
  }