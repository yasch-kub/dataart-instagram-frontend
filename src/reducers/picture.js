import {
	ADD_COMMENT,
	TOGGLE_LIKE
} from '../actions/picture'

const initialState = {
	pictures: [
		{
			id: '1',
			avatar: "http://cs628830.vk.me/v628830619/1e0b5/pqIU9dvOUZI.jpg",
			user: "Dataart",
			location: "dataart",
			signature: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque beatae consectetur cupiditate ea, facere fugiat illo incidunt natus neque nisi optio quam quia quos soluta ut voluptate. Amet consectetur cumque ducimus, facilis harum nulla odit, quae reiciendis rem tenetur veritatis vero, vitae voluptates. Dolor obcaecati pariatur sit voluptas! Incidunt.",
			src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
			date: new Date(),
			isLiked: true,
			comments: []
		},
		{
			id: '2',
			avatar: "http://cs628830.vk.me/v628830619/1e0b5/pqIU9dvOUZI.jpg",
			user: "Dataart",
			location: "dataart",
			signature: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque beatae consectetur cupiditate ea, facere fugiat illo incidunt natus neque nisi optio quam quia quos soluta ut voluptate. Amet consectetur cumque ducimus, facilis harum nulla odit, quae reiciendis rem tenetur veritatis vero, vitae voluptates. Dolor obcaecati pariatur sit voluptas! Incidunt.",
			src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
			date: new Date(),
			isLiked: false,
			comments: []
		}
	]
};

export default function(state = initialState, action) {
	switch(action.type) {

		case ADD_COMMENT:
		{
			let {user, text, pictureId} = action;
			let pictures = state.pictures.slice();
			let picture = pictures
				.find(picture => picture.id == pictureId);

			picture.comments.push({
				user,
				text
			});

			return {
				...state,
				pictures
			};
		}
		
		case TOGGLE_LIKE:
		{
			let {pictureId} = action;
			let pictures = state.pictures.slice();
			let picture = pictures
				.find(picture => picture.id == pictureId);

			picture.isLiked = !picture.isLiked;

			return {
				...state,
				pictures
			};
		}

		default:
			return {...state};
	}
}