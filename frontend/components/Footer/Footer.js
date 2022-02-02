import clsx from "clsx";
import styles from "../../styles/Footer.module.scss";

const Footer = () => (
    <footer className={clsx(styles.footer, "darken-3")}>
        <div className='footer-copyright text-center'>
            © 2022 Copyright:
            <a href='https://blogging.com/'>Blogging.com</a>
        </div>
    </footer>
);

export default Footer
