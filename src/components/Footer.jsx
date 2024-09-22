import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-600 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Integrations */}
        <div>
          <h3 className="text-lg font-bold mb-4">Integrations</h3>
          <ul>
            {['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock'].map((integration) => (
              <li key={integration} className="mb-2">
                {integration}
              </li>
            ))}
          </ul>
        </div>

        {/* Products & Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Products & Services</h3>
          <ul>
            {[
              'Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media',
              'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders'
            ].map((product) => (
              <li key={product} className="mb-2">
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul>
            {['Contact Us', 'Affiliate', 'Printify Express Delivery', 'Merchant Protection', 'Security', 'Sitemap'].map((support) => (
              <li key={support} className="mb-2">
                {support}
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul>
            {[
              'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Sales', 'POD Glossary'
            ].map((about) => (
              <li key={about} className="mb-2">
                {about}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved. Made by Harshit Goyal.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {['Facebook', 'Instagram', 'Linkedin', 'Twitter', 'Youtube', 'Tiktok', 'Reddit'].map((social) => (
            <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer">
              <span className="text-gray-500 hover:text-white">{social}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
