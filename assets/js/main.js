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
    firebase.database().ref('Clubs/' + addClubName).set(newClubToAddToDB);
}

function updateDBDeleteClub() {
    event.preventDefault();
    const removeClub = $('#remove').val();
    // if (removeClub === firebase.database().ref('Clubs/' + 'oi')) {
        
    // }
}

submitButton.addEventListener("click", updateDBAddNewClub);
// submitButtonDelete.addEventListener("click", updateDBDeleteClub);