// Get a reference to the database service
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */




function updateDBAddNewClub(event){
    event.preventDefault();

    const addClubName = $('#addClubName').val();
    const addFacultyAdvisor = $('#addFacultyAdvisor').val();
    const addDay = $('#addDay').val();
    const addTime = $('#addTime').val();
    const addRoom = $('#addRoom').val();
    const addClubDescription = $('#addClubDescription').val();

    const newClubToAddToDB = {
        clubName: addClubName,
        facultyAdvisor: addFacultyAdvisor,
        Day: addDay,
        Time: addTime,
        Room: addRoom,
        clubDescription: addClubDescription
    };
    firebase.database().ref('Clubs/' + addClubName).push(newClubToAddToDB);
    addClubForm.style.display = "none";
}

function updateDBDeleteClub() {
    event.preventDefault();
    const removeClub = $('#remove').val();
    var listRef = ref.child("Clubs");
    var query = listRef.orderByChild("clubName").equalTo(removeClub);
    query.once("value", function(snapshot) {
        snapshot.forEach(function(itemSnapshot) {
            itemSnapshot.ref.remove();
   }); 
});
    removeClubForm.style.display = "none";
}

submitButton.addEventListener("click", updateDBAddNewClub);
// submitButtonDelete.addEventListener("click", updateDBDeleteClub);