export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(pictureId, user, text) {
	return {
		type: ADD_COMMENT,
		pictureId,
		user,
		text
	}
}

export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export function toggleLike(pictureId) {
	return {
		type: TOGGLE_LIKE,
		pictureId
	}
}