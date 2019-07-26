export const createProject = (project) => {
    // without thunk we'd have returned action i.e. plain JS object as below:
    /*return {
        type: 'ADD_PROJECT',
        project
    }*/

    // With thunk, we return a function instead
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make AJAX call here
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_PROJECT',
                project
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', 
                err
            });
        });        
    }
};