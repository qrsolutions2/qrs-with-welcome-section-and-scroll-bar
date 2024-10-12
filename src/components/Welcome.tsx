import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Welcome to QRSolutions</h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
          QRSolutions is a cutting-edge QR code management service platform, specifically designed for businesses like real estate agents and car sales but caters for any product that requires fast and easily accessible information. Our white label solution allows companies to create custom QR codes that link directly to their websites. This means you can easily manage multiple products displayed in showrooms or on billboards. With QRSolutions you streamline your sales process and enhance customer engagement, giving potential buyers instant access to vital information with just a quick scan which goes straight back into their pocket.
        </p>
      </div>
    </section>
  );
};

export default Welcome;