import { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import ButtonGoBack from '../../components/ButtonGoBack';
import NewPostFormComponent from '../../components/NewPostForm';
import { useSelector, useDispatch } from 'react-redux';
import { createPosts, postsSelector } from '../../redux/slices/posts';

export default function NewPost() {
    const { hasErrors, sendSuccessfully } = useSelector(postsSelector);
    const [inputs, setInputs] = useState({ title: '', body: '' });
    const dispatch = useDispatch();
    const handleSubmit = (event: React.SyntheticEvent): void => {
        if (event) {
            event.preventDefault();
        }

        dispatch(createPosts(inputs));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    return (
        <MainLayout title="Create Post">
            <>
                <ButtonGoBack title="Go to all posts" />

                {sendSuccessfully ? (
                    <>
                        <h2>Your post created successfully</h2>
                        <p>Go back to all posts</p>
                    </>
                ) : (
                    <>
                        {!hasErrors ? (
                            <NewPostFormComponent
                                handleSubmit={handleSubmit}
                                handleInputChange={handleInputChange}
                                inputs={inputs}
                            />
                        ) : (
                            <h2>Some problems...</h2>
                        )}
                    </>
                )}
            </>
        </MainLayout>
    );
}
