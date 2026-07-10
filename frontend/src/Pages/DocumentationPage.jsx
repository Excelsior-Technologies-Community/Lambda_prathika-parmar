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
          
          {/* Fallback for empty sections */}
          {!['installation', 'default-theme', 'general-settings'].includes(activeSection) && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-light text-slate-800 mb-6 capitalize border-b pb-4">
                {activeSection.replace('-', ' ')}
              </h2>
              <p className="text-gray-600">
                Content for this section is currently being updated. Please check back later or refer to the video guide.
              </p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}

/* =========================================
   CONTENT COMPONENTS (Rendered based on selection)
========================================= */

const InstallationContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Installation</h2>
    
    <ol className="list-decimal list-inside space-y-4 text-gray-600">
      <li>Login to your Moodle site as an admin.</li>
      <li>Go to <span className="italic">Site administration &gt; Plugins &gt; Install plugins</span>.</li>
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

    <div className="my-8 p-6 bg-gray-50 border border-gray-200 rounded text-center">
      <div className="border-2 border-dashed border-gray-300 bg-white p-12 rounded flex flex-col items-center justify-center text-gray-400">
         <span className="text-4xl mb-4">☁️</span>
         <p>You can drag and drop files here to add them.</p>
         <p className="text-sm mt-2">Accepted file types: .zip</p>
      </div>
    </div>

    <div className="bg-green-50 border-l-4 border-green-500 p-4 text-green-800 text-sm">
      <p>During the next steps the Moodle database will be upgraded. Though you can already set up the theme options at this stage, <strong>it is recommended to leave the theme options at the default settings at first and just click Save Changes to continue.</strong></p>
    </div>
  </div>
);

const DefaultThemeContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">Changing the default theme</h2>
    
    <h3 className="text-xl font-medium text-slate-700 mt-8 mb-4">The Moodle theme selector</h3>
    <p className="text-gray-600">
      An administrator can set a theme for the site from <span className="italic">Site administration &gt; Appearance &gt; Themes &gt; Theme selector</span>.
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
      <li>Go to <span className="italic">Site administration &gt; Appearance &gt; Themes &gt; Theme selector</span></li>
      <li>Click on the "Select theme" button next to the type you wish to change (Moodle 4.0 - 4.2 only)</li>
      <li>Scroll down to see the previews of the available themes and click on the "Use theme" button to chose the theme</li>
      <li>The next screen will provide information about the theme. Click "Continue"</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-800 text-sm mt-6">
      <p>The selected theme may be overridden if user/course or category themes have been allowed in the Moodle core theme settings.</p>
    </div>
  </div>
);

const GeneralSettingsContent = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-4">General theme settings</h2>
    
    <p className="text-gray-600 mb-6">
      To access the configurable options for Theme Lambda go to <span className="italic">Site Administration &gt; Appearance &gt; Themes &gt; Lambda</span>.
    </p>

    <h3 className="text-xl font-medium text-slate-700 mb-4">General Layout</h3>
    
    <table className="w-full text-left border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-3 border border-gray-200 font-semibold text-gray-700 w-1/3">Setting option</th>
          <th className="p-3 border border-gray-200 font-semibold text-gray-700">Description</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm">
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Set Page Layout<br/><span className="font-normal text-xs text-gray-400">theme_lambda | layout_width</span></td>
          <td className="p-3 border border-gray-200">
            You can choose between a "boxed" and a "wide" page layout. For both options, you can add any distance (maximum width) for the layout.
            <div className="flex gap-4 mt-4">
              <div className="bg-gray-100 p-2 text-center text-xs">Wide Layout Preview</div>
              <div className="bg-gray-100 p-2 text-center text-xs">Boxed Layout Preview</div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Theme Main Color</td>
          <td className="p-3 border border-gray-200">The main color of the theme affects multiple components to produce the color you wish to apply across your Moodle site.</td>
        </tr>
        <tr>
          <td className="p-3 border border-gray-200 font-medium">Background Image</td>
          <td className="p-3 border border-gray-200">At the Moodle file picker, you can upload your own background image. If none is uploaded the defined background color will be used.</td>
        </tr>
      </tbody>
    </table>
  </div>
);