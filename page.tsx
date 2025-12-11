export default function PrivacyPolicy() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy for EzyReplay</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
            <p className="mb-4">
                EzyReplay ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
            </p>

            <h2 className="text-xl font-bold mb-2">2. Data We Collect</h2>
            <p className="mb-4">
                We collect info from your Instagram Business account via the Facebook Login integration, specifically:
                <ul className="list-disc ml-6">
                    <li>Basic profile information (Name, ID)</li>
                    <li>Instagram Business Account ID</li>
                    <li>Comments, Messages, and Stories (to provide automation services)</li>
                </ul>
            </p>

            <h2 className="text-xl font-bold mb-2">3. How We Use Your Data</h2>
            <p className="mb-4">
                We use your data solely to provide the automation features you configure (e.g., auto-replying to comments). We do not sell your data.
            </p>

            <h2 className="text-xl font-bold mb-2">4. Data Deletion</h2>
            <p className="mb-4">
                You can request deletion of your data by removing the EzyReplay app from your Facebook Business Integrations settings, or by emailing us.
            </p>
        </div>
    )
}
