function $(selector){
  return document.querySelector(selector);
}
function $$(selector){
  return document.querySelectorAll(selector);
}

$('.container').addEventListener('click',function(e){
  console.log('container click in 捕获');
},true);

$('.box').addEventListener('click',function(e){
  console.log('box click in 捕获');
},true);

$('.target').addEventListener('click',function(e){
  console.log('target click in 捕获');
},true);

$('.container').addEventListener('click',function(e){
  console.log('container click in 冒泡');
},false);

$('.box').addEventListener('click',function(e){
  console.log('box click in 冒泡');
  e.stopPropagation();
},false);

$('.target').addEventListener('click',function(e){
  console.log('target click in 冒泡');
},false);