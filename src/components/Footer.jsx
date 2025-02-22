import React from 'react';
// Import SCSS file for styling
import '../assets/styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    &copy; {new Date().getFullYear()} Wexo. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

const FooterWithoutJSX = () => {
    return React.createElement(
        'footer',
        {className: 'footer'},
        React.createElement(
            'div',
            {className: 'footer-content'},
            React.createElement(
                'p',
                null,
                `© ${new Date().getFullYear()} Wexo. All rights reserved.`
            )
        )
    );
}

// Default export
export default Footer;
// Named export
export { FooterWithoutJSX };