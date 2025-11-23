# CRDT_ES Overview

## Project Description
**CRDT_ES** (Creative Developer Tools for ExtendScript) is a library that extends the capabilities of Adobe's ExtendScript environment. It provides a suite of functions for tasks that are difficult or impossible to achieve with standard ExtendScript.

Key features include:
- **File System Operations**: Enhanced file and directory manipulation (create, delete, scan).
- **Encoding**: Base64 encoding/decoding.
- **TQL Integration**: Ability to evaluate **TQL (Tightener Query Language)** directly from ExtendScript.
- **Licensing**: Integration with the **PluginInstaller** for licensing and activation.

## Integration with Tightener
CRDT_ES is a primary consumer of the Tightener framework's capabilities within the ExtendScript context.

- **TightenerDLL**: It relies on `TightenerDLL` to bridge the gap between ExtendScript and the underlying OS/Tightener framework.
- **Ecosystem**: It serves as a standard library for developers building complex scripts and plugins on top of the Tightener ecosystem.
