import Header from "./Header/Header";

export default function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <p>Footer</p>
        </>
    )
}