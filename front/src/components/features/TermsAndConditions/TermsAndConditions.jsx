import React from 'react';
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "../../shared/Banner/Banner";
import { useScrollToTop } from "../../../util/scrollHook";
import PlainTextSection from "../../shared/PlainTextSection/PlainTextSection";

const TermsAndConditions = () => {
    useScrollToTop();

    const termsContent = (
        <div className="terms-container">
            <p>Last updated: 01-05-2025</p>
            <p>
                Welcome to AppNxt! These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p>
                By accessing this website, you accept these terms in full. Do not continue to use AppNxt’s website if you do not accept all of the terms and conditions stated on this page.
            </p>
            <hr />

            <h2>1. Definitions</h2>
            <ul>
                <li><strong>Company</strong> refers to AppNxt Logic Solutions Pvt. Ltd.</li>
                <li><strong>Client, You, or Your</strong> refers to the person accessing or using the website and accepting the Company’s terms and conditions.</li>
                <li><strong>We, Our, or Us</strong> refers to AppNxt.</li>
            </ul>
            <hr />

            <h2>2. Use of the Website</h2>
            <p>
                You agree to use the website only for lawful purposes. You must not use it in any way that:
            </p>
            <ul>
                <li>Breaches any applicable law or regulation.</li>
                <li>Is fraudulent or harmful.</li>
                <li>Infringes upon the rights of others.</li>
            </ul>
            <hr />

            <h2>3. Intellectual Property Rights</h2>
            <p>
                Unless otherwise stated, AppNxt owns the intellectual property rights for all material on this website. You may view and/or print pages for your personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
                <li>Republish material from our site.</li>
                <li>Sell, rent, or sublicense material.</li>
                <li>Reproduce or exploit material for commercial purposes.</li>
            </ul>
            <hr />

            <h2>4. Service and Pricing</h2>
            <p>
                All services and pricing listed on the website are subject to change without notice. We reserve the right to modify or discontinue services without prior notice.
            </p>
            <hr />

            <h2>5. User Content</h2>
            <p>
                If you submit content (e.g., reviews, comments, feedback), you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and modify such content for promotional or business purposes.
            </p>
            <p>
                You are responsible for the legality and accuracy of the content you submit.
            </p>
            <hr />

            <h2>6. Limitation of Liability</h2>
            <p>
                In no event shall AppNxt, nor its employees or partners, be liable for any indirect, incidental, or consequential damages arising from your use of the website or services.
            </p>
            <hr />

            <h2>7. Third-Party Links</h2>
            <p>
                Our site may contain links to third-party websites. These are provided for convenience only. We do not endorse or take responsibility for the content or practices of these websites.
            </p>
            <hr />

            <h2>8. Privacy</h2>
            <p>
                Please refer to our <a href="/privacy-policy" className="terms-link">Privacy Policy</a> for details on how we collect, use, and protect your personal information.
            </p>
            <hr />

            <h2>9. Termination</h2>
            <p>
                We reserve the right to suspend or terminate your access to the website or services at our sole discretion, without notice or liability, if we believe you have violated any of these terms.
            </p>
            <hr />

            <h2>10. Governing Law</h2>
            <p>
                These terms shall be governed by and construed in accordance with the laws of Maharashtra / India, and any disputes will be subject to the exclusive jurisdiction of the courts in that region.
            </p>
            <hr />

            <h2>11. Contact Information</h2>
            <p>
                If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div>
                <p>
                    📧 <a href="mailto:info@appnxt.in" className="terms-link">info@appnxt.in</a>
                </p>
                <p>📞 <a href="tel:+918828817171">+91-8828817171</a> / <a href="tel:9930011856">9930011856</a></p>
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <Banner bgURL={'/assets/img/contact-banner.svg'} heading={'Terms And Conditions'} />
            <PlainTextSection content={termsContent} />
            <Footer />
        </>
    );
};

export default TermsAndConditions;