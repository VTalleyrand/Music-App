import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <main className={styles['tos-main']}>
      <h2 className={styles['tos-title']}>Terms of Service</h2>
      <div className={styles['tos-text']}>
        <p>
          <span className={styles['tos-bold-text']}>Terms of Service</span>
        </p>
        <p>
          Welcome to <span className={styles['tos-bold-text']}>Aurelius</span>
          . By using our app, you agree to be bound by the following terms and
          conditions. Please read them carefully.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Use of the App</span>
          <br />
          You agree to use the app only for lawful purposes and in a way that
          does not infringe the rights of, restrict, or inhibit anyone else&#39;s
          use and enjoyment of the app.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Account Registration</span>
          <br />
          To access certain features of the app, you may need to register an
          account. You agree to provide accurate and complete information and to
          keep this information updated.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>User Content</span>
          <br />
          You are responsible for the content you post on the app. You grant us
          a non-exclusive, royalty-free, worldwide license to use, reproduce,
          and distribute your content in connection with the app.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Prohibited Activities</span>
          <br />
          You agree not to engage in activities such as:
          <br />
          - Posting or transmitting any content that is unlawful, harmful, or
          offensive.
          <br />
          - Using the app to send spam or unsolicited messages.
          <br />- Attempting to interfere with or disrupt the app&#39;s
          functionality.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Termination</span>
          <br />
          We reserve the right to suspend or terminate your account if you
          violate these terms or engage in activities that harm the app or its
          users.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>
            Limitation of Liability
          </span>
          <br />
          Our liability is limited to the maximum extent permitted by law. We
          are not responsible for any indirect, incidental, or consequential
          damages arising from your use of the app.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Changes to Terms</span>
          <br />
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page, and your continued use of the app after
          changes indicates your acceptance of the new terms.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Governing Law</span>
          <br />
          These terms are governed by and construed in accordance with the laws
          of <span className={styles['tos-bold-text']}>[Jurisdiction]</span>.
        </p>
        <p>
          <span className={styles['tos-bold-text']}>Contact Us</span>
          <br />
          If you have any questions about these Terms of Service, please contact
          us at{' '}
          <span className={styles['tos-bold-text']}>[Contact Information]</span>
          .
        </p>
      </div>
    </main>
  );
};

export default page;
