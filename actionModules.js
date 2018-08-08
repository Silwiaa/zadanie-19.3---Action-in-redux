export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
    type: REMOVE_COMMENT,
    text: 'Remove my first comment'
    id: 1
}

const EDIT_COMMENT = 'EDIT_COMMENT';

{
    type: EDIT_COMMENT,
    id: 2,
    text: 'My first edit comment'
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
    type: THUMB_UP_COMMENT,
    id: 1
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: THUMB_DOWN_COMMENT,
    id: 2
}