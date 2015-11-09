window.onload = function(){
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var source = document.getElementById('source');
  source.addEventListener('keypress', function(event){
    if (event.keyCode == 13) {
      document.getElementById('add').click();
    }
  });
  add.addEventListener("click",function(event){
    var list = document.getElementById('list');
    var source = document.getElementById('source');
    var lastIndex = list.childNodes.length;
    var element = document.createElement("li");
    var image = document.createElement("img");
    var text = document.createElement("label");
    image.src = "https://unsplash.it/50?image="+lastIndex;
    text.innerHTML = source.value;
    source.value = "";
    element.appendChild(text);
    element.appendChild(image);
    list.appendChild(element);
  });
  remove.addEventListener("click",function(event){
    var list = document.getElementById('list');
    var lastIndex = list.childNodes.length;
    if (lastIndex > 0) {
      list.removeChild(list.childNodes[lastIndex-1]);
    }
  });

};
