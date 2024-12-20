# Creative Developer Tools

Documentation for Creative Developer Tools for ExtendScript

https://zwettemaan.github.io/CRDT_ES/crdtes.html

Documentation for Creative Developer Tools for UXP and UXPScript

https://zwettemaan.github.io/CRDT_UXP/crdtuxp.html

## Standard features (free of charge)

Standard features (Creative Developer Tools for ExtendScript)

```
crdtes.base64decode()
crdtes.base64encode()
crdtes.crdtesDir()
crdtes.dirCreate()
crdtes.dirDelete()
crdtes.dirExists()
crdtes.dirScan()
crdtes.dQ()
crdtes.evalScript()
crdtes.evalTQL()
crdtes.fileClose()
crdtes.fileDelete()
crdtes.fileExists()
crdtes.fileOpen()
crdtes.fileRead()
crdtes.fileWrite()
crdtes.getCreativeDeveloperToolsLevel()
crdtes.getDir()
crdtes.getEnvironment()
crdtes.getPluginInstallerPath()
crdtes.pluginInstaller()
crdtes.setIssuer()
crdtes.sQ()
crdtes.sublicense()
```

Standard features (Creative Developer Tools for UXP)

```
async crdtuxp.base64decode()
async crdtuxp.base64encode()
async crdtuxp.pluginInstaller()
async crdtuxp.getCreativeDeveloperToolsLevel()
async crdtuxp.getPluginInstallerPath()
async crdtuxp.evalScript()
async crdtuxp.getEnvironment()
async crdtuxp.dirCreate()
async crdtuxp.dirDelete()
async crdtuxp.dirExists()
async crdtuxp.dirScan()
      crdtuxp.dQ()
async crdtuxp.evalScript()
async crdtuxp.evalTQL()
async crdtuxp.fileClose()
async crdtuxp.fileDelete()
async crdtuxp.fileExists()
async crdtuxp.fileOpen()
async crdtuxp.fileRead()
async crdtuxp.fileWrite()
async crdtuxp.getDir()
async crdtuxp.getEnvironment()
async crdtuxp.getPluginInstallerPath()
async crdtuxp.pluginInstaller()
async crdtuxp.setIssuer()
      crdtuxp.sQ()
async crdtuxp.sublicense()
```

## Use Cases

### Protect your code (somewhat like JSXBIN)

Need to install _PluginInstaller_ and register for a developer account.

Add a few files and folders to your script.

Package your script using the _PluginInstaller_, and distribute the resulting .tpkg
file (download, email, store.tgrg.net).

The end-user needs to install _PluginInstaller_ and import the .tpkg file.

User can then install/remove the software.

Optional pay-for features for developers: get a monthly report with

- Number of tpkg imports over time
- Number of script runs over time

### Additional features with a Creative Developer Tools license

Need to install _PluginInstaller_ and register for a developer account.

You need to embed a license for Creative Developer Tools into
your source code. Make sure this source code is encrypted in the .tpkg distribution file.

```
TIGHTENER.setIssuer("431ce798caa84ae6b3ce7df9f82a45e1","developer@mail.what");
TIGHTENER.sublicense("1Jx3NuXtwgD4PGushRAL20i1nTgXlamBR0ImLKbeBer+","jBRPOZ/7vYo4ul...sSgagj+v41/Yo=");
```
This enables access to the following features:

ExtendScript:
```
crdtes.decryptStr()
crdtes.encryptStr()
crdtes.getCapability()
crdtes.getPersistData()
crdtes.machineGUID()
crdtes.setPersistData()
```

UXP:
```
async crdtuxp.decryptStr()
async crdtuxp.encryptStr()
async crdtuxp.getCapability()
async crdtuxp.getPersistData()
async crdtuxp.machineGUID()
async crdtuxp.setPersistData()
```

When creating your product in _PluginInstaller_, you can embed any (JSON-formatted) capability data.

In your script, you can call `getCapability()` to retrieve this data and determine what additional features are enabled or not. 

If the user has a valid activation, this call will succeed.
