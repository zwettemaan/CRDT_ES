# Creative Developer Tools for ExtendScript

© 2020-2024, Rorohiko Ltd. - Kris Coppieters
kris@rorohiko.com

## What it does

_Creative Developer Tools_ is a growing suite of tools aimed at script and plug-in developers
for the Adobe Creative Cloud eco-system.

Currently, it is at an beta stage: the feature set is frozen, and new features requests are 
added to a 'to do' list.

This is the ExtendScript version. It enhances the ExtendScript language for various 
Adobe® Creative Cloud® apps, as well as _Adobe® InDesign® Server_.

To run _Creative Developer Tools for ExtendScript_ (_CRDT_ES_), you need to create a developer 
account in the _PluginInstaller_ app. This will activate the _CRDT_ES_ software.

Some more information on the feature set:

https://github.com/zwettemaan/CRDT_ES/blob/main/scripts/docs.md

## PluginInstaller

Before you can do anything you first need to download and install the _PluginInstaller_ app.

The _PluginInstaller_ is can be downloaded from 

https://store.tgrg.net

You may relocate it to a convenient location (e.g., `/Applications` or `C:\Program Files`).

After downloading, and each time you move the _PluginInstaller_ application to a different 
location on your computer, you need to launch the app once, so it can reconfigure itself.

The _PluginInstaller_ folder on Windows contains a lot of icons, and you'll need to scroll around
a bit to see `PluginInstaller.exe`

## How it works

This works by way of a DLL written in C++ which is transparently loaded into the ExtendScript environment. 

Before you can use the functions provided you need to have installed _PluginInstaller_ 
and you need a registered developer account in the _PluginInstaller_. 

More info on _CRDT_:

https://www.rorohiko.com/crdt

## Demo

Make sure you've run the _PluginInstaller_ from its current location.

Make sure you've created and registered a developer account.

Make the following two file/folder entries accessible to the host app.

E.g. in InDesign, you can use the _Scripts_ panel. In Photoshop, you can use the _File - Scripts - Browse..._ menu and browse for the `sample.jsx` script. Similar for other host apps.

```
sample.jsx                    (file)
CreativeDeveloperTools_ES     (folder)
```

`sample.jsx` will only work with the `CreativeDeveloperTools_ES` folder alongside it. 

Run `sample.jsx` from the host app.

All this will currently do is to run through a bunch of tests from `crtdtes_test.jsx`.

`crtdtes_test.jsx` contains some helpful sample code. Please inspect `crtdtes_test.jsx` to learn more about the functionality provided.

You can also use the VSCode-based ExtendScript debugger to step through this code and gain a deeper understanding for how it works.

## Installing Creative Developer Tools for ExtendScript

Copy the _CreativeDeveloperTools_ES_ subfolder to reside next to your own script (`.jsx`). Use your text editor and look in the `sample.jsx` and `credtes_test.jsx` text files for example code.

You probably want your script to be split into a small non-encryted 'wrapper' and an encrypted part with the 'meat' of your script.

Modify the unencrypted wrapper to your script and at the top, add the lines
```
// Load the DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"
// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"
```

In the encrypted part of your script, add a line like 
```
TIGHTENER.setIssuer("ISSUERGUID","ISSUER_EMAIL");
```
In this last line, `ISSUERGUID` gets replaced by the GUID you've been assigned for your developer account, and `ISSUER_EMAIL` is the corresponding email address.

Example:
```
TIGHTENER.setIssuer("1186cb861234567377c49d7eade","my@email.com");
```

This line will unlock the CRDT features for use by your script.

## Installing PluginInstaller

### Mac

If desired, move the _PluginInstaller_ application file to its desired location.

Double-click the _PluginInstaller_ application icon to run the app from its current location at least once.

### Windows

If desired, move the _PluginInstaller_ folder for your Windows platform (arm64 vs x86_64) to its desired location.

Navigate into the _PluginInstaller_ folder and double-click the `PluginInstaller.exe` icon to run the app from its new location at least once.

## Activating

### Registered Developer Account

You need to have a registered developer account in the _PluginInstaller_. This will activate CRDT on your computer.

Start the _PluginInstaller_.

Use the _File - PluginInstaller Mode_ menu and switch to _Developer/Publisher_ mode.

Create a developer account by clicking the _New_ button, bottom right of the _Accounts_ window.

Enter a descriptive name and a valid email address, and choose an unlock code. To avoid typos, you need to enter the same unlock code twice.

Click _OK_.

After the account has been created, click _Register_ to register the account.

You will receive a confirmation email with a confirmation link. Click the link to complete the registration. If the email does not arrive, make sure to check your email spam filter!

Next, we'll then contact you via email for some additional info and verify your credentials, and once the process is complete, you will have a registered developer account.

### Save Unlock Code

On the _Accounts_ window, there is a checkbox _Save Unlock Code_.

If you're on a secure personal computer, you should tick this checkbox, to save the unlock code. That way you don't have to re-enter the code each time you launch the _PluginInstaller_.

If you don't save the unlock code, you will need to re-enter the code each time you start the _PluginInstaller_.

### Embedding your account info into your source code

In order to enable CRDT on your customer's machines when they run your script, you need to unlock CRDT from within your script by calling `TIGHTENER.setIssuer`. 

Please add the call to `TIGHTENER.setIssuer` line at the start of your script. 

```
TIGHTENER.setIssuer("1186cb861234567377c49d7eade","my@email.com");
...
rest of your script
...
```

## Change History

CRDT_ES Version 0.0.5, CRDT_UXP Version 0.0.8: 28-Mar-2024

    Activation of CRDT is now ties to having a developer account. 

    ‘Standard’ developer accounts miss out on a few optional features.

CRDT_ES Version 0.0.4, CRDT_UXP Version 0.0.7: 26-Mar-2024

    Improvements to PluginInstaller

CRDT_ES Version 0.0.3, CRDT_UXP Version 0.0.6: 20-Mar-2024

    License Manager renamed to PluginInstaller

CRDT_ES Version 0.0.2, CRDT_UXP Version 0.0.5: 26-Feb-2024

    License Manager now handles dark mode

    License Manager has a features to allow packaging of ExtendScript scripts. 

    Features include:
      – protect source code by encrypting it. Replace JSXBIN with AES-256 encryption
      – greatly simplify code signing – automatically handles certificates
      – packaging/manifest
      – handle downloading/installing/uninstalling of scripts from within license manager

CRDT_ES Version 0.0.1, CRDT_UXP Version 0.0.4: 26-Feb-2024

  Added persistent local storage, shared between CRDT_ES and CRDT_UXP

  Improved License Manager

## Licenses

### Creative Developer Tools for ExtendScript

This license covers the 'Creative Developer Tools for ExtendScript' ExtendScript enhancement.

Copyright © 2020-2024 by Rorohiko Ltd. All rights reserved.

You should carefully read the following terms and conditions
before using this software. Your use of this software indicates
your acceptance of this license agreement and warranty.

This software and the accompanying files are provided "as is" and
without warranties as to performance or merchantability or any
other warranties whether expressed or implied. Because of the
many and variable hardware and software environments under which
this software may operate, no warranty of fitness for a
particular purpose is offered.

Good computer procedure dictates that any program be thoroughly
tested with non-critical data before relying on it. The user
must assume the entire risk of using the program.

### curl

This software uses libcurl

https://curl.haxx.se/

--

COPYRIGHT AND PERMISSION NOTICE

Copyright (c) 1996 - 2020, Daniel Stenberg, daniel@haxx.se, and many contributors,
see the THANKS file.

All rights reserved.

Permission to use, copy, modify, and distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall not
be used in advertising or otherwise to promote the sale, use or other dealings
in this Software without prior written authorization of the copyright holder.

NOTICE

  Curl contains pieces of source code that is Copyright (c) 1998, 1999
  Kungliga Tekniska Högskolan. This notice is included here to comply with the
  distribution terms.

### OpenSSL

This software uses OpenSSL 1.1.1

https://www.openssl.org/

--

  LICENSE ISSUES
  ==============

  The OpenSSL toolkit stays under a double license, i.e. both the conditions of
  the OpenSSL License and the original SSLeay license apply to the toolkit.
  See below for the actual license texts.

  OpenSSL License
  ---------------

/* ====================================================================
 * Copyright (c) 1998-2019 The OpenSSL Project.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. All advertising materials mentioning features or use of this
 *    software must display the following acknowledgment:
 *    "This product includes software developed by the OpenSSL Project
 *    for use in the OpenSSL Toolkit. (http://www.openssl.org/)"
 *
 * 4. The names "OpenSSL Toolkit" and "OpenSSL Project" must not be used to
 *    endorse or promote products derived from this software without
 *    prior written permission. For written permission, please contact
 *    openssl-core@openssl.org.
 *
 * 5. Products derived from this software may not be called "OpenSSL"
 *    nor may "OpenSSL" appear in their names without prior written
 *    permission of the OpenSSL Project.
 *
 * 6. Redistributions of any form whatsoever must retain the following
 *    acknowledgment:
 *    "This product includes software developed by the OpenSSL Project
 *    for use in the OpenSSL Toolkit (http://www.openssl.org/)"
 *
 * THIS SOFTWARE IS PROVIDED BY THE OpenSSL PROJECT ``AS IS'' AND ANY
 * EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * ====================================================================
 *
 * This product includes cryptographic software written by Eric Young
 * (eay@cryptsoft.com).  This product includes software written by Tim
 * Hudson (tjh@cryptsoft.com).
 *
 */

 Original SSLeay License
 -----------------------

/* Copyright (C) 1995-1998 Eric Young (eay@cryptsoft.com)
 * All rights reserved.
 *
 * This package is an SSL implementation written
 * by Eric Young (eay@cryptsoft.com).
 * The implementation was written so as to conform with Netscapes SSL.
 *
 * This library is free for commercial and non-commercial use as long as
 * the following conditions are aheared to.  The following conditions
 * apply to all code found in this distribution, be it the RC4, RSA,
 * lhash, DES, etc., code; not just the SSL code.  The SSL documentation
 * included with this distribution is covered by the same copyright terms
 * except that the holder is Tim Hudson (tjh@cryptsoft.com).
 *
 * Copyright remains Eric Young's, and as such any Copyright notices in
 * the code are not to be removed.
 * If this package is used in a product, Eric Young should be given attribution
 * as the author of the parts of the library used.
 * This can be in the form of a textual message at program startup or
 * in documentation (online or textual) provided with the package.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software
 *    must display the following acknowledgement:
 *    "This product includes cryptographic software written by
 *     Eric Young (eay@cryptsoft.com)"
 *    The word 'cryptographic' can be left out if the rouines from the library
 *    being used are not cryptographic related :-).
 * 4. If you include any Windows specific code (or a derivative thereof) from
 *    the apps directory (application code) you must include an acknowledgement:
 *    "This product includes software written by Tim Hudson (tjh@cryptsoft.com)"
 *
 * THIS SOFTWARE IS PROVIDED BY ERIC YOUNG ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * The licence and distribution terms for any publically available version or
 * derivative of this code cannot be changed.  i.e. this code cannot simply be
 * copied and put under another distribution licence
 * [including the GNU Public Licence.]
 */
