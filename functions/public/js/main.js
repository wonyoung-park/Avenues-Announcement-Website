// Get a reference to the database service
let database = firebase.database();
//var ref = new Firebase("https://avenues-announcement.firebaseio.com");

//  * Updates the database with the username and message.
//  */

// Retrieve Club Data Function
// const clubsRef = database.ref('Clubs');
// clubsRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       const childData = childSnapshot.val();
//       console.log(childData);
//     });
// });


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
    // var letter = addClubName.charAt(0);
    // firebase.database().ref('Clubs/').push(letter);
    // firebase.database().ref('Clubs/' + letter + '/' + addClubName).push(newClubToAddToDB);
    

    // what was orginally here
    firebase.database().ref('Clubs/' + addClubName).push(newClubToAddToDB);
    firebase.database().ref('Clubs').orderByChild('clubName');
    let addClubForm = $(".form");
    
    // addClubForm.css("display", "none");
        
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
}






