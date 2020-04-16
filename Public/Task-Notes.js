function getnotes(id)
{
    document.getElementById("notes").style.display = "block";
    document.getElementById('todoid').value = id
    let notelist = $("#notelist")
  fetchnote(id,function (notes){
    notelist.empty()
    for(note of notes){
        console.log(note)
    notelist.append(createnote(note))
    }
  })
  
 
}
 
function addNoteforTaskCard(){
    let id = document.getElementById('todoid').value
    let noteText = $('#noteText')
    addNoteforTask(
    id,
    noteText.val(),
    function (note) {
        location.reload(true)
    })
}

function createnote(note)
{
  return $(`
   <li>${note.text}</li>
  `
  )
}





