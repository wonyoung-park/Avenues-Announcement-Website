let database = firebase.database().ref();

// function updateDBDeleteClub() {
//     event.preventDefault();
//     const removeClub = $('#remove').val();
//     removeClubForm.style.display = "none";
//     var listRef = database.child("Clubs");
//     var query = listRef.orderByChild("clubName").equalTo(removeClub);
//         query.once("value", function(snapshot) {
//             snapshot.forEach(function(itemSnapshot) {
//                 listRef.child(removeClub).remove()
//    }); 
// });
//     //database.child('Clubs').child('asdf').remove();
// }

function showClub(){
    let phi = firebase.database().ref('Clubs/');
    console.log(phi);
}

showClub();