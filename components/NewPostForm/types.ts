export default interface NewPostFormProps {
    handleSubmit?:(value: React.SyntheticEvent) => void;
    handleInputChange?:(value: React.SyntheticEvent) => void;
    inputs:{
        title: string; 
        body:string; 
    };
}