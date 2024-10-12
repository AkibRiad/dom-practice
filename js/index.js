

document.getElementById('btn').addEventListener('click',function(){
    const textT = document.getElementById('textContainer');
    const getText = textT.value;
    const main=document.getElementById('main-container');

    const p=document.createElement('p');
    p.innerText=getText;
    main.appendChild(p);
    textT.value='';

})

    document.getElementById('input-text').addEventListener('keyup',function(event){
        const keyOpen= document.getElementById('input-text');
        const textt= keyOpen.value;
        const text = document.getElementById('btntwo');
        if(textt === 'delete'){
            text.removeAttribute('disabled');
        }
         else{
            text.setAttribute('disabled',true);
         }                                           

    })



