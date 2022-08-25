const deleteBtn = document.querySelectorAll('.fa-trash span.deleted')
const item = document.querySelectorAll('.item span')
const itemCompleted = document.querySelectorAll('.item span.completed')


Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})

 function deleteItem(){
    // const itemText = this.parentNode.childNodes[1].innerText
    const element = document.getElementsByClassName('item')
    console.log(element.remove()); 
    // try{
    //     const response = await fetch('deleteItem', {
    //         method: 'put',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //           'itemFromJS': itemText
    //         })
    //       })
    //     const data = await response.json()
    //     console.log(data)
    //     location.reload()

    // }catch(err){
    //     console.log(err)
    // }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

const url = "https://api.quotable.io/random"
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quotes").innerHTML = data.content; 
    document.getElementById("author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 // Repeat generateQuote() every 10 seconds
setInterval(generateQuote() ,10000);
// //Note - 10000 milliseconds = 10
// console.log(generateQuote());
// generateQuote()
