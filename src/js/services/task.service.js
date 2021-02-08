import {firebase} from '../util/firebase';

const taskRef = firebase.firestore().collection('tasks');

const getUser = () => {
  const user = firebase.auth().currentUser;
  if(!user) {
    throw alert('You are not logged in!');
  }
  return user;
}

const getAllTasks = () => {
  const user = getUser();
  return taskRef.where('user','==',user.uid).get();
}

const addTask = task => {
  const user = getUser();
  return taskRef.add({
    ...task,
    user: user.uid,
    createdDate:  firebase.firestore.Timestamp.fromDate(new Date())
  });
}

const resolveTask = taskId => {
  console.log({taskId});
  
  return firebase.firestore().runTransaction(txn => {
    const currentTaskRef = taskRef.doc(taskId);
    return txn
        .get(currentTaskRef)
        .then(() => {
          txn.update(currentTaskRef,{ resolved: true });
          // txn.update(taskRef.doc(user.id),{resolved: true });
          return Promise.resolve(true);
        });
  });
}

const tasksService = {
  getAllTasks,
  addTask,
  resolveTask
};

export default tasksService;
