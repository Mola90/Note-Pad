var saveBtn = document.getElementById("save-notes-btn");
var noteTitle = document.getElementById("note-title");
var noteText = document.getElementById("text-area");


const postNote = (note)=>
fetch ("api/db",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
})
  .then((response)=> response.json())
  .then((data) => alert(data))
  .catch((error)=> console.log(error));

function submitNote (){
    var title = noteTitle.value;
    var note = noteText.value;

    var noteObject ={
        title : title,
        note: note,
    }

    //console.log();
    console.log("this is the captured title" + title);
    console.log( note);
    console.log( noteObject);

    //postNote(noteObject);


}

function getNotes() {
    fetch ("/api/db",{
        method: "GET",
        headers: {"Content-Type": "application/json",},
    })
    .then((response) => response.json())
    .then((data)=> data)// write code to go through data, make card. append card.
    .catch((error) => {
        console.error('Error:', error);
      });

}



window.onload = function() {
    //yourFunction();
};


saveBtn.addEventListener("click",submitNote);