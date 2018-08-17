const db = firebase.firestore();
const speech = () => {// esta funcion es el codigo que sale en el error grandote
	let firestore = firebase.firestore();
	const settings = { timestampsInSnapshots: true };
	firestore.settings(settings);
}
const readData = () => {
  speech();
  db.collection("placesOfBarranco").onSnapshot((querySnapshot) => {
    console.log(querySnapshot._snapshot.query.path.segments[0]);	//
    // boxPosteado.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.data().place}`);
      
    //   // const collectionName = querySnapshot._snapshot.query.path.segments[0];
    });
  })
}
readData();

console.log();
