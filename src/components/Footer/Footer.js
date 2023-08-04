import './footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <p>
                &copy; {new Date().getFullYear()} ShopCo. All rights reserved. |{' '}
                <a href="https://www.shopco.com/terms">Terms of Service</a> |{' '}
                <a href="https://www.shopco.com/privacy">Privacy Policy</a>
            </p>
        </div>
    );
}
