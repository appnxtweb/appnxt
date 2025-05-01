import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "../../shared/Banner/Banner";
import { useScrollToTop } from "../../../util/scrollHook";
import PlainTextSection from "../../shared/PlainTextSection/PlainTextSection";

const PrivacyPolicy = () => {
    useScrollToTop();

    const policyContent = (
        <>
            <p className="effective-date">Effective Date: 01-05-2025</p>
            <p>
                At AppNxt, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or use our services.
            </p>
            <hr />

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3>a. Personal Information</h3>
            <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Billing details (only when making a purchase)</li>
            </ul>
            <h3>b. Non-Personal Information</h3>
            <ul>
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Referring website</li>
                <li>Pages visited and time spent</li>
            </ul>
            <h3>c. Cookies and Tracking Technologies</h3>
            <p>
                We use cookies to improve your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings.
            </p>
            <hr />

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected data to:</p>
            <ul>
                <li>Provide and manage our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Process transactions and send invoices</li>
                <li>Improve our website and service offerings</li>
                <li>Send occasional promotional emails (if subscribed)</li>
            </ul>
            <hr />

            <h2>3. Data Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information. We may share your data:</p>
            <ul>
                <li>With trusted third-party vendors or partners who assist in operating our website or business</li>
                <li>When required by law or to protect our rights, safety, or property</li>
            </ul>
            <hr />

            <h2>4. Data Storage and Security</h2>
            <p>
                Your information is stored securely in our databases and protected using industry-standard measures including:
            </p>
            <ul>
                <li>SSL encryption</li>
                <li>Secure hosting environments</li>
                <li>Access restrictions to authorized personnel only</li>
            </ul>
            <hr />

            <h2>5. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
                To exercise your rights, please contact us at <a href="mailto:info@appnxt.in">info@appnxt.in</a>.
            </p>
            <hr />

            <h2>6. Third-Party Links</h2>
            <p>
                Our website may contain links to external sites. We are not responsible for the privacy practices or content of those sites.
            </p>
            <hr />

            <h2>7. Children's Privacy</h2>
            <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
            </p>
            <hr />

            <h2>8. Changes to This Policy</h2>
            <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the updated effective date.
            </p>
            <hr />

            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact:</p>
            <div className="contact-info">
                <p>
                    📧 <a href="mailto:info@appnxt.in">info@appnxt.in</a>
                </p>
                <p>📞 <a href="tel:+918828817171">+91-8828817171</a> / <a href="tel:9930011856">9930011856</a></p>
                <p>
                    🌐 <a href="https://www.appnxt.in" target="_blank" rel="noopener noreferrer">www.appnxt.in</a>
                </p>
            </div>
        </>
    );

    return (
        <>
            <Header />
            <Banner bgURL={'/assets/img/contact-banner.svg'} heading={'Privacy Policy'} />
            <PlainTextSection content={policyContent} />
            <Footer />
        </>
    );
};

export default PrivacyPolicy;