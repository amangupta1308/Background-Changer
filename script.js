function changeBG(color){
    document.body.style.backgroundColor = color;
    // Text gets hidden when color becomes black so changing the text-color
    let txt= document.getElementsByClassName("text");  //it is an array
    if(color=='black')
    {
        for(let elm of txt)  // as txt is an array, we will have to iterate like this
        {
            elm.style.color = 'white';
        }
    }
    else{
        for(let elm of txt)  // as txt is an array, we will have to iterate like this
        {
            elm.style.color = 'black';
        }
    }
}