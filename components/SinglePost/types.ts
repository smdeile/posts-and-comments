export default interface PostProps {
    title: string; 
    body: string; 
    id: string | number;
    comments: null | {
          id: string | number;
          postId: string | number;
          body: string;
        }[];
}