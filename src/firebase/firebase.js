import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').push({
//     description: 'coffee',
//     note: '',
//     amount: 350,
//     createdAt: 5
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// const expenses = [
//     {
//         description: 'rent',
//         note: 'always need more money for this',
//         amount: 90000,
//         createdAt: 0
//     },
//     {
//         description: 'candy',
//         note: 'I WANT ...',
//         amount: 450,
//         createdAt: 10
//     },
//     {
//         description: 'coffee',
//         note: '',
//         amount: 350,
//         createdAt: 5
//     }
// ];

// expenses.forEach((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('notes/-L3Zbg3uDotR8CMGzooD').update({
//     body: 'buy food'
// });

// database.ref('notes').push({
//     title: 'course topics',
//     body: 'react-native, angular, python'
// });

// const firebaseNotes = {
//     notes: {
//         aasfsdaw: {
//             title: 'title',
//             body: 'note text'
//         },
//         piupjfsd: {
//             title: 'note one',
//             body: 'this is my note!'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '761ase',
//     title: 'another note',
//     body: 'This is also my note'
// }];

// database.ref('notes').set(firebaseNotes);

// const onValueChange = database.ref().on('value', (snapshot) => { 
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log('Error with data fetching:', e);
// });

// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }
// );

// database.ref().update({
//     name: 'Tom Signorello',
//     'job/title': 'Fried Bacon Engineer',
//     'job/company': 'Bit \'O Bacon'
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data:', e)
//     });

// database.ref().set({
//     name: 'Tom H',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Web Designer',
//         company: 'PARI Respiratory Equipment, Inc'
//     },
//     location: {
//         city: 'Richmond',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('isSingle Removed');
//     })
//     .catch((e) => {
//         console.log('removal error: ', e);
//     });