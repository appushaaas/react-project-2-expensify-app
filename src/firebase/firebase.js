  

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAtCSod3F99kTNWkb611rCSp_gX1byY3yc",
    authDomain: "expensify-25f54.firebaseapp.com",
    databaseURL: "https://expensify-25f54.firebaseio.com",
    projectId: "expensify-25f54",
    storageBucket: "expensify-25f54.appspot.com",
    messagingSenderId: "960098144370"
  };
  firebase.initializeApp(config);
  
  const database = firebase.database();
  export { firebase, database as default }; 

//   database.ref('expenses').push({
//       description:'Rent',
//       note:'',
//       amount:109500,
//       createdAt:6354675869
//   });

//  database.ref('expenses').push({
//     description:'Phone bill',
//     note:'',
//     amount:9500,
//     createdAt:3465711456
// });


// database.ref('expenses').push({
//     description:'Food',
//     note:'',
//     amount:1600,
//     createdAt:22134469012
// });
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//           });
//       });
      
//     console.log(expenses);
 
//     });
    
    // database.ref('expenses').on('value', (snapshot) => {
    //   const expenses = [];
    //   snapshot.forEach((childSnapshot) => {
    //       expenses.push({
    //          id: childSnapshot.key,
    //          ...childSnapshot.val()
    //       });
    //   });
      
    // console.log(expenses);
    // });
    
    

//     database.ref('expenses').on('child_removed', (snapshot) => {
//             console.log(snapshot.key, snapshot.val());
//     });
    

    
//     database.ref('expenses').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });

    
//     database.ref('expenses').on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });


    //.catch((e) => {
      //  console.log('Error in fetching data' , e);
 //  });
        

//   database.ref('notes/-LSDrjGTciIEMaGFrZxd').update({
//       title: 'To take food'
//   });

  
//   database.ref('notes/-LSDrtzBuFb2y8CahAjZ').remove();
//   database.ref('notes').push({
//     title: 'To do',
//     subject: 'Go for a run'
// });
// database.ref('notes').push({
//     title: 'Main courses',
//     subject: 'React, Python, Angular'
// });


  

//   const notes = [{
//     body: 'This is my note',
//     id: 12
//   },{
//     body: 'This is my note',
//     id: 34
//   }];

//   database.ref('notes').set(notes);

//   const onValueChange = (snapshot) => {
//         console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().location.city}.`);
//        // console.log(snapshot.val());
//        }

   
//    database.ref().on('value', onValueChange);
//    setTimeout(() => {
//       database.ref('age').set(30);
//    });
//   const onValueChange =  database.ref().on('value', ,(e) => {
//        console.log('Error in fetching data', e);
//    });

//    setTimeout(() => {
//         database.ref('age').set(28);
//    },1500)
   
//    setTimeout(() => {
//     database.ref('age').set(29);
// },3500)
// setTimeout(() => {
//     database.ref().off(onValueChange);
// },5000)

// setTimeout(() => {
//     database.ref('age').set(30);
// },6500)
  //    database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    }).catch((e) => {
//       console.log('Error in fetching data' , e);
//    });



//   database.ref().set({
//       name: 'Andrew Mead',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'software developer',
//           company: 'Google'
//       },
//       isSingle: false,
//       location:{
//           city: 'Philadelphia',
//           country: 'United States'
//       }
//   }).then(() => {
//     console.log('Data is found!!');
//   }).catch((e) => {
//     console.log('This failed', e);
//   });

//   database.ref().update({
//      //job: 'Manager',
//      //'location/city': 'Boston'
//      stressLevel: 9,
//      'job/company': 'Amazon',
//      'location/country': 'Greece'
//   });


  //database.ref().set(null);
 // database.ref().set('This is my data');


//   database.ref('age').set(27);
//   database.ref('location/city').set('New York');

//   database.ref('attributes').set({
//       height: 123,
//       weight: 65

//   }).then(() => {
//       console.log('The second call set worked');
//   }).catch((e) => {
//      console.log('The second call didnt work at all!!');
//   });

 // console.log('I made a request to change the data');

  /*database.ref()
  .remove()
  .then(() => {
     console.log('Data is removed');
  }).catch((e) => {
     console.log('Data cannot be removed', e);
  });*/