
/*$(document).ready(function(){
$("#hide").click(function(){
  $("p").hide();
});
$("#show").click(function(){
  $("p").show();
});
});*/
let url = document.URL;
console.log('hi');
console.log(url);

let url2 = window.document.URL;
console.log(url2);
console.log('1');

function remove(){
  $("p").hide();
  console.log('ready');
  $("h1").css('color' , 'red');
  $(".show").on("click", function(){
    alert("Working");
    //$("img").css('display' , 'none');
    //$(".logo").addClass('test');
    $(".show").first().addClass('hidden');
    $(".testp").addClass('testappear');
    console.log("pd");
  })
}
remove();

function showTheelements(){
$(".testp").on("click", function(){
  alert("2");
})
}
showTheelements();


/*
$(document).ready(function(){
  $("p").hide();
  console.log('ready');
  $("h1").css('color' , 'red');
  $(".show").on("click", function(){
    alert("Working");
    //$("img").css('display' , 'none');
    //$(".logo").addClass('test');
    $(".show").first().addClass('hidden');
    $(".testp").addClass('testappear');
    console.log("pd");
  })
})*/

/*$(document).ready(function(){
  $(".show").on("click", function(){
    alert("Second");
    $(".show").removeClass('hidden');
    console.log("success");
  })
})*/



/*$(".show").on("click", function(){
  console.log("red");
  $(".show").removeClass('hidden');
})*/


/*var question = prompt("How are you?");
console.log("hello");
if (question == 'good') {
  console.log('hehehe');
  var secondQuestion = prompt("Really?");
  if (secondQuestion == 'yep'){
    console.log("good")
  } else {
    console
  }
} else {
  console.log("I'm sorry!");
}*/




