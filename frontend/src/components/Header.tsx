import "./Header.css"
type HeaderProps = {
    children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
    return (
        <ul className="header">
            {children}
        </ul>
    );
}

export default Header;