import MainLayout from '../../components/MainLayout';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { postsSelector, chosenPost } from '../../redux/slices/posts';
import ButtonGoBack from '../../components/ButtonGoBack';
import SinglePost from '../../components/SinglePost';

export default function ChosenPost() {
    const rout = useRouter();
    const postId = rout.query.postId;
    const { foundPost, loading, hasErrors } = useSelector(postsSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(chosenPost(postId));
    }, [postId]);

    return (
        <MainLayout title={postId ? `Post #${postId}` : 'wait'}>
            <>
                <ButtonGoBack />
                {hasErrors ? (
                    <h2>Some problem...</h2>
                ) : (
                    <>
                        {loading ? (
                            <h2>Wait... loading...</h2>
                        ) : (
                            <>
                                <SinglePost foundPost={foundPost} />
                            </>
                        )}
                    </>
                )}
            </>
        </MainLayout>
    );
}
