function PopUp() {
  let Name = prompt("Enter a name for the Note:", "New Note");
  if (Name == null || Name == "") {
    alert("No Name was typed, Process Stopped");
    NoteName = "No";
  } else {
    NoteName = Name;
  }
}

function CreateNote() {
  PopUp();
  if (NoteName != "No") {
    const newNote = document.createElement("textarea");
    newNote.classList.add("TextInputs");
    document.body.appendChild(newNote);
    const newNoteName = document.createElement("label");
    newNoteName.classList.add("NameOFtextInputs");
    document.body.appendChild(newNoteName);
    newNoteName.innerHTML = NoteName;
    newNoteName.style.left = document
  }
}
