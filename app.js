const db = firebase.firestore();
const speech = () => {// esta funcion es el codigo que sale en el error grandote
  let firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
}
speech();
const inputSearch = document.getElementById('inputSearch');

const viewData = () => {
  db.collection("placesOfBarranco").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
  });
}
// viewData();

const filterData = () => {
  // Create a reference to the cities collection
  var citiesRef = db.collection("placesOfBarranco");

  // Create a query against the collection.
  var query = citiesRef.where("name", "==", "Veggie Pizza");
  console.log(query);
}
filterData();

  inputSearch.addEventListener ('keyup', () => {
    filterData();
  })

