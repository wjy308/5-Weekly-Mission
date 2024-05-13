import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
} from "./Icon";
import styles from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <footer className={`${styles.Footer}`}>
      <div className={`${styles.Footer_items}`}>
        <span className={`${styles.Footer_copyright}`}>©codeit - 2023</span>
        <div className={`${styles.Footer_links}`}>
          <a className={`${styles.Footer_links}`} href="">
            Privacy Policy
          </a>
          <a className={`${styles.Footer_links}`} href="">
            FAQ
          </a>
        </div>
        <div className={`${styles.Footer_sns}`}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FACEBOOK_ICON}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TWITTER_ICON}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={YOUTUBE_ICON}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={INSTAGRAM_ICON}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
