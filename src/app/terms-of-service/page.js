import { FaGavel } from "react-icons/fa";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 mt-24">
        <div className="flex items-center gap-2 mb-6">
          <FaGavel className="text-blue-600 text-2xl" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Table of Contents</h2>
        <ul className="list-disc list-inside mb-4">
          <li><a href="#use-services" className="text-blue-600 hover:underline">Use of Our Services</a></li>
          <li><a href="#account-responsibility" className="text-blue-600 hover:underline">Account Responsibility</a></li>
          <li><a href="#termination" className="text-blue-600 hover:underline">Termination</a></li>
          <li><a href="#changes-terms" className="text-blue-600 hover:underline">Changes to Terms</a></li>
          <li><a href="#user-conduct" className="text-blue-600 hover:underline">User  Conduct</a></li>
          <li><a href="#intellectual-property" className="text-blue-600 hover:underline">Intellectual Property</a></li>
          <li><a href="#limitation-liability" className="text-blue-600 hover:underline">Limitation of Liability</a></li>
          <li><a href="#governing-law" className="text-blue-600 hover:underline">Governing Law</a></li>
          <li><a href="#contact-info" className="text-blue-600 hover:underline">Contact Information</a></li>
        </ul>

        <h2 id="use-services" className="text-xl font-semibold mt-6 mb-2">1. Use of Our Services</h2>
        <p className="mb-4">
          You must follow any policies made available to you within the services. Don’t misuse our services.
        </p>

        <h2 id="account-responsibility" className="text-xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 id="termination" className="text-xl font-semibold mt-6 mb-2">3. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access if you violate any of the terms listed here. You may terminate your account at any time by contacting us.
        </p>

        <h2 id="changes-terms" className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
        <p className="mb-4">
          We may modify these terms or any additional terms. You should look at the terms regularly. Your continued use of the service after changes constitutes your acceptance of the new terms.
        </p>

        <h2 id="user-conduct" className="text-xl font-semibold mt-6 mb-2">5. User Conduct</h2>
        <p className="mb-4">
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul className="list -disc list-inside mb-4">
          <li>Harassment or intimidation of others</li>
          <li>Impersonation of any person or entity</li>
          <li>Distribution of spam or unsolicited communications</li>
          <li>Interference with or disruption of the services</li>
        </ul>

        <h2 id="intellectual-property" className="text-xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, and other intellectual property on our website are owned by us or our licensors. You may not use, reproduce, or distribute any content without our prior written permission.
        </p>

        <h2 id="limitation-liability" className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
        </p>

        <h2 id="governing-law" className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law principles.
        </p>

        <h2 id="contact-info" className="text-xl font-semibold mt-6 mb-2">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p className="mb-4">
          Email: hansakakaveesh2@gmail.com
        </p>
        <p className="mb-4">
          Phone: +94 710 44 83 66
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Thank you for using our services.
        </p>
      </div>
    </div>
  );
}