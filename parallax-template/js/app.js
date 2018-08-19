const db = firebase.firestore();
const search = document.getElementById('search');
const selectType = document.getElementById('selectType');

const speech = () => {// esta funcion es el codigo que sale en el error grandote
  let firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
}
speech(); 

selectType.addEventListener('change', () => {
  db.collection("placesOfBarranco").get().then(function (querySnapshot) {
    viewSearch.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      doc.data() //is never undefined for query doc snapshots
      if (selectType.value == `${doc.data().type}`) {
        viewSearch.innerHTML += `
        </div>
        <br>
        <!-- Modal Trigger -->
        <a class="waves-effect  btn modal-trigger" href="${'#modal1'}" >Ver mas</a>
        <!-- Modal Structure -->
        <div id="${'modal1'}" class="${'modal'}">
          <div class="modal-content">
            <h4>${doc.data().name}</h4>
            <p>Tipo de Comida: ${doc.data().type}</p>
            <p>Lugar: ${doc.data().place}</p>
            <p>Direcccion: ${doc.data().address}</p>
            <p>Tipo de pago: ${doc.data().pay}</p>
            
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">¡Gracias!</a>
          </div>
        </div>
        `
      }
    });
  });
})

search.addEventListener('keyup', () => {
  db.collection("placesOfBarranco").get().then(function (querySnapshot) {
    viewSearch.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      doc.data() //is never undefined for query doc snapshots
      if (selectType.value == `${doc.data().type}`) {
        viewSearch.innerHTML += `
        </div>
        <br>
        <!-- Modal Trigger -->
        <a class="waves-effect  btn modal-trigger" href="${'#modal1'}" >Ver mas</a>
        <!-- Modal Structure -->
        <div id="${'modal1'}" class="${'modal'}">
          <div class="modal-content">
            <h4>${doc.data().name}</h4>
            <p>Tipo de Comida: ${doc.data().type}</p>
            <p>Lugar: ${doc.data().place}</p>
            <p>Direcccion: ${doc.data().address}</p>
            <p>Tipo de pago: ${doc.data().pay}</p>
            
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">¡Gracias!</a>
          </div>
        </div>
        `
      }
    });
  });
})


const filterData = () => {
  db.collection("placesOfBarranco").where("name", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
// filterData();


inputSearch.addEventListener('keyup', () => {debugger
  filterData();
})

// Create a reference to the cities collection
  // var citiesRef = db.collection("placesOfBarranco");

  // // Create a query against the collection.
  // var query = citiesRef.where("name", "==", "");
  // console.log(query);