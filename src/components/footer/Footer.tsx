import React, { ReactElement } from 'react';
import { linkedinBlack, twitterBlack, instagramBlack } from '../../assets';

function Footer(): ReactElement {
  return (
    <nav className="container footer">
      <div className="centered_content footer_content">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/filenjo/"
        >
          <img src={linkedinBlack} alt="linkedIn" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/filenjo">
          <img src={twitterBlack} alt="twitter" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/filenjo/"
        >
          <img src={instagramBlack} alt="instagram" />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
