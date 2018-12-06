// Get a reference to the database service
let database = firebase.database().ref();
//var ref = new Firebase("https://avenues-announcement.firebaseio.com");

//  * Updates the database with the username and message.
//  */




function updateDBAddNewClub(event){
    event.preventDefault();

    const addClubName = $('.addClubName').val();
    const addFacultyAdvisor = $('.addFacultyAdvisor').val();
    const addDay = $('.addDay').val();
    const addTime = $('.addTime').val();
    const addRoom = $('.addRoom').val();
    const addClubDescription = $('.addClubDescription').val();

    const newClubToAddToDB = {
        clubName: addClubName,
        facultyAdvisor: addFacultyAdvisor,
        Day: addDay,
        Time: addTime,
        Room: addRoom,
        clubDescription: addClubDescription
    };
    firebase.database().ref('Clubs/' + addClubName).set(newClubToAddToDB);
    let addClubForm = $(".form");
    
    
        
}

function updateDBDeleteClub() {
    event.preventDefault();

    $(".form").css("display","none");
    var listRef = database.child("Clubs");
    var query = listRef.orderByChild("clubName").equalTo(removeClub);
        query.once("value", function(snapshot) {
            snapshot.forEach(function(itemSnapshot) {
                listRef.child(removeClub).remove()
   }); 
});
    firebase.database().ref('Clubs/').orderByChild("clubName");
    // database.child('Clubs').child('asdf').remove();
}

let submitButton = document.getElementsByClassName("submit_button");
let submitButtonDelete = document.getElementsByClassName("submit_button_delete");

for (let i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener("click", updateDBAddNewClub);
    
}

for (let i = 0; i < submitButtonDelete.length; i++) {
    submitButtonDelete[i].addEventListener("click", updateDBDeleteClub);
    console.log("HIIIII");
}
