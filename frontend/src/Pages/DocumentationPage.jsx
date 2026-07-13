import React, { useState } from 'react';

export default function DocumentationPage() {
  // Set the default active section
  const [activeSection, setActiveSection] = useState('installation');

  // Documentation Menu Structure
  const menuStructure = [
    {
      category: 'Getting Started',
      items: [
        { id: 'installation', label: 'Installation' },
        { id: 'default-theme', label: 'Changing the default theme' },
        { id: 'home-sections', label: 'Overview: Site home page sections' },
        { id: 'adding-menu', label: 'Adding the menu' },
        { id: 'adding-content', label: 'Adding a content page' },
      ]
    },
    {
      category: 'Theme options',
      items: [
        { id: 'general-settings', label: 'General theme settings' },
        { id: 'header-settings', label: 'Header settings' },
        { id: 'footer-settings', label: 'Footer settings' },
        { id: 'fonts', label: 'Fonts' },
        { id: 'advanced', label: 'Advanced' },
      ]
    },
    {
      category: 'Updates',
      items: [
        { id: 'install-update', label: 'Installing an update' },
        { id: 'upgrade-moodle4', label: 'Upgrading to Moodle 4' },
      ]
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans">
      
      {/* ================= SIDEBAR NAVIGATION ================= */}
      <aside className="w-full md:w-72 border-r border-gray-200 bg-gray-50 flex-shrink-0 md:h-screen md:sticky top-0 overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-light text-slate-800">Lambda</h1>
          <p className="text-sm text-gray-500 mt-1">Theme for Moodle</p>
        </div>

        <nav className="p-4 space-y-6">
          {menuStructure.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 px-3">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 text-sm transition-all border-l-4 ${
                        activeSection === item.id
                          ? 'border-[#f2b938] text-[#f2b938] font-medium bg-white shadow-sm'
                          : 'border-transparent text-gray-600 hover:text-slate-800 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeSection === 'installation' && <InstallationContent />}
          {activeSection === 'default-theme' && <DefaultThemeContent />}
          {activeSection === 'general-settings' && <GeneralSettingsContent />}
          {activeSection === 'home-sections' && <HomeSectionsContent />}
          {activeSection === 'adding-menu' && <AddingMenuContent />}
          {activeSection === 'adding-content' && <AddingContentContent />}
          {activeSection === 'header-settings' && <HeaderSettingsContent />}
          {activeSection === 'footer-settings' && <FooterSettingsContent />}
          {activeSection === 'fonts' && <FontsContent />}
          {activeSection === 'advanced' && <AdvancedContent />}
          {activeSection === 'install-update' && <InstallUpdateContent />}
          {activeSection === 'upgrade-moodle4' && <UpgradeMoodle4Content />}
        </div>
      </main>

    </div>
  );
}

/* =========================================
   CONTENT COMPONENTS
========================================= */

const InstallationContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Installation</h2>
    <ol className="list-decimal list-inside space-y-4 text-gray-600">
      <li>Login to your Moodle site as an admin.</li>
      <li>Go to <span className="italic font-medium">Site administration &gt; Plugins &gt; Install plugins</span>.</li>
      <li>
        In your downloaded package from ThemeForest, open the folder Theme. Choose the appropriate upload file for your Moodle version:
        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
          <li><strong>Moodle version 4:</strong> theme_lambda4_moodle_4.zip</li>
          <li><strong>Moodle version 5:</strong> theme_lambda2_moodle_5.zip</li>
        </ul>
      </li>
      <li>Upload the ZIP file in the folder.</li>
      <li>Check the plugin validation report, then click the button 'Install plugin'.</li>
    </ol>
    <div className="bg-green-50 border-l-4 border-green-500 p-4 text-green-800 text-sm mt-6">
      <p>During the next steps the Moodle database will be upgraded. Though you can already set up the theme options at this stage, <strong>it is recommended to leave the theme options at the default settings at first and just click Save Changes to continue.</strong></p>
    </div>
  </div>
);

const DefaultThemeContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Changing the default theme</h2>
    <p className="text-gray-600">
      An administrator can set a theme for the site from <span className="italic font-medium">Site administration &gt; Appearance &gt; Themes &gt; Theme selector</span>.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
      <li>Click on the "Select theme" button next to the type you wish to change.</li>
      <li>Scroll down to see the previews of the available themes and click on the "Use theme" button to choose Lambda.</li>
      <li>The next screen will provide information about the theme. Click "Continue".</li>
    </ul>
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-800 text-sm mt-6">
      <p>The selected theme may be overridden if user/course or category themes have been allowed in the Moodle core theme settings.</p>
    </div>
  </div>
);

const HomeSectionsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Overview: Site home page sections</h2>
    <p className="text-gray-600">
      The Lambda theme offers a highly customizable front page. You can manage these sections via the theme settings.
    </p>
    <div className="space-y-4 text-gray-600">
      <div className="p-4 border border-gray-200 rounded shadow-sm">
        <h4 className="font-semibold text-slate-800 mb-2">1. Carousel Slider</h4>
        <p className="text-sm">A full-width responsive slider to showcase promotions or important courses. Configure up to 5 slides with text captions and buttons.</p>
      </div>
      <div className="p-4 border border-gray-200 rounded shadow-sm">
        <h4 className="font-semibold text-slate-800 mb-2">2. Promotional Blocks (Marketing Spots)</h4>
        <p className="text-sm">Highlight key features of your platform using font-awesome icons, titles, and short descriptions.</p>
      </div>
      <div className="p-4 border border-gray-200 rounded shadow-sm">
        <h4 className="font-semibold text-slate-800 mb-2">3. Frontpage Courses</h4>
        <p className="text-sm">Display your available courses in a neat grid or list layout directly on the homepage.</p>
      </div>
    </div>
  </div>
);

const AddingMenuContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Adding the menu</h2>
    <p className="text-gray-600">
      You can configure the top navigation menu using Moodle's core custom menu settings.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-gray-600 mt-4">
      <li>Navigate to <span className="italic font-medium">Site administration &gt; Appearance &gt; Themes &gt; Theme settings</span>.</li>
      <li>Find the <strong>Custom menu items</strong> text area.</li>
      <li>Add your menu items using the standard Moodle format: <code>Label | URL | Tooltip</code>.</li>
    </ol>
    <div className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono mt-4 overflow-x-auto">
      Moodle community|https://moodle.org<br/>
      -Moodle free support|https://moodle.org/support<br/>
      -Moodle development|https://moodle.org/development<br/>
      Moodle company|https://moodle.com
    </div>
    <p className="text-sm text-gray-500 mt-2">Note: Use hyphens (-) to create dropdown sub-menus.</p>
  </div>
);

const AddingContentContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Adding a content page</h2>
    <p className="text-gray-600">
      To add static pages like "About Us" or "FAQ", you can utilize the Moodle <strong>Main Menu block</strong> or the <strong>Pages</strong> feature.
    </p>
    <h3 className="text-lg font-medium text-slate-800 mt-6 mb-2">Using the Main Menu Block:</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li>Turn editing on.</li>
      <li>Add the "Main Menu" block to your front page.</li>
      <li>Click "Add an activity or resource" within the block.</li>
      <li>Select <strong>Page</strong> and fill in your page name and content using the text editor.</li>
    </ul>
  </div>
);

const GeneralSettingsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">General theme settings</h2>
    <p className="text-gray-600 mb-6">
      To access the configurable options for Theme Lambda go to <span className="italic font-medium">Site Administration &gt; Appearance &gt; Themes &gt; Lambda</span>.
    </p>
    <table className="w-full text-left border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-3 border border-gray-200 font-semibold text-gray-700 w-1/3">Setting option</th>
          <th className="p-3 border border-gray-200 font-semibold text-gray-700">Description</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm">
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Set Page Layout</td>
          <td className="p-3 border border-gray-200">Choose between a "boxed" and a "wide" page layout.</td>
        </tr>
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Theme Main Color</td>
          <td className="p-3 border border-gray-200">The main color affects multiple components to produce the color you wish to apply across your site.</td>
        </tr>
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Background Image</td>
          <td className="p-3 border border-gray-200">Upload your own background image. If none is uploaded, the defined background color will be used.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const HeaderSettingsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Header settings</h2>
    <p className="text-gray-600">
      Customize the look and feel of the top header area of your site.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="border border-gray-200 p-4 rounded">
        <h4 className="font-semibold text-slate-800">Logo Upload</h4>
        <p className="text-sm text-gray-600 mt-1">Upload a standard logo and a compact logo for mobile devices.</p>
      </div>
      <div className="border border-gray-200 p-4 rounded">
        <h4 className="font-semibold text-slate-800">Header Height</h4>
        <p className="text-sm text-gray-600 mt-1">Adjust the padding and height of the header for desktop and mobile views.</p>
      </div>
      <div className="border border-gray-200 p-4 rounded">
        <h4 className="font-semibold text-slate-800">Search Box</h4>
        <p className="text-sm text-gray-600 mt-1">Toggle the visibility of the global search icon in the navigation bar.</p>
      </div>
      <div className="border border-gray-200 p-4 rounded">
        <h4 className="font-semibold text-slate-800">Login Form</h4>
        <p className="text-sm text-gray-600 mt-1">Choose between a dropdown login form or an inline visible login form.</p>
      </div>
    </div>
  </div>
);

const FooterSettingsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Footer settings</h2>
    <p className="text-gray-600">
      The footer is divided into several configurable block regions.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li><strong>Footer Background:</strong> Set a custom dark or light background color or upload an image.</li>
      <li><strong>Footer Layout:</strong> Choose how many columns (1 to 4) you want to display in the footer area.</li>
      <li><strong>Social Media Links:</strong> Add URLs for Facebook, Twitter, LinkedIn, etc., to display social icons automatically.</li>
      <li><strong>Copyright Text:</strong> Edit the copyright notice displayed at the very bottom of the page.</li>
    </ul>
  </div>
);

const FontsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Fonts</h2>
    <p className="text-gray-600">
      Theme Lambda integrates seamlessly with Google Fonts.
    </p>
    <div className="p-5 bg-gray-50 border border-gray-200 rounded">
      <h4 className="font-semibold text-slate-800 mb-3">Selecting Fonts</h4>
      <p className="text-sm text-gray-600 mb-4">You can define different font families for Headings (h1, h2, h3) and Body Text.</p>
      <div className="flex items-center gap-4 mb-2">
        <span className="text-sm font-medium w-24">Headings:</span>
        <select className="border border-gray-300 rounded p-1 text-sm bg-white" disabled>
          <option>Roboto</option>
          <option>Open Sans</option>
          <option>Montserrat</option>
        </select>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-24">Body Text:</span>
        <select className="border border-gray-300 rounded p-1 text-sm bg-white" disabled>
          <option>Open Sans</option>
          <option>Lato</option>
          <option>Source Sans Pro</option>
        </select>
      </div>
    </div>
  </div>
);

const AdvancedContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Advanced</h2>
    <p className="text-gray-600">
      Settings for advanced users and developers.
    </p>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-slate-800">Custom CSS</h4>
        <p className="text-sm text-gray-600 mb-2">Add your own CSS rules to override the default theme styling without modifying core files.</p>
        <textarea className="w-full h-24 border border-gray-300 bg-gray-800 text-green-400 p-2 text-sm font-mono rounded" disabled value={`/* Add custom CSS here */\n.custom-class {\n  color: #f2b938;\n}`}></textarea>
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">Google Analytics</h4>
        <p className="text-sm text-gray-600">Paste your Google Analytics tracking ID here to monitor your site traffic.</p>
      </div>
    </div>
  </div>
);

const InstallUpdateContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Installing an update</h2>
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-yellow-800 text-sm mb-6">
      <strong>Important:</strong> Always take a full backup of your Moodle database and files before performing any updates.
    </div>
    <ol className="list-decimal list-inside space-y-3 text-gray-600">
      <li>Download the latest version of the theme from your ThemeForest account.</li>
      <li>Extract the ZIP file to your computer.</li>
      <li>Access your server via FTP or cPanel File Manager.</li>
      <li>Navigate to the <code>/theme/</code> directory of your Moodle installation.</li>
      <li>Delete the existing <code>lambda</code> folder.</li>
      <li>Upload the new <code>lambda</code> folder from the extracted files.</li>
      <li>Log in to Moodle as an admin and go to Site Administration. The system will prompt you to upgrade the database.</li>
    </ol>
  </div>
);

const UpgradeMoodle4Content = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Upgrading to Moodle 4</h2>
    <p className="text-gray-600 mb-4">
      Moodle 4.x introduced significant changes to the user interface and navigation structure. Theme Lambda has been completely overhauled to support these new paradigms.
    </p>
    <ul className="list-disc list-inside space-y-3 text-gray-600">
      <li><strong>Navigation:</strong> The old settings block has been replaced by horizontal secondary navigation.</li>
      <li><strong>Block Regions:</strong> Block regions have been simplified. The 'Right' block drawer is now standard across most pages.</li>
      <li><strong>Course Index:</strong> A new collapsible course index menu is available on the left side of course pages for easier navigation.</li>
    </ul>
    <p className="text-gray-600 mt-4 italic">
      Please ensure you are installing the specific <code>theme_lambda4_moodle_4.zip</code> package if your site is running Moodle 4.0 or higher.
    </p>
  </div>
);