import React from 'react';

const Footer = ({ links }) => {
    return (
        <footer className="footer">
            {links.map((item, index) => {
                const { title, link } = item
                return (
                    <div key={index}>
                        <strong>{title}</strong>
                        <a href={link} target="blank">{link}</a>
                    </div>
                );
            })}
        </footer>
    );
}
Footer.defaultProps = {
    links: [
        { title: "Front-end", link: "https://github.com/centrodph/rb-cli" },
        { title: "Back-end", link: "https://github.com/centrodph/rb" },
        { title: "Github", link: "https://github.com/centrodph" },
        { title: "Email", link: "centrodph@gmail.com" },
    ]
}
export default Footer;