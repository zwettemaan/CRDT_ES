var docFrom = "C:\\Users\\zwett\\Desktop\\doc2.indd";
var docTo = "C:\\Users\\zwett\\Desktop\\doc1.indt";
var d = openDocument(docTo);
var e = openDocument(d.document);
const CONDITION_LADDER_EXIT = false;

//transferStyles(docTo, docFrom, [ ImportFormat.PARAGRAPH_STYLES_FORMAT, ImportFormat.CHARACTER_STYLES_FORMAT]);

function logMsg(msg) {
    $.writeln(msg);
}

function collectionToArray(collection) {
    return collection.everyItem().getElements().slice(0);
}

function startsWith(s, start) {
    return s.length >= start.length && s.substring(0, start.length) == start;
}

function endsWith(s, end) {
    return s.length >= end.length && s.substring(s.length - end.length) == end;
}

function getNewDocumentNamePrefix() {
    
    var retVal = undefined;
    
    do {
        try {
            if (getNewDocumentNamePrefix.cachedPrefix) {
                retVal = newDocumentPrefix.cachedPrefix;
                break;
            }
        
            var isServer = "serverPreferences" in app;

            var dummyDocument;
            if (isServer) {
                dummyDocument= app.documents.add(false);
            }
            else {
                dummyDocument= app.documents.add();
            }
        
            var dummyName = dummyDocument.name;
            
            dummyDocument.close(SaveOptions.NO);
            
            // Strip the numerical tail and one extra character - e.g.
            // Untitled-12 -> Untitled
            var dummyNamePrefix = dummyName.replace(/(\S*?).\d+/, "$1");
            if (dummyNamePrefix == dummyName) {
                logMsg("cannot split name prefix of untitled doc. Verify getNewDocumentNamePrefix() for your language of InDesign");
            }
            getNewDocumentNamePrefix.cachedPrefix = dummyNamePrefix;
            
            retVal = dummyNamePrefix;    
        }
        catch (err) {
            logMsg("throws " + err);
        }
    }
    while (CONDITION_LADDER_EXIT);   
    
    return retVal;
}

function canonicalFilePath(fileOrPath) {
    
    var retVal = undefined;
    
    do {
        try {
            
            if (! fileOrPath) {
                logMsg("need fileOrPath");
                break;
            }
        
            if ("string" == typeof(fileOrPath)) {
                fileOrPath = File(fileOrPath);
            }
        
            if (! (fileOrPath instanceof File) && ! (fileOrPath instanceof Folder)) {  
                logMsg("fileOrPath is not a File nor a Folder");
                break;            
            }
        
            retVal = file.absoluteURI;
        }
        catch (err) {
            logMsg("throws " + err);
        }
    }
    while (CONDITION_LADDER_EXIT);   
    
    return retVal;
}

//
// Takes a Document, a file path or a File. 
// File path or File() must exist or else will return undefined
// Returns a File object or undefined
//
function getDocumentFile(documentOrFile) {

    var retVal = undefined;
    
    do {
        try {
            
            if (! documentOrFile) {
                logMsg("need documentOrFile");
                break;
            }
        
            if ("string" == typeof(documentOrFile)) {
                documentOrFile = File(documentOrFile);
            }
        
            if (documentOrFile instanceof File) {
                
                if (! documentOrFile.exists) {
                    logMsg("documentOrFile does not exist");
                    break;
                }
            
                retVal = documentOrFile;
                break;            
            }
        
        
            if (! (documentOrFile instanceof Document)) {
                logMsg("expected Document");
                break;
            }
        
            if (! documentOrFile.isValid) {
                logMsg("document is not valid");
                break;
            }
        
            if (! documentOrFile.saved) {
                try {
                    retVal = File(documentOrFile.filePath + "/" + documentOrFile.name);
                }
                catch (err) {
                    retVal = undefined;
                }                   
                break;
            }
        
            retVal = documentOrFile.fullName;
        }
        catch (err) {
            logMsg("throws " + err);
        }
    }
    while (CONDITION_LADDER_EXIT);   
    
    return retVal;
}

//
// Takes a Document, a file path or a File
// returns a documentInfo structure
// with a documentInfo.document in it, plus status info on the
// document
//
function openDocument(documentOrFile, showingWindow) {
    
    var retVal = {
        success: false,
        error: "failed to get document"
    };
    
    do {
        try {

            var isServer = "serverPreferences" in app;
            if (showingWindow && isServer) {
                logMsg("cannot show window on server");
                retVal = { 
                    success: false,
                    error: "not supported on server"
                };
                break;
            }
        
            if (showingWindow === undefined && ! isServer) {
                // InDesign desktop defaults to showing window; 
                // server does not show window.
                showingWindow = true;
            }

            if (! documentOrFile) {
                retVal = {
                    success: false,
                    error: "documentOrFile is undefined"
                }
                break;
            }
        
            if ("string" == typeof(documentOrFile)) {
                documentOrFile = File(documentOrFile);
            }
        
            if (documentOrFile instanceof File) {
                
                retVal = undefined;
                var documentCanonicalPath = canonicalFilePath(documentOrFile);
                var documents = collectionToArray(app.documents);
                for (var docIdx = 0; docIdx < documents.length; docIdx++) {
                    var searchDocument = documents[docIdx];
                    if (searchDocument.saved) {
                        var searchDocumentCanonicalPath = canonicalFilePath(searchDocument.fullName);
                        if (documentCanonicalPath == searchDocumentCanonicalPath) {
                            var visible = false;
                            if (! isServer) {
                                visible = searchDocument.visible;
                            }
                            if (! showingWindow || visible) {
                                var wasTemplate = false;
                                var wasUpgraded = false;
                                if (! document.saved) {
                                    if (documentOrFile.name == document.name) {
                                        wasUpgraded = true;
                                    }
                                    else {
                                        wasTemplate = true;
                                    }
                                }
                                retVal = {
                                    success: true,
                                    document: searchDocument,
                                    wasOpen: true,
                                    wasUpgraded: wasUpgraded,
                                    wasTemplate: wasTemplate,
                                    wasNew: false,
                                    isVisible: visible,
                                    documentFile: documentOrFile
                                }
                                break; // for
                            }
                        }
                    }
                }
                if (retVal) {
                    break;
                }

                if (! documentOrFile.exists) {
                    retVal = {
                        success: false,
                        error: "documentOrFile does not exist"
                    }
                }
                        
                var document;
                try {                        
                    if (isServer) {
                        document = app.open(documentOrFile);
                    }
                    else {
                        var savedLevel = app.scriptPreferences.userInteractionLevel;
                        app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
                        
                        document = app.open(documentOrFile, showingWindow);
                         
                        app.scriptPreferences.userInteractionLevel = savedLevel;
                    }
                }
                catch (err) {
                    retVal = {
                        success: false,
                        error: "app.open throws " + err
                    }
                    break;
                }            
                
                var wasTemplate = false;
                var wasUpgraded = false;
                if (! document.saved) {
                    if (documentOrFile.displayName == document.name) {
                        wasUpgraded = true;
                    }
                    else {
                        wasTemplate = true;
                    }
                }
                retVal = {
                    success: true,
                    document: document,
                    wasOpen: false,
                    wasUpgraded: wasUpgraded,
                    wasTemplate: wasTemplate,
                    wasNew: false,
                    isVisible: showingWindow,
                    documentFile: documentOrFile
                };
                break;            
            }
        
        
            if (documentOrFile instanceof Document) {
                var documentFile;
                var wasUpgraded = false;
                var wasNew = false;
                var wasTemplate = false;
                if (documentOrFile.saved) {
                    documentFile = documentOrFile.fullName;
                }
                else {
                    // Cannot access filePath: it's a new document
                    // Cannot access fullName: it's a new document, an upgraded document, or a template
                    // 
                    try {
                        documentFile = File(documentOrFile.filePath + "/" + documentOrFile.name);
                        if (startsWith(documentOrFile.name, getNewDocumentNamePrefix())) {
                            wasTemplate = true;
                        }
                        else {
                            wasUpgraded = true;
                        }
                    }
                    catch (err) {
                        wasNew = true;
                    }
                }

                var visible = false;
                if (! isServer) {
                    visible = documentOrFile.visible;
                }

                retVal = {
                    success: true,
                    document: documentOrFile,
                    wasOpen: true,
                    wasUpgraded: wasUpgraded,
                    wasNew: wasNew,
                    wasTemplate: wasTemplate,
                    isVisible: visible,
                    documentFile: documentFile
                };
            }
        }
        catch (err) {
            logMsg("throws " + err);
            retVal = {
                success: false,
                error: "throws " + err
            };
        }
    }
    while (CONDITION_LADDER_EXIT);   
    
    return retVal;
}

function transferStyles(documentTo, documentFrom, formatOrList) {
    
    var documentToInfo;
    
    do {
        try {

            if (! formatOrList) {
                logMsg("need formatOrList");
                break;
            }
        
            var formatList;
            if (! (formatOrList instanceof Array)) {
                formatList = [ formatOrList ];
            }
            else {
                formatList = formatOrList;
            }
                     
            var documentFileFrom = getDocumentFile(documentFrom);
            if (! documentFileFrom) {
                logMsg("cannot access documentFrom");
                break;
            }

            documentToInfo = openDocument(documentTo);
            if (! documentToInfo.success) {
                logMsg("cannot access documentTo");
                break;
            }
                  
            for (formatIdx = 0; formatIdx < formatList.length; formatIdx++) {
                try {
                    documentToInfo.document.importStyles(formatList[formatIdx], documentFileFrom, GlobalClashResolutionStrategy.LOAD_ALL_WITH_OVERWRITE);
                }
                catch (err) {
                    logMsg("throws " + err);
                }
            }
        }
        catch (err) {
            logMsg("throws " + err);
        }
    }
    while (CONDITION_LADDER_EXIT);
    
    if (documentToInfo && documentToInfo.document && ! documentToInfo.wasOpen) {
        if (! documentToInfo.wasUpgraded && ! documentToInfo.wasNew) {
            documentToInfo.document.close(SaveOptions.YES);
        }
        else {
            logMsg("documentTo has never been saved. Maybe document from older version?");
        }
    }

}

