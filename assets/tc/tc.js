const button=document.querySelectorAll(".card-item"); //miultiple buttons with same class

button.forEach(button => {
    const buttonID=button.id;
    const parentClass=button.parentNode.className;
    button.addEventListener("click",()=>{
      parentClass.childNode.remove();
        console.log(`button with ID '${buttonID}' was clicked`);
        console.log(` and with parent '${parentClass}' was clicked`);
    });
});
 