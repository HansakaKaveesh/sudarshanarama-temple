import { FaShieldAlt } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 mt-24">
        <div className="flex items-center gap-2 mb-6">
          <FaShieldAlt className="text-blue-600 text-2xl" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <p className="mb-4">
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Table of Contents</h2>
        <ul className="list-disc list-inside mb-4">
          <li><a href="#info-collection" className="text-blue-600 hover:underline">Information We Collect</a></li>
          <li><a href="#use-info" className="text-blue-600 hover:underline">How We Use Your Information</a></li>
          <li><a href="#data-security" className="text-blue-600 hover:underline">Data Security</a></li>
          <li><a href="#cookies" className="text-blue-600 hover:underline">Cookies</a></li>
          <li><a href="#third-party" className="text-blue-600 hover:underline">Third-Party Services</a></li>
          <li><a href="#user-rights" className="text-blue-600 hover:underline">User  Rights</a></li>
          <li><a href="#changes" className="text-blue-600 hover:underline">Changes to This Policy</a></li>
          <li><a href="#contact" className="text-blue-600 hover:underline">Contact Information</a></li>
        </ul>

        <h2 id="info-collection" className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Usage data</li>
        </ul>

        <h2 id="use-info" className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Personalize your experience</li>
          <li>Provide customer support</li>
          <li>Improve our services</li>
        </ul>

        <h2 id="data-security" className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement a variety of security measures to protect your personal information, including encryption and secure servers.
        </p>

        <h2 id="cookies" className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your experience. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer.
        </p>

        <h2 id="third-party" className="text-xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
        <p className="mb-4">
          We may employ third-party companies and services to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>

        <h2 id="user-rights" className="text-xl font-semibold mt-6 mb-2">6. User Rights</h2>
        <p className="mb-4">
          You have the right to request access to the personal information we hold about you, to request corrections to any inaccuracies, and to request the deletion of your personal information under certain circumstances.
        </p>

        <h2 id="changes" className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 id="contact" className="text-xl font-semibold mt-6 mb-2">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">
          Email: hansakakaveesh2@gmail.com
        </p>
        <p className="mb-4">
          Phone: +94 710 44 83 66
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Thank you for trusting us with your information.
        </p>
      </div>
    </div>
  );
}