import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import PostsList from '../components/PostsList';
import { useSelector, useDispatch } from 'react-redux';
import { postsSelector, fetchPosts } from '../redux/slices/posts';

export default function Index() {
    const { posts, loading, hasErrors } = useSelector(postsSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <MainLayout title="Latest Posts">
            <>
                {hasErrors && <p>Cannot display recipes...</p>}
                {loading ? <h2>Wait... loading...</h2> : <PostsList posts={posts} />}
            </>
        </MainLayout>
    );
}
