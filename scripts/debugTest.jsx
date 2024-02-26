// Debugging works with the Debug version of InDesign and
// running it from the command line - the stderr output of
// curl is visible in the console.
//
// Launch InDesign debug, then 'Attach' to in Xcode to do
// source code debugging, then trigger the JSX code.

// LOAD_DEBUG_CRDT_ES: set this to true to load debugging versions.
// This is only useful when debugging from ExtendScript Toolkit
// launched as a subprocess of Xcode or Visual Studio

LOAD_DEBUG_CRDT_ES = false;
DEBUG_LIBPATH64_OVERRIDE = "/Users/kris/Documents/Controlled/Rorohiko/TightenerComponents/TightenerDLL/Xcode/Compiled/Debug/TightenerESDLL_x64D.framework";

// Load DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"

// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"

if (! crdtes.isCrdtesActivated()) {
    alert("Not activated");
}

// Import tests
//@include "CreativeDeveloperTools_ES/crdtes_test.jsx"
if (crdtes.runTests) {
    crdtes.runTests();
}

alert("Tests Completed");
