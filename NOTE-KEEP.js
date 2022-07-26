//navbar search icon
let search = document.getElementById("sea");
document.getElementById('sericon').addEventListener('click', function () {
    let sericon = document.getElementById('sericon');
    sericon.style.display = "none";
    search.style.display = "block";
});

let notes = localStorage.getItem("note");
if(notes!=null){
    showNote();
}

// adding notes
document.getElementById('addbtn').addEventListener("click", function () {
    let addtext = document.getElementById('addtext');
    let note = localStorage.getItem("note");

    if (note == null) {
        note = "[]";
    }

    //adding new

    note = JSON.parse(note);
    note.push(addtext.value);

    note = JSON.stringify(note);
    localStorage.setItem("note", note);
    addtext.value="";
    

    //showing notes
    showNote();
    
    
});

//function to show notes
function showNote(){
    let notearea=document.getElementById("notearea");
    let note = localStorage.getItem("note");
    if(note=="[]"){
        notearea.innerHTML="<p>Your Notes are shown here.</p>";
    }
    else{
        note = JSON.parse(note);
        console.log(note);
        let html=``;
    
        note.forEach(function(e,i){
            let delid=`${i+1}`;
            html +=`
            <div class="note">
            <h3>Note ${i+1}</h3>
                <p>${e}</p>
                <button id="${delid}" onclick="deletenote(this.id)" class="btn">Delete Note</button>
            </div>
            `;
        });
        notearea.innerHTML=html;
    }
}

//function to delete notes
function deletenote(e){
    let note=localStorage.getItem("note");
    note=JSON.parse(note);
    note.splice(e-1,1);
    note=JSON.stringify(note);
    localStorage.setItem("note",note);
    showNote();
};