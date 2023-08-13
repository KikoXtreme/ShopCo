import '../../css/footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-p'>
                &copy; {new Date().getFullYear()} ShopCo. All rights reserved. |{' '}
                <a href="/">T&C</a> |{' '}
                <a href="/">Privacy Policy</a> |{' '}
                <a href="/">Contact Us</a>
            </p>
        </div>
    );
}
