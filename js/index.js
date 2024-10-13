

// document.getElementById('btn').addEventListener('click',function(){
//     const textT = document.getElementById('textContainer');
//     const getText = textT.value;
//     const main=document.getElementById('main-container');

//     const p=document.createElement('p');
//     p.innerText=getText;
//     main.appendChild(p);
//     textT.value='';

// })

//     document.getElementById('input-text').addEventListener('keyup',function(event){
//         const keyOpen= document.getElementById('input-text');
//         const textt= keyOpen.value;
//         const text = document.getElementById('btntwo');
//         if(textt === 'delete'){
//             text.removeAttribute('disabled');
//         }
//          else{
//             text.setAttribute('disabled',true);
//          }                   
//     })

    
    // document.getElementById('item-2').addEventListener('click',function(event){
    //     console.log(7);
    //     event.stopPropagation();
    // })

// document.getElementById('list-ul').addEventListener('click',function(){
//     console.log(100);
// })



const abc = document.getElementsByClassName('item');
for(const ab of abc){
    ab.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target)
    })
}