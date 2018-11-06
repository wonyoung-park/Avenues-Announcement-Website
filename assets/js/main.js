// Get a reference to the database service
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */

let clubsRef = firebase.database().ref("clubs/");

clubsRef.set({

});


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

    console.log(newClubToAddToDB.clubName);
    //Update database here
    database.push(newClubToAddToDB);
}

function updateDBDeleteClub() {
    event.preventDefault();
    
    
}

addClubButton.addEventListener("click", updateDBAddNewClub);
removeClubButton.addEventListener("click", updateDBDeleteClub);