import Link from 'next/link';
import { PostList, PostItem, PostLink, PostNumber, PostTitle, PostText } from './PostsList.style';
import PostsProps from './types';

export default function PostsList({ posts }: PostsProps) {
    return (
        <PostList>
            {posts &&
                posts
                    .slice()
                    .reverse()
                    .map((el) => {
                        return (
                            <Link href={`/posts/[id]`} as={`/posts/${el.id}`} key={el.id}>
                                <PostItem>
                                    <PostLink>
                                        <PostNumber>{`Post #${el.id}`}</PostNumber>
                                        {el.title === '' && el.body === '' ? (
                                            <PostTitle>Nothing to show =(</PostTitle>
                                        ) : (
                                            <>
                                                <PostTitle>
                                                    <>{`Title: ${el.title}`}</>
                                                </PostTitle>
                                                <PostText>{`Post: ${el.body}`}</PostText>
                                            </>
                                        )}
                                    </PostLink>
                                </PostItem>
                            </Link>
                        );
                    })}
        </PostList>
    );
}
