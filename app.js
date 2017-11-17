// start!
const express   = require('express');
const shortener = require('node-url-shortener');
const app       = module.exports = express();

 app.get('/:url', function(req,res){

   let url = req.params.url.toString().replace('www.','');

   if(url.includes("..") || url.includes(".")!==true){
     console.log('1');
     res.json({website:"error"})
   }
   else{
     console.log('2');
     if(url.includes('http://') || url.includes('https://')  ){
       console.log('3');
       url.replace('http://','www.')
       url.replace('https://','www.')
       console.log('condition'+ true);
      //  redundant code
       shortener.short(url, function(err,result){
       let short = result
       res.json({email:url, shortemail:short})
      })

     }
     else{
      //  redundant code
       shortener.short(url, function(err,result){
       let short = result
       res.json({email:url, shortemail:short})
      })
     }
   }


})

app.listen(8080,function(){
  console.log('working');
})

let x = "https://repl.it/repls/PlumSubmissiveXiaosaurus"



console.log("test "+x.includes('https')
);


//take url input

//shorten url

  //take url
  //make it functionally shorter
  //

// point to a lin


// console.log(url.includes('x'));
// // handle string
// if(url.includes("http"))
// {
//  console.log('long');
// // remove http /https from url
// //set value of url to be new value
// // run url shortener anr
// }
//
// else{
//  console.log('short');

// })}
