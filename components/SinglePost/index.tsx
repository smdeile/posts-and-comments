import { PostHeader, PostPost } from './SinglePost.style';

export default function SinglePost({ foundPost }) {
    console.log(foundPost);
    return (
        <>
            <PostHeader>{`Title: ${
                foundPost?.title !== '' ? foundPost.title : 'Ooops... Nothing to show'
            }`}</PostHeader>
            <PostPost>{`Post: ${foundPost?.body !== '' ? foundPost.body : 'Ooops... Nothing to show'}`}</PostPost>
        </>
    );
}
