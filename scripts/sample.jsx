//
// For developers who need to bundle Creative Developer Tools into their scripted solution:
// see ReadMe.md for info on embedding a sublicensed activation into your source code
//

// Load the DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"

// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"

// Optional: Import tests
//@include "CreativeDeveloperTools_ES/crdtes_test.jsx"

//
// To embed a license to CRDT you need to provide your developer GUID and email.
// This must be inserted _after_ the includes for CreativeDeveloperTools_ES
//
// TIGHTENER.setIssuer("1186cb432432878745ee377c49d7eade","my@email.com");

if (crdtes.getCreativeDeveloperToolsLevel() >= 1) {
    alert(
        "Creative Developer Tools for ExtendScript Demo\n" +
        "This software uses Creative Developer Tools for ExtendScript. " +
        "The software is currently activated. Will now run the tests."
    );
    crdtesDemo();
}
else {
    alert(
        "Creative Developer Tools for ExtendScript Demo\n" +
        "This software uses Creative Developer Tools for ExtendScript. " +
        "This software will not run unless you obtain a developer account by way of the PluginInstaller.\n" +
        "Visit https://www.rorohiko.com/crdt for more info."
    );
}

// --

function crdtesDemo() {

    if (! crdtes.runTests) {
        alert("Tests have not been loaded. Make sure to include CreativeDeveloperTools_ES/crdtes_test.jsx");
    }
    else {
        var success = crdtes.runTests();
        alert("Test pass mark = " + success);
    }

}
