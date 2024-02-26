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
// Example of embedded sublicense below. This must be inserted _after_ the includes for CreativeDeveloperTools_ES
//
// TIGHTENER.setIssuer("1186cb432432878745ee377c49d7eade","my@email.com");
// TIGHTENER.sublicense("XGstcf4jznbBDNnq3qyVRCer32673213214PGushRA","nvXBXZVkhL07pn3F7D6ZWCT9khL07pn3F7D6ZWCT9khL07pn3F7D6ZWCT9WYlw6E=");

if (crdtes.isCrdtesActivated()) {
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
        "This software will not run unless you obtain and activate a license. Free trial licenses are available.\n" +
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
