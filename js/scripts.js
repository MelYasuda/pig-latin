// Business logic
var sentence="pig letin translator";

var vowels=["a","e","i","o","u"]
var array=sentence.split(" ");
alert(array);
//var a=0;
for(var i=0;i<array.length;i++){// say
  // alert(array[i]);
  for (var j=0;j<vowels.length;j++){//
    //  alert(array[i].toString());
    //  alert(i+"  times:"+array[i]);

    // if(array[i].slice(0,1).includes(vowels[j]) ){
    // array[i]=array[i].replace(vowels[j]," ")+vowels[j]+"way";
    // alert("first letter"+array[i]);
    //   break;
    // };
    //
    // if(array[i].slice(0,1).includes(vowels[j])) {
    //
    //   array[i]=array[i].replace(array[i].slice(0,array[i].indexOf(vowels[j]))," ")+
    //
    //                       array[i].slice(0,array[i].indexOf(vowels[j]))+"ay";
    //                       alert("others"+array[i]);
    //  break;
    //   //array[i]=array[i].replace(vowels[j]," ")+vowels[j]+"way";
    // };


      checkPig(array[i],vowels[j]);

    }
    alert(array);
  }

//function

function checkPig(a,b) {

  if(a.slice(0,1).includes(b) ){
a=a.replace(b," ")+b+"way";
//  alert("first letter"+a);

  }else {
    a=a.replace(a.slice(0,a.indexOf(b))," ")+
                        a.slice(0,a.indexOf(b))+"ay";
                      //  alert("others"+a);

    //array[i]=array[i].replace(vowels[j]," ")+vowels[j]+"way";
  };

return  a;

}







alert("the word changed, it is"+checkPig("pig","i"));
alert("the array changed, it is"+array);

//alert("the loop runs :"+a);



// for (var index = 0; index < sentence.length; index += 1){
// var sentence = sentence.replace("a", "-").replace("i", "-").replace("o", "-").replace("u", "-").replace("e", "-");
// }
//  alert(sentence);







// $(document).ready(function(){
//   $("form#sentenceForm").submit(function(event){
//     event.preventDefault();
//     var sentence = $("#sentence").val();
//
//     for (var index = 0; index < sentence.length; index += 1){
//     var sentence = sentence.replace("a", "-").replace("i", "-").replace("o", "-").replace("u", "-").replace("e", "-");
//     }
//
//     $("#result").append(" '"+ sentence + "'");
//   });
// });
