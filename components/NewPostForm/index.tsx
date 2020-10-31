import { NewPostForm, NewPostInput, NewPostTextarea, NewPostButton } from './NewPostForm.styles';
import NewPostFormProps from './types';

export default function NewPostFormComponent({ handleSubmit, handleInputChange, inputs }: NewPostFormProps) {
    console.log(handleSubmit, handleInputChange, inputs);
    return (
        <NewPostForm onSubmit={handleSubmit}>
            <NewPostInput
                type="text"
                onChange={handleInputChange}
                value={inputs?.title}
                name="title"
                placeholder="Wright your title"
                required
            />
            <NewPostTextarea
                type="text"
                onChange={handleInputChange}
                value={inputs?.body}
                name="body"
                placeholder="Wright your post"
                maxlength="500"
                readonly
                required
            />
            <NewPostButton type="submit">Create post</NewPostButton>
        </NewPostForm>
    );
}
