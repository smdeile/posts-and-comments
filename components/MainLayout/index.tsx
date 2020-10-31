import Link from 'next/link';
import Logo from '../Logo';
import Head from 'next/head';
import { NavLink, NavigationBlock, NavigationItem, MainBlock, MainBlockWrapper } from './MainLayout.styles';
import MainLayoutProps from './types';

export default function MainLayout({ children, title = 'page' }: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | P&C</title>
            </Head>
            <NavigationBlock>
                <Link href="/">
                    <NavLink>
                        <Logo />
                    </NavLink>
                </Link>
                <Link href="/posts/new">
                    <NavLink>
                        <NavigationItem>Create new post</NavigationItem>
                    </NavLink>
                </Link>
            </NavigationBlock>
            <MainBlock>
                <MainBlockWrapper>{children}</MainBlockWrapper>
            </MainBlock>
        </>
    );
}
