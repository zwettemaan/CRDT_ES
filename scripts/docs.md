<a name="module_crdtes"></a>

## crdtes
Creative Developer Tools (CRDT) is a growing suite of tools aimed at script developers and plug-in developers for the Adobe Creative Cloud eco-system.

Currently, it is at an alpha stage: the feature set is not frozen, and new features are added regularly.

There are two different versions of CRDT: one for UXP/UXPScript and another for ExtendScript.

The software is functional and useful, but without a doubt, there will be bugs and dragons…

Features include:

- Provides a unique machine GUID for each end-user computer
- Provides a unique account GUID for each end user
- Add licensing and activation features to your script
- Protect sensitive source code and make it hard to reverse engineer
- AES-256 encryption/decryption functions
- Base64 encode and decode functions

More to come! You can contact us on dev@rorohiko.com with feature request

For downloading and installation info, visit

https://www.rorohiko.com/crdt


* [crdtes](#module_crdtes)
    * [~TQL_SCOPE_NAME_DEFAULT](#module_crdtes..TQL_SCOPE_NAME_DEFAULT) : <code>string</code>
    * [~LOG_LEVEL_OFF](#module_crdtes..LOG_LEVEL_OFF) : <code>number</code>
    * [~LOG_LEVEL_ERROR](#module_crdtes..LOG_LEVEL_ERROR) : <code>number</code>
    * [~LOG_LEVEL_WARNING](#module_crdtes..LOG_LEVEL_WARNING) : <code>number</code>
    * [~LOG_LEVEL_NOTE](#module_crdtes..LOG_LEVEL_NOTE) : <code>number</code>
    * [~LOG_LEVEL_TRACE](#module_crdtes..LOG_LEVEL_TRACE) : <code>number</code>
    * [~DESKTOP_DIR](#module_crdtes..DESKTOP_DIR) : <code>string</code>
    * [~DOCUMENTS_DIR](#module_crdtes..DOCUMENTS_DIR) : <code>string</code>
    * [~HOME_DIR](#module_crdtes..HOME_DIR) : <code>string</code>
    * [~LOG_DIR](#module_crdtes..LOG_DIR) : <code>string</code>
    * [~SYSTEMDATA_DIR](#module_crdtes..SYSTEMDATA_DIR) : <code>string</code>
    * [~TMP_DIR](#module_crdtes..TMP_DIR) : <code>string</code>
    * [~USERDATA_DIR](#module_crdtes..USERDATA_DIR) : <code>string</code>
    * [~base64decode(base64Str)](#module_crdtes..base64decode) ⇒ <code>string</code>
    * [~base64encode(str_or_ByteArr)](#module_crdtes..base64encode) ⇒ <code>string</code>
    * [~binaryToStr(in_byteArray)](#module_crdtes..binaryToStr) ⇒ <code>string</code>
    * [~binaryUTF8ToStr(in_byteArray)](#module_crdtes..binaryUTF8ToStr) ⇒ <code>string</code>
    * [~configLogger(logInfo)](#module_crdtes..configLogger) ⇒ <code>boolean</code>
    * [~decrypt(str_or_ByteArr, aesKey)](#module_crdtes..decrypt) ⇒ <code>array</code>
    * [~deQuote(quotedString)](#module_crdtes..deQuote) ⇒ <code>array</code>
    * [~dirCreate(filePath)](#module_crdtes..dirCreate) ⇒ <code>array</code>
    * [~dirDelete(filePath, recurse)](#module_crdtes..dirDelete) ⇒ <code>boolean</code>
    * [~dirExists(dirPath)](#module_crdtes..dirExists) ⇒ <code>boolean</code>
    * [~dirScan(filePath)](#module_crdtes..dirScan) ⇒ <code>array</code>
    * [~dQ(str_or_ByteArr)](#module_crdtes..dQ) ⇒ <code>string</code>
    * [~encrypt(str_or_ByteArr, aesKey)](#module_crdtes..encrypt) ⇒ <code>string</code>
    * [~evalScript(scriptName, parentScriptFile)](#module_crdtes..evalScript) ⇒ <code>any</code>
    * [~evalTQL(tqlScript, tqlScopeName)](#module_crdtes..evalTQL) ⇒ <code>any</code>
    * [~fileClose(fileHandle)](#module_crdtes..fileClose) ⇒ <code>boolean</code>
    * [~fileDelete(filePath)](#module_crdtes..fileDelete) ⇒ <code>boolean</code>
    * [~fileExists(filePath)](#module_crdtes..fileExists) ⇒ <code>boolean</code>
    * [~fileOpen(fileName, mode)](#module_crdtes..fileOpen) ⇒ <code>number</code>
    * [~fileRead(fileHandle, isBinary)](#module_crdtes..fileRead) ⇒ <code>any</code>
    * [~fileWrite(fileHandle, str_or_ByteArr)](#module_crdtes..fileWrite) ⇒ <code>boolean</code>
    * [~getCapability(issuer, capabilityCode, encryptionKey)](#module_crdtes..getCapability) ⇒ <code>string</code>
    * [~getDir(dirTag)](#module_crdtes..getDir) ⇒ <code>string</code>
    * [~getEnvironment(envVarName)](#module_crdtes..getEnvironment) ⇒ <code>string</code>
    * [~getBooleanFromINI(in_value)](#module_crdtes..getBooleanFromINI) ⇒ <code>boolean</code>
    * [~getFloatWithUnitFromINI(in_valueStr, in_convertToUnit)](#module_crdtes..getFloatWithUnitFromINI) ⇒ <code>number</code>
    * [~getFloatValuesFromINI(in_valueStr)](#module_crdtes..getFloatValuesFromINI) ⇒ <code>array</code>
    * [~getIntValuesFromINI(in_valueStr)](#module_crdtes..getIntValuesFromINI) ⇒ <code>array</code>
    * [~getUnitFromINI(in_value, in_defaultUnit)](#module_crdtes..getUnitFromINI) ⇒ <code>string</code>
    * [~getPluginInstallerPath()](#module_crdtes..getPluginInstallerPath) ⇒ <code>string</code>
    * [~getPersistData(issuer, attribute, password)](#module_crdtes..getPersistData) ⇒ <code>string</code>
    * [~intPow(i, intPower)](#module_crdtes..intPow) ⇒ <code>number</code>
    * [~getCreativeDeveloperToolsLevel()](#module_crdtes..getCreativeDeveloperToolsLevel) ⇒ <code>number</code>
    * [~leftPad(s, padChar, len)](#module_crdtes..leftPad) ⇒ <code>string</code>
    * [~logEntry(reportingFunctionArguments)](#module_crdtes..logEntry)
    * [~logError(reportingFunctionArguments, message)](#module_crdtes..logError)
    * [~logExit(reportingFunctionArguments)](#module_crdtes..logExit)
    * [~functionNameFromArguments(functionArguments)](#module_crdtes..functionNameFromArguments) ⇒ <code>string</code>
    * [~logMessage(reportingFunctionArguments, logLevel, message)](#module_crdtes..logMessage)
    * [~logNote(reportingFunctionArguments, message)](#module_crdtes..logNote)
    * [~logTrace(reportingFunctionArguments, message)](#module_crdtes..logTrace)
    * [~logWarning(arguments, message)](#module_crdtes..logWarning)
    * [~machineGUID()](#module_crdtes..machineGUID) ⇒ <code>string</code>
    * [~pluginInstaller()](#module_crdtes..pluginInstaller) ⇒ <code>boolean</code>
    * [~popLogLevel()](#module_crdtes..popLogLevel) ⇒ <code>number</code>
    * [~pushLogLevel(newLogLevel)](#module_crdtes..pushLogLevel) ⇒ <code>number</code>
    * [~readINI(in_text)](#module_crdtes..readINI) ⇒ <code>object</code>
    * [~rightPad(s, padChar, len)](#module_crdtes..rightPad) ⇒ <code>string</code>
    * [~setIssuer(issuerGUID, issuerEmail)](#module_crdtes..setIssuer)
    * [~setPersistData(issuer, attribute, password, data)](#module_crdtes..setPersistData) ⇒ <code>boolean</code>
    * [~sQ(str_or_ByteArr)](#module_crdtes..sQ) ⇒ <code>string</code>
    * [~strToUTF8(in_s)](#module_crdtes..strToUTF8) ⇒ <code>array</code>
    * [~strToBinary(in_s)](#module_crdtes..strToBinary) ⇒ <code>array</code>
    * [~sublicense(key, activation)](#module_crdtes..sublicense) ⇒ <code>boolean</code>
    * [~toHex(i, numDigits)](#module_crdtes..toHex) ⇒ <code>string</code>
    * [~unitToInchFactor(in_unit)](#module_crdtes..unitToInchFactor) ⇒ <code>number</code>

<a name="module_crdtes..TQL_SCOPE_NAME_DEFAULT"></a>

### crdtes~TQL\_SCOPE\_NAME\_DEFAULT : <code>string</code>
The Tightener daemon provides persistent named scopes (similar to persistent ExtendScript engines).

When executing multiple TQL scripts in succession a named scope will retain any globals that
were defined by a previous script.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_LEVEL_OFF"></a>

### crdtes~LOG\_LEVEL\_OFF : <code>number</code>
Setting log level to `LOG_LEVEL_OFF` causes all log output to be suppressed.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_LEVEL_ERROR"></a>

### crdtes~LOG\_LEVEL\_ERROR : <code>number</code>
Setting log level to `LOG_LEVEL_ERROR` causes all log output to be suppressed,
except for errors.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_LEVEL_WARNING"></a>

### crdtes~LOG\_LEVEL\_WARNING : <code>number</code>
Setting log level to `LOG_LEVEL_WARNING` causes all log output to be suppressed,
except for errors and warnings.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_LEVEL_NOTE"></a>

### crdtes~LOG\_LEVEL\_NOTE : <code>number</code>
Setting log level to `LOG_LEVEL_NOTE` causes all log output to be suppressed,
except for errors, warnings and notes.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_LEVEL_TRACE"></a>

### crdtes~LOG\_LEVEL\_TRACE : <code>number</code>
Setting log level to `LOG_LEVEL_TRACE` causes all log output to be output.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..DESKTOP_DIR"></a>

### crdtes~DESKTOP\_DIR : <code>string</code>
Pass `DESKTOP_DIR` into `getDir()` to get the path of the user's Desktop folder.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..DOCUMENTS_DIR"></a>

### crdtes~DOCUMENTS\_DIR : <code>string</code>
Pass `DOCUMENTS_DIR` into `getDir()` to get the path of the user's Documents folder.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..HOME_DIR"></a>

### crdtes~HOME\_DIR : <code>string</code>
Pass `HOME_DIR` into `getDir()` to get the path of the user's home folder.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..LOG_DIR"></a>

### crdtes~LOG\_DIR : <code>string</code>
Pass `LOG_DIR` into `getDir()` to get the path of the Tightener logging folder.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..SYSTEMDATA_DIR"></a>

### crdtes~SYSTEMDATA\_DIR : <code>string</code>
Pass `SYSTEMDATA_DIR` into `getDir()` to get the path of the system data folder
(`%PROGRAMDATA%` or `/Library/Application Support`).

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..TMP_DIR"></a>

### crdtes~TMP\_DIR : <code>string</code>
Pass `TMP_DIR` into `getDir()` to get the path of the temporary folder.

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..USERDATA_DIR"></a>

### crdtes~USERDATA\_DIR : <code>string</code>
Pass `USERDATA_DIR` into `getDir()` to get the path to the user data folder
(`%APPDATA%` or `~/Library/Application Support`).

**Kind**: inner constant of [<code>crdtes</code>](#module_crdtes)  
<a name="module_crdtes..base64decode"></a>

### crdtes~base64decode(base64Str) ⇒ <code>string</code>
Decode a string that was encoded using base64.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - decoded string  

| Param | Type | Description |
| --- | --- | --- |
| base64Str | <code>string</code> | base64 encoded string |

<a name="module_crdtes..base64encode"></a>

### crdtes~base64encode(str_or_ByteArr) ⇒ <code>string</code>
Encode a string or an array of bytes using Base 64 encoding.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - encoded string  

| Param | Type | Description |
| --- | --- | --- |
| str_or_ByteArr | <code>string</code> | either a string or an array containing bytes (0-255). |

<a name="module_crdtes..binaryToStr"></a>

### crdtes~binaryToStr(in_byteArray) ⇒ <code>string</code>
Convert an array of bytes into string format. This string is UTF-16 internally, and
we map one byte to one UTF-16 character. The resulting string might contain character values
(charCodeAt()) that would be invalid in UTF8.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a string  

| Param | Type | Description |
| --- | --- | --- |
| in_byteArray | <code>array</code> | an array containing UTF-16 values in the range 0-255 |

<a name="module_crdtes..binaryUTF8ToStr"></a>

### crdtes~binaryUTF8ToStr(in_byteArray) ⇒ <code>string</code>
Decode an array of bytes that contains a UTF-8 encoded string.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a string, or undefined if some invalid UTF-8 is encountered  

| Param | Type | Description |
| --- | --- | --- |
| in_byteArray | <code>array</code> | an array containing bytes (0-255) for a string that was encoded using UTF-8 encoding. |

<a name="module_crdtes..configLogger"></a>

### crdtes~configLogger(logInfo) ⇒ <code>boolean</code>
Configure the logger

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success/failure  

| Param | Type | Description |
| --- | --- | --- |
| logInfo | <code>object</code> | object with logger setup info     logLevel: 0-4     logEntryExit: boolean     logToESTKConsole: boolean     logToCRDT: boolean     logToFilePath: undefined or a file path for logging |

<a name="module_crdtes..decrypt"></a>

### crdtes~decrypt(str_or_ByteArr, aesKey) ⇒ <code>array</code>
Reverse the operation of the `encrypt()` function.

Only available to paid developer accounts

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - an array of bytes  

| Param | Type | Description |
| --- | --- | --- |
| str_or_ByteArr | <code>string</code> | a string or an array of bytes |
| aesKey | <code>string</code> | a string or an array of bytes |

<a name="module_crdtes..deQuote"></a>

### crdtes~deQuote(quotedString) ⇒ <code>array</code>
Reverse the operation of `dQ()` or `sQ()`.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - a byte array. If the quoted string contains any `\uHHHH`` codes,
these are first re-encoded using UTF-8 before storing them into the byte array.  

| Param | Type | Description |
| --- | --- | --- |
| quotedString | <code>string</code> | a quoted string |

<a name="module_crdtes..dirCreate"></a>

### crdtes~dirCreate(filePath) ⇒ <code>array</code>
Create a directory.

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - list if items in directory  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="module_crdtes..dirDelete"></a>

### crdtes~dirDelete(filePath, recurse) ⇒ <code>boolean</code>
Delete a directory.

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 
| recurse | <code>boolean</code> | 

<a name="module_crdtes..dirExists"></a>

### crdtes~dirExists(dirPath) ⇒ <code>boolean</code>
Verify whether a directory exists. Will return `false` if the path points to a file (instead of a directory).

Also see `fileExists()`.

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - true or false  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | a path to a directory |

<a name="module_crdtes..dirScan"></a>

### crdtes~dirScan(filePath) ⇒ <code>array</code>
Scan a directory.

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - list if items in directory  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="module_crdtes..dQ"></a>

### crdtes~dQ(str_or_ByteArr) ⇒ <code>string</code>
Wrap a string or a byte array into double quotes, encoding any
binary data as a string. Knows how to handle Unicode characters
or binary zeroes.

When the input is a string, high Unicode characters are
encoded as `\uHHHH`.

When the inoput is a byte array, all bytes are encoded
as characters or as `\xHH` escape sequences.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a string enclosed in double quotes. This string is pure 7-bit
ASCII and can be inserted into generated script code
Example:
`var script = "a=b(" + dQ(somedata) + ");";`  

| Param | Type | Description |
| --- | --- | --- |
| str_or_ByteArr | <code>string</code> | a Unicode string or an array of bytes |

<a name="module_crdtes..encrypt"></a>

### crdtes~encrypt(str_or_ByteArr, aesKey) ⇒ <code>string</code>
Encrypt a string or array of bytes using a key. A random salt
is added into the mix, so even when passing in the same parameter values, the result will
be different every time.

Only available to paid developer accounts

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a base-64 encoded encrypted string.  

| Param | Type | Description |
| --- | --- | --- |
| str_or_ByteArr | <code>string</code> | a string or an array of bytes |
| aesKey | <code>string</code> | a string or an array of bytes |

<a name="module_crdtes..evalScript"></a>

### crdtes~evalScript(scriptName, parentScriptFile) ⇒ <code>any</code>
Evaluate a script file. If the unencrypted script file is not available (`.jsx` or `.js`),
use crdtesDLL to try and run an `.ejsx` or `.ejs` file.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>any</code> - the returned value  

| Param | Type | Description |
| --- | --- | --- |
| scriptName | <code>string</code> | the name of the script to run, without file name extension or parent directory |
| parentScriptFile | <code>string</code> | the name of the script from which we're calling this (pass in $.fileName). If this is missing, evaluate the path relative to the parent of CreativeDeveloperTools_ES |

<a name="module_crdtes..evalTQL"></a>

### crdtes~evalTQL(tqlScript, tqlScopeName) ⇒ <code>any</code>
Send a TQL script to the DLL

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>any</code> - the returned value  

| Param | Type | Description |
| --- | --- | --- |
| tqlScript | <code>string</code> | a script to run |
| tqlScopeName | <code>string</code> | a scope name to use. Such scope can be used to pass data between different processes |

<a name="module_crdtes..fileClose"></a>

### crdtes~fileClose(fileHandle) ⇒ <code>boolean</code>
Close a currently open file

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type | Description |
| --- | --- | --- |
| fileHandle | <code>number</code> | a file handle as returned by `fileOpen()`. |

<a name="module_crdtes..fileDelete"></a>

### crdtes~fileDelete(filePath) ⇒ <code>boolean</code>
Delete a file

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="module_crdtes..fileExists"></a>

### crdtes~fileExists(filePath) ⇒ <code>boolean</code>
Check if a file exists. Will return `false` if the file path points to a directory.

Also see `dirExists()`.

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - existence of file  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="module_crdtes..fileOpen"></a>

### crdtes~fileOpen(fileName, mode) ⇒ <code>number</code>
Open a binary file and return a handle

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - file handle  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | a native full file path to the file |
| mode | <code>string</code> | one of `'a'`, `'r'`, `'w'` (append, read, write) |

<a name="module_crdtes..fileRead"></a>

### crdtes~fileRead(fileHandle, isBinary) ⇒ <code>any</code>
Read a file into memory

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>any</code> - either a byte array or a string  

| Param | Type | Description |
| --- | --- | --- |
| fileHandle | <code>number</code> | a file handle as returned by `fileOpen()`. |
| isBinary | <code>boolean</code> | whether the file is considered a binary file (as opposed to a UTF-8 text file) |

<a name="module_crdtes..fileWrite"></a>

### crdtes~fileWrite(fileHandle, str_or_ByteArr) ⇒ <code>boolean</code>
Binary write to a file. Strings are written as UTF-8

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type | Description |
| --- | --- | --- |
| fileHandle | <code>number</code> | a file handle as returned by `fileOpen()`. |
| str_or_ByteArr | <code>string</code> | data to write to the file |

<a name="module_crdtes..getCapability"></a>

### crdtes~getCapability(issuer, capabilityCode, encryptionKey) ⇒ <code>string</code>
Determine whether, or which, features of some software or module are currently activated or not

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - either "NOT_ACTIVATED" or a JSON structure with capability data (customer GUID, decrypted developer-provided data from the activation file).  

| Param | Type | Description |
| --- | --- | --- |
| issuer | <code>string</code> | a GUID identifier for the developer account as seen in the PluginInstaller |
| capabilityCode | <code>string</code> | a code for the software features to be activated (as determined by the developer who owns the account). `capabilityCode` is not the same as `orderProductCode` - there can be multiple `orderProductCode` associated with a single `capabilityCode` (e.g. `capabilityCode` 'XYZ', `orderProductCode` 'XYZ_1YEAR', 'XYZ_2YEAR'...). |
| encryptionKey | <code>string</code> | the secret encryption key (created by the developer) needed to decode the capability data. As a developer you want to make sure this encryptionKey is obfuscated and only contained within encrypted script code. |

<a name="module_crdtes..getDir"></a>

### crdtes~getDir(dirTag) ⇒ <code>string</code>
Get the path of a system directory

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - file path of dir or undefined. Directory paths include a trailing slash or backslash  

| Param | Type | Description |
| --- | --- | --- |
| dirTag | <code>string</code> | a tag representing the dir: ```    DESKTOP_DIR    DOCUMENTS_DIR    HOME_DIR    LOG_DIR    SYSTEMDATA_DIR    TMP_DIR    USERDATA_DIR ``` |

<a name="module_crdtes..getEnvironment"></a>

### crdtes~getEnvironment(envVarName) ⇒ <code>string</code>
Access the environment

Not restricted by the UXP security sandbox. Not needed for pure ExtendScript - 
provided to offer some compatibility with the UXP version of CRDT

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - environment variable value  

| Param | Type | Description |
| --- | --- | --- |
| envVarName | <code>string</code> | name of environment variable |

<a name="module_crdtes..getBooleanFromINI"></a>

### crdtes~getBooleanFromINI(in_value) ⇒ <code>boolean</code>
Interpret a value extracted from some INI data as a boolean. Things like y, n, yes, no, true, false, t, f, 0, 1

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - value  

| Param | Type | Description |
| --- | --- | --- |
| in_value | <code>string</code> | ini value |

<a name="module_crdtes..getFloatWithUnitFromINI"></a>

### crdtes~getFloatWithUnitFromINI(in_valueStr, in_convertToUnit) ⇒ <code>number</code>
Interpret a string extracted from some INI data as a floating point value, followed by an optional unit
If there is no unit, then no conversion is performed.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - value  

| Param | Type | Description |
| --- | --- | --- |
| in_valueStr | <code>string</code> | ini value |
| in_convertToUnit | <code>string</code> | unit to convert to |

<a name="module_crdtes..getFloatValuesFromINI"></a>

### crdtes~getFloatValuesFromINI(in_valueStr) ⇒ <code>array</code>
Interpret a string extracted from some INI data as an array with float values (e.g. "[ 255, 128.2, 1.7]" )

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - array of numbers or undefined  

| Param | Type | Description |
| --- | --- | --- |
| in_valueStr | <code>string</code> | ini value |

<a name="module_crdtes..getIntValuesFromINI"></a>

### crdtes~getIntValuesFromINI(in_valueStr) ⇒ <code>array</code>
Interpret a string extracted from some INI data as an array with int values (e.g. "[ 255, 128, 1]" )

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - array of ints or undefined  

| Param | Type | Description |
| --- | --- | --- |
| in_valueStr | <code>string</code> | ini value |

<a name="module_crdtes..getUnitFromINI"></a>

### crdtes~getUnitFromINI(in_value, in_defaultUnit) ⇒ <code>string</code>
Interpret a string extracted from some INI data as a unit name

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - value  

| Param | Type | Description |
| --- | --- | --- |
| in_value | <code>string</code> | ini value |
| in_defaultUnit | <code>string</code> | default to use if no match is found |

<a name="module_crdtes..getPluginInstallerPath"></a>

### crdtes~getPluginInstallerPath() ⇒ <code>string</code>
Get file path to PluginInstaller if it is installed

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - file path  
<a name="module_crdtes..getPersistData"></a>

### crdtes~getPersistData(issuer, attribute, password) ⇒ <code>string</code>
Fetch some persistent data

Only available to paid developer accounts

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - whatever persistent data is stored for the given attribute  

| Param | Type | Description |
| --- | --- | --- |
| issuer | <code>string</code> | a GUID identifier for the developer account as seen in the PluginInstaller |
| attribute | <code>string</code> | an attribute name for the data |
| password | <code>string</code> | the password (created by the developer) needed to decode the persistent data |

<a name="module_crdtes..intPow"></a>

### crdtes~intPow(i, intPower) ⇒ <code>number</code>
Calculate an integer power of an int value. Avoids using floating point, so
should not have any floating-point round-off errors. `Math.pow()` will probably
give the exact same result, but I am doubtful that some implementations might internally use `log` and `exp`
to handle `Math.pow()`

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - i ^ intPower  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | Integer base |
| intPower | <code>number</code> | integer power |

<a name="module_crdtes..getCreativeDeveloperToolsLevel"></a>

### crdtes~getCreativeDeveloperToolsLevel() ⇒ <code>number</code>
Determine the license level for CRDT: 0 = not, 1 = basic, 2 = full

Some functions, marked with "Only available to paid developer accounts" 
will only work with level 2. Licensing function only work with level 1

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - 0, 1 or 2  
<a name="module_crdtes..leftPad"></a>

### crdtes~leftPad(s, padChar, len) ⇒ <code>string</code>
Extend or shorten a string to an exact length, adding `padChar` as needed

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - padded or shortened string  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | string to be extended or shortened |
| padChar | <code>string</code> | string to append repeatedly if length needs to extended |
| len | <code>number</code> | desired result length |

<a name="module_crdtes..logEntry"></a>

### crdtes~logEntry(reportingFunctionArguments)
Make a log entry of the call of a function. Pass in the `arguments` keyword as a parameter.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |

<a name="module_crdtes..logError"></a>

### crdtes~logError(reportingFunctionArguments, message)
Make a log entry of an error message. Pass in the `arguments` keyword as the first parameter
If the error level is below `LOG_LEVEL_ERROR` nothing happens

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |
| message | <code>string</code> | error message |

<a name="module_crdtes..logExit"></a>

### crdtes~logExit(reportingFunctionArguments)
Make a log entry of the exit of a function. Pass in the `arguments` keyword as a parameter.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |

<a name="module_crdtes..functionNameFromArguments"></a>

### crdtes~functionNameFromArguments(functionArguments) ⇒ <code>string</code>
Extract the function name from its arguments

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - function name  

| Param | Type | Description |
| --- | --- | --- |
| functionArguments | <code>object</code> | pass in the current `arguments` to the function. This is used to determine the function's name |

<a name="module_crdtes..logMessage"></a>

### crdtes~logMessage(reportingFunctionArguments, logLevel, message)
Output a log message. Pass in the `arguments` keyword as the first parameter.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |
| logLevel | <code>number</code> | log level |
| message | <code>string</code> | the note to output |

<a name="module_crdtes..logNote"></a>

### crdtes~logNote(reportingFunctionArguments, message)
Make a log entry of a note. Pass in the `arguments` keyword as the first parameter.
If the error level is below `LOG_LEVEL_NOTE` nothing happens

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |
| message | <code>string</code> | the note to output |

<a name="module_crdtes..logTrace"></a>

### crdtes~logTrace(reportingFunctionArguments, message)
Emit a trace messsage into the log. Pass in the `arguments` keyword as the first parameter.
If the error level is below `LOG_LEVEL_TRACE` nothing happens

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| reportingFunctionArguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |
| message | <code>string</code> | the trace message to output |

<a name="module_crdtes..logWarning"></a>

### crdtes~logWarning(arguments, message)
Emit a warning messsage into the log. Pass in the `arguments` keyword as the first parameter.
If the error level is below `LOG_LEVEL_WARNING` nothing happens

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>array</code> | pass in the current `arguments` to the function. This is used to determine the function's name for the log |
| message | <code>string</code> | the warning message to output |

<a name="module_crdtes..machineGUID"></a>

### crdtes~machineGUID() ⇒ <code>string</code>
The unique `GUID` of this computer

Only available to paid developer accounts

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a `GUID` string  
<a name="module_crdtes..pluginInstaller"></a>

### crdtes~pluginInstaller() ⇒ <code>boolean</code>
Attempt to launch the PluginInstaller if it is installed

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  
<a name="module_crdtes..popLogLevel"></a>

### crdtes~popLogLevel() ⇒ <code>number</code>
Restore the log level to what it was when pushLogLevel was called

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - log level that was popped off the stack  
<a name="module_crdtes..pushLogLevel"></a>

### crdtes~pushLogLevel(newLogLevel) ⇒ <code>number</code>
Save the previous log level and set a new log level

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - previous log level  

| Param | Type | Description |
| --- | --- | --- |
| newLogLevel | <code>number</code> | new log level to set |

<a name="module_crdtes..readINI"></a>

### crdtes~readINI(in_text) ⇒ <code>object</code>
Read a bunch of text and try to extract structured information in .INI format

This function is lenient and is able to extract slightly mangled INI data from the text frame
content of an InDesign text frame.

This function knows how to handle curly quotes should they be present.

The following flexibilities have been built-in:

- Attribute names are case-insensitive and anything not `a-z 0-9` is ignored.
Entries like `this or that = ...` or `thisOrThat = ...` or `this'orThat = ...` are
all equivalent. Only letters and digits are retained, and converted to lowercase.

- Attribute values can be quoted with either single, double, curly quotes.
This often occurs because InDesign can be configured to convert normal quotes into
curly quotes automatically.
Attribute values without quotes are trimmed (e.g. `bla =    x  ` is the same as `bla=x`)
Spaces are retained in quoted attribute values.

- Any text will be ignore if not properly formatted as either a section name or an attribute-value
pair with an equal sign

- Hard and soft returns are equivalent

The return value is an object with the section names at the top level, and attribute names
below that. The following .INI
```
[My data]
this is = " abc "
that =      abc
```
returns
```
{
  "mydata": {
     "__rawSectionName": "My data",
     "thisis": " abc ",
     "that": "abc"
  }
}
```

Duplicated sections and entries are automatically suffixed with a counter suffix - e.g.

[main]
a=1
a=2
a=3

is equivalent with 

[main]
a=1
a_2=2
a_3=3

[a]
a=1
[a]
a=2

is equivalent with

[a]
a=1
[a_2]
a=2

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>object</code> - either the ini data or `undefined`.  

| Param | Type | Description |
| --- | --- | --- |
| in_text | <code>string</code> | raw text, which might or might not contain some INI-formatted data mixed with normal text |

<a name="module_crdtes..rightPad"></a>

### crdtes~rightPad(s, padChar, len) ⇒ <code>string</code>
Extend or shorten a string to an exact length, adding `padChar` as needed

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - padded or shortened string  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | string to be extended or shortened |
| padChar | <code>string</code> | string to append repeatedly if length needs to extended |
| len | <code>number</code> | desired result length |

<a name="module_crdtes..setIssuer"></a>

### crdtes~setIssuer(issuerGUID, issuerEmail)
Send in activation data to determine whether some software is currently activated or not.

Needs to be followed by a `sublicense()` call

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returnss**: <code> boolean </code> - success or failure  

| Param | Type | Description |
| --- | --- | --- |
| issuerGUID | <code>string</code> | a GUID identifier for the developer account as seen in the PluginInstaller |
| issuerEmail | <code>string</code> | the email for the developer account as seen in the PluginInstaller |

<a name="module_crdtes..setPersistData"></a>

### crdtes~setPersistData(issuer, attribute, password, data) ⇒ <code>boolean</code>
Store some persistent data (e.g. a time stamp to determine a demo version lapsing)

Only available to paid developer accounts

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type | Description |
| --- | --- | --- |
| issuer | <code>string</code> | a GUID identifier for the developer account as seen in the PluginInstaller |
| attribute | <code>string</code> | an attribute name for the data |
| password | <code>string</code> | the password (created by the developer) needed to decode the persistent data |
| data | <code>string</code> | any data to persist |

<a name="module_crdtes..sQ"></a>

### crdtes~sQ(str_or_ByteArr) ⇒ <code>string</code>
Wrap a string or a byte array into single quotes, encoding any
binary data as a string. Knows how to handle Unicode characters
or binary zeroes.

When the input is a string, high Unicode characters are
encoded as `\uHHHH`

When the input is a byte array, all bytes are encoded as `\xHH` escape sequences.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - a string enclosed in double quotes. This string is pure 7-bit
ASCII and can be used into generated script code
Example:
`var script = "a=b(" + sQ(somedata) + ");";`  

| Param | Type | Description |
| --- | --- | --- |
| str_or_ByteArr | <code>string</code> | a Unicode string or an array of bytes |

<a name="module_crdtes..strToUTF8"></a>

### crdtes~strToUTF8(in_s) ⇒ <code>array</code>
Encode a string into an byte array using UTF-8

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - a byte array  

| Param | Type | Description |
| --- | --- | --- |
| in_s | <code>string</code> | a string |

<a name="module_crdtes..strToBinary"></a>

### crdtes~strToBinary(in_s) ⇒ <code>array</code>
Encode a string into an byte array using the 8 lowest bits of each UTF-16 character

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>array</code> - a byte array  

| Param | Type | Description |
| --- | --- | --- |
| in_s | <code>string</code> | a string |

<a name="module_crdtes..sublicense"></a>

### crdtes~sublicense(key, activation) ⇒ <code>boolean</code>
Send in sublicense info generated in the PluginInstaller so we can determine whether some software is currently activated or not.

Needs to be preceded by a `setIssuer()` call.

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>boolean</code> - success or failure  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | key needed to decode activation data |
| activation | <code>string</code> | encrypted activation data |

<a name="module_crdtes..toHex"></a>

### crdtes~toHex(i, numDigits) ⇒ <code>string</code>
Convert an integer into a hex representation with a fixed number of digits.
Negative numbers are converted using 2-s complement (so `-15` results in `0x01`)

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>string</code> - hex-encoded integer  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | integer to convert to hex |
| numDigits | <code>number</code> | How many digits. Defaults to 4 if omitted. |

<a name="module_crdtes..unitToInchFactor"></a>

### crdtes~unitToInchFactor(in_unit) ⇒ <code>number</code>
Conversion factor from a length unit into inches

**Kind**: inner method of [<code>crdtes</code>](#module_crdtes)  
**Returns**: <code>number</code> - conversion factor or 1.0 if unknown/not applicable  

| Param | Type | Description |
| --- | --- | --- |
| in_unit | <code>string</code> | unit name (`crdtes.UNIT_NAME...`) |

