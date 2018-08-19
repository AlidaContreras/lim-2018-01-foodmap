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
        const cont = 0;
        cont ++
        viewSearch.innerHTML += `
        <div>
          <h3>${doc.data().name}</h3>
          <br>
          <!-- Modal Trigger -->
          <a class="waves-effect  btn modal-trigger" href="#modal1${cont}" >Ver mas</a>
          <!-- Modal Structure -->
          <div id="modal1${cont}" class="modal">
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
        
        `
      }
    });
  });
})

search.addEventListener('keyup', (event) => {
  db.collection("placesOfBarranco").get().then(function (querySnapshot) {
    viewSearch.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      doc.data() //is never undefined for query doc snapshots
      if (event.target.value == `${doc.data().otro}`) {
        
        viewSearch.innerHTML += `
        <div>
        <h3>${doc.data().name}</h3>
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
        `
      }
    });
  });
})
const allRestaurant = () => {
  db.collection("placesOfBarranco").get().then(function (querySnapshot) {
    viewSearch.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      doc.data() //is never undefined for query doc snapshots
        viewSearch.innerHTML += `
        <div>
        <h3>${doc.data().name}</h3>
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
    });
  });
}
allRestaurant();