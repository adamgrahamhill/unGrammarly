
unGrammarly.js



/* MOST RECENT V3 
   The saga to keep grammarly code out of email continues...
*/

function removeGrammarly()
{
  
  var emailBody = document.getElementsByClassName('show-dynamic')[0];
    var b = emailBody.childNodes;

    for (var i = b.length - 1; i >= 0; i--){

       if (!(b[i].hasAttribute('sh-section')))
          {
             b[i].remove();
          }
    };

    b = emailBody.getElementsByClassName('_1BN1N');
    for (var i = b.length - 1; i >= 0; i--){
             b[i].remove();      
    };
}







/*
Grammarly appears to add its own elements as children inside the html body (divs, <grammarly-card>, spans). The SharpSpring code has the body of the email in a div with the property of sh-section, which can be used to differentiate it from Grammarly's additions.

The function below collects all the direct children of the <body> and removes any that don't have the sh-section attribute.
*/



/* v1, works if you save the email code and open the document in the browser. */

function removeGrammarly()
{
	
	var body = document.getElementsByTagName('body');
    var b = body[0].childNodes;

    for (var i = b.length - 1; i >= 0; i--){

       if (!(b[i].hasAttribute('sh-section')))
          {
             b[i].remove();
          }
    };
}



/* v2, Can run in the email editor. uses the show-dynamic class to target the body of the email. v1 would grab the body of the editor itself as well ;-; */


function removeGrammarly()
{
	
	var emailBody = document.getElementsByClassName('show-dynamic')[0];
    var b = emailBody.childNodes;

    for (var i = b.length - 1; i >= 0; i--){

       if (!(b[i].hasAttribute('sh-section')))
          {
             b[i].remove();
          }
    };
}



/* v3 Seems to remove everything in tested emails so far.

!!!! To be able to run from console in email editor, email must be inspected first. Otherwise it doesn't seem to access the iframe with the html that needs to be targetted.
 */

function removeGrammarly()
{
  
  var emailBody = document.getElementsByClassName('show-dynamic')[0];
    var b = emailBody.childNodes;

    for (var i = b.length - 1; i >= 0; i--){

       if (!(b[i].hasAttribute('sh-section')))
          {
             b[i].remove();
          }
    };

    b = emailBody.getElementsByClassName('_1BN1N');
    for (var i = b.length - 1; i >= 0; i--){
             b[i].remove();      
    };
}
