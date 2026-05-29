import React from 'react';
import './Terms.css';
import SunDivider from '../../components/SunIcon/SunDivider.jsx';
import PageFade from '../../components/Motion/PageFade.jsx';

const Terms = () => {
    const year = new Date().getFullYear();

    return (
        <PageFade className="terms-page">
            <article className="terms-card">
                <SunDivider label="terms of use" size={44} />

                <p className="terms-intro">
                    Welcome to Lobar's Diary. By browsing this website you agree to the terms below.
                    Please read them carefully.
                </p>

                <section className="terms-section">
                    <h2>1. Image &amp; Content Copyright</h2>
                    <p>
                        All photographs, illustrations, edits, and written content on this site are the
                        original work of Lobar Jabborova and are protected by copyright
                        © {year} Lobar Jabborova. You may view and share links to the work, but you may not
                        copy, download, reproduce, redistribute, or use any image for commercial or
                        personal purposes without prior written permission.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>2. Acceptable Use</h2>
                    <p>
                        This website is provided for portfolio and informational purposes. You agree not to
                        misuse the site, attempt to disrupt its operation, or use it in any way that
                        infringes on the rights of others or violates applicable law.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>3. Commissions &amp; Communication</h2>
                    <p>
                        Inquiries made through the contact details provided are welcomed but do not create a
                        binding agreement. Any photography or editing engagement is subject to a separate
                        agreement made directly with Lobar Jabborova.
                    </p>
                </section>

                <section className="terms-section terms-privacy">
                    <h2>4. Data We Collect</h2>
                    <p>
                        To understand how visitors use the site, this website automatically records basic,
                        non-personal visit analytics when you browse. This includes your approximate
                        <strong> IP address</strong>, <strong>device and operating system</strong>,
                        <strong> screen size</strong>, the <strong>pages you view</strong>, and how long you
                        stay. This information is used only to gauge interest and improve the site — it is not
                        sold or used to personally identify you.
                    </p>
                    <p>
                        By continuing to use the site you consent to this collection. If you have any
                        questions or would like your data excluded, contact{' '}
                        <a href="mailto:lobarzabbarova@gmail.com">lobarzabbarova@gmail.com</a>.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>5. Changes</h2>
                    <p>
                        These terms may be updated from time to time. Continued use of the site after changes
                        are posted constitutes acceptance of the revised terms.
                    </p>
                </section>

                <p className="terms-updated">Last updated: {year}</p>
            </article>
        </PageFade>
    );
};

export default Terms;
