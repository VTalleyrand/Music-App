import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <main className={styles['privacy-main']}>
      <h2 className={styles['privacy-title']}>Privacy</h2>
      <div className={styles['privacy-text']}>
      <p>
    <span className={styles['privacy-bold-text']}>Privacy Policy</span>
  </p>
  <p>
    Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use <span className={styles['privacy-bold-text']}>Aurelius</span>. By using our app, you agree to the collection and use of your information in accordance with this policy.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Information Collection and Use</span>
    <br />
    We collect information to provide and improve our service. The types of information we may collect include:
    <br />
    - <span className={styles['privacy-bold-text']}>Personal Information</span>: Such as your name, email address, and contact details when you register or interact with our app.
    <br />
    - <span className={styles['privacy-bold-text']}>Usage Data</span>: Information on how you use the app, including your activity, preferences, and settings.
    <br />
    - <span className={styles['privacy-bold-text']}>Device Information</span>: Data about the device you use to access the app, including the device type, operating system, and IP address.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Use of Information</span>
    <br />
    The information we collect is used to:
    <br />
    - Provide and maintain our app.
    <br />
    - Improve and personalize your experience.
    <br />
    - Communicate with you regarding updates, offers, and support.
    <br />
    - Analyze usage patterns to enhance app functionality.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Data Sharing and Disclosure</span>
    <br />
    We do not share your personal information with third parties except:
    <br />
    - When required by law or to comply with legal processes.
    <br />
    - To protect the security and integrity of our app.
    <br />
    - With your consent.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Data Security</span>
    <br />
    We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Your Choices</span>
    <br />
    You can choose not to provide certain information, but this may limit your ability to use some features of our app. You may also update or delete your personal information through your account settings.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Changes to This Privacy Policy</span>
    <br />
    We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically. Your continued use of the app after changes indicates your acceptance of the updated policy.
  </p>
  <p>
    <span className={styles['privacy-bold-text']}>Contact Us</span>
    <br />
    If you have any questions about this Privacy Policy, please contact us at <span className={styles['privacy-bold-text']}>[Contact Information]</span>.
  </p>
       
      </div>
    </main>
  );
};

export default page;
