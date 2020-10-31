import { ButtonGoBack, CommonLink } from './ButtonGoBack.styles';
import Link from 'next/link';
import ButtonProps from './types';

export default function ButtonGoBackComponent({ title = 'Go to all posts' }: ButtonProps) {
    return (
        <ButtonGoBack>
            <Link href="/">
                <CommonLink>{title}</CommonLink>
            </Link>
        </ButtonGoBack>
    );
}
