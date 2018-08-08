import uuid from uuid;
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, TUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from ."./modulesActions"

// ADD COMMENT
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('Pierwszy nowy komentarz');
boundAddComment('Kolejny nowy komentarz');

// REMOVE COMMENT CREATOR
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

boundRemoveComment(1);

//EDIT COMMENT CREATOR
function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}
const boundEditComment = (id, text) => dispatch(editComment(id, text));

boundEditComment('Pierwszy nowy komentarz', 1);

//THUMB UP COMMENT CREATOR
function thumbUpComment(thumb) {
    return {
        type: THUMB_UP_COMMENT,
        thumb: thumb + 1
    }
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

boundThumbUpComment(1);

//THUMB DOWN COMMENT CREATOR
function thumbDownComment(thumb, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        thumb: thumb - 1,
        id
    }
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));

boundThumbDownComment(1);
