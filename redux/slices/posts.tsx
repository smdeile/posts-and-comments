import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
    loading: false,
    hasErrors: false,
    sendSuccessfully: false,
    posts: [],
    foundPost: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.loading = true;
        },
        getPostsSuccess: (state, { payload }) => {
            state.posts = payload;
            state.loading = false;
            state.hasErrors = false;
            state.sendSuccessfully = false;
        },
        getPostsFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
        createPost: (state) => {
            state.sendSuccessfully = true;
        },
        createPostFailure: (state) => {
            state.hasErrors = true;
        },
        findById: (state) => {
            state.loading = true;
        },
        findByIdSuccess: (state, { payload }) => {
            state.foundPost = payload;
            state.loading = false;
            state.hasErrors = false;
        },
    },
});

export const postsSelector = (state) => state.posts;

export const {
    getPosts,
    getPostsSuccess,
    getPostsFailure,
    createPost,
    createPostFailure,
    findById,
    findByIdSuccess,
} = postsSlice.actions;

export function fetchPosts() {
    return async (dispatch) => {
        dispatch(getPosts());

        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts');

            dispatch(getPostsSuccess(response.data));
        } catch (error) {
            dispatch(getPostsFailure());
        }
    };
}
export function createPosts(post) {
    return async (dispatch) => {
        dispatch(createPost());

        try {
            await axios.post(`https://simple-blog-api.crew.red/posts`, post);

            dispatch(createPost());
        } catch (error) {
            dispatch(createPostFailure());
        }
    };
}

export function chosenPost(id) {
    return async (dispatch) => {
        dispatch(findById());
        try {
            if (id) {
                const fetchId = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
                dispatch(findByIdSuccess(fetchId.data));
            } else return;
        } catch (error) {
            console.log('2 err');
            dispatch(createPostFailure());
        }
    };
}
export default postsSlice.reducer;
