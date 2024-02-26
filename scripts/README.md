# Creative Developer Tools for ExtendScript

ExtendScript enhancement, enhancing the ExtendScript language for various Adobe® Creative Cloud® apps, as well as _Adobe® InDesign® Server_.

© 2020-2024, Rorohiko Ltd. - Kris Coppieters
kris@rorohiko.com

This tool utilizes _Tightener_. 

To run _Creative Developer Tools for ExtendScript_, you need to activate the software by way of the included _License Manager_.

We have free trial licenses available - you can use the _License Manager_ to order free trial licenses.

## License Manager

The _License Manager_ is provided in the _Helpers_ subfolder. 

You may relocate it to a convenient location (e.g., `/Applications` or `C:\Program Files`).

After downloading, and each time you move the _License Manager_ application to a different location on your computer, you need to launch the app once, so it can reconfigure itself.

The _LicenseManager_ folder on Windows contains a lot of items, and you'll need to scroll down a bit to see `LicenseManager.exe`

## Demo

Make sure you've run the _License Manager_ from its current location.

Make sure you've created a standard account and have acquired and activated a license for Creative Developer Tools.

Make the following two entries accessible to the host app (e.g. in InDesign, you can use the _Scripts_ panel, in Photoshop, you can use the _File - Scripts - Browse..._ menu and browse for the `sample.jsx` script, and similar for other hosts):
```
sample.jsx                    (file)
CreativeDeveloperTools_ES     (folder)
```
`sample.jsx` will only work with the `CreativeDeveloperTools_ES` folder alongside it. Run `sample.jsx` from the host app.

All it will currently do is run through a bunch of tests from `crtdtes_test.jsx`, which contains some helpful sample code. Please
inspect this file for some better insights into the functionality provided.

## Installing Creative Developer Tools for ExtendScript

Copy the _CreativeDeveloperTools_ES_ subfolder to reside next to your own script (`.jsx`). Use your text editor and look in the `sample.jsx` and `credtes_test.jsx` text files for example code.

Modify your script and at the top, add the lines 
```
// Load the DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"
// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"
```

## Installing License Manager

### Mac 

If desired, move the `LicenseManager` application file to its desired location. 

Double-click the `LicenseManager` application icon to run the app from its current location at least once. 

### Windows

If desired, move the `LicenseManager` folder for your Windows platform (arm64 vs x86_64) to its desired location.

Navigate into the `LicenseManager` folder and double-click the `LicenseManager.exe` icon to run the app from its new location at least once. 

## Activating

### Standard Account

You need a Standard Account to activate the software.

Start the _License Manager_.

Create a standard account by clicking the _New_ button, bottom right of the _Accounts_ window.

Enter a descriptive name and a valid email address, and choose an unlock code. To avoid typos, you need to enter the same unlock code twice.

Click _OK_. 

After the account has been created, click _Register_ to register the account. 

You will receive a confirmation email with a confirmation link. Click the link to complete the registration.

If the email does not arrive, make sure to check your email spam filter!

### Save Unlock Code

On the _Accounts_ window, there is a checkbox _Save Unlock Code_.

If you're on a secure personal computer, you should tick this checkbox, to save the unlock code. That way you don't have to re-enter the code each time you launch the _License Manager_. 

If you don't save the unlock code, you will need to re-enter the code each time you start the _License Manager_.

### Multiple Accounts

You can create as many accounts as needed.

It is acceptable to re-use the same email address and the same unlock code for multiple accounts.

If you _do_ re-use the same email address for more than one account, they can become hard to distinguish. 

Make sure to use good descriptive names, so you can tell the accounts apart.

For example, you might use one account that you keep for your own personal use, and one or more additional accounts that you could use for ordering embeddable _Creative Developer Tools_ activations to pass on to your customers or colleagues.

Always make sure your account is unlocked. If you did not save your unlock code, you will need to re-enter the code in _License Manager_.

### Fetch Product Info

Use the _Store_ window in the _License Manager_, and browse into the _Rorohiko_ Catalog in order to add the product information for the software to be acquired.

Click one of the entries for `Creative Developer Tools` (free trial or commercial activation code). This will open the _Order a License_ window in the _License Manager_.

### Create an Order

Enter the number of seats needed. 

Type in some order reference that will have relevance to you. 

Finally, if you have multiple accounts available, you will now need to select the correct account from the popup menu. 

Then click the _Save_ button. 

This creates a _License Request_ file (`.lirq` file name extension).

### Send us your order

Attach this `.lirq` file to an email to mailto:sales@rorohiko.com. 

In your email, make sure to mention any additional details that might be relevant or useful (e.g. whether you qualify for a full free license, or if you prefer us to send you a PayPal invoice).

### Payment

Payment processing is not yet automated - if you're not entitled to a free license you need to manually send payment of US$29/seat using PayPal, to `sales@rorohiko.com`, which covers a year of use.

With your payment, make sure to mention the order reference that you used in the _License Manager_, so we can match your payment to the order info embedded in the _License Request_.
```
    https://www.paypal.com
```       

### Activation File

Once we have received your payment, we will email you an activation file for the order, which will have a `.capb` file name extension.

Make sure to check your email spam filter!

Start the _License Manager_ and go to the _Licenses, Activations and Pending Orders_ window. 

Click _Import_ and import the `.capb` file. 

The _License Manager_ will match this activation file to the corresponding pending order. 

### Activate

In the _Licenses, Activations and Pending Orders_ window you can now select the order entry, then click the _Activate_ button to activate your workstation.

## Sublicensing/auto-activation

You might want to bundle _Creative Developer Tools_ with your own commercial software, or have _Creative Developer Tools_ auto-activate so the end-user does not have to handle any activations. 

To achieve this, you can either add your activation info as a side-car file, or you can embed it into your source code.

In addition to your standard account (incoming), you also need a second developer account (outgoing).

The incoming license info will be ordered from Rorohiko using your standard account for purchasing. The outgoing sublicense will be tied to your developer account.

First, switch the _License Manager_ to _Standard_ mode via the _File - License Manager Mode_ menu. 

Purchase a license for _Creative Developer Tools_ as documented in the previous section. 

Once the order is validated and the activation file has been imported, switch the _License Manager_ to _Developer/Publisher_ mode.

If you don't have a developer account yet, create and register one. Wait for a confirmation email, and make sure to check your spam filter. 

Once you have a registered developer account, go to the _Sublicensing_ window, and select the order.

### Sidecar File

Select the option _SideCar File_, then click the _Copy_ button. 

Start your text editor and create a new file, then _Paste_ the activation info (JSON format). 

Save this file with a `.actv` file name extension (e.g. `MyAutoActivation.actv`).

On your end-users computer, you can now to install this file into the folder (Windows)
```
%APPDATA%\net.tightener\Licensing\AutoActivations
```
or (Mac)
```
~/Library/Application Support/net.tightener/Licensing/AutoActivations
```

The software will now auto-activate whenever your customer runs it and the user won't have to deal with activations.

### Embedding

On the _Sublicensing_ window, select _ExtendScript_, then click the _Copy_ button and then go to your source code, 
and _Paste_ right after the line in your own source code where you load _Creative Developer Tools_:
```
// Load the DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"

// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"

```
so it looks like
```
// Load the DLL
//@include "CreativeDeveloperTools_ES/crdtesDLLLoader.jsx"

// Import API
//@include "CreativeDeveloperTools_ES/crdtes.jsx"

TIGHTENER.setIssuer("1186cb861234567377c49d7eade","my@email.com");
TIGHTENER.sublicense("hdjshsajdshajdkas..lotsofit...NEmgd0UGH28dbI1RK0GRig==");

```
The software will now auto-activate when your customer runs it and the user won't have to deal with activations.

`TIGHTENER.sublicense()` returns a boolean - it will return `false` if the activation fails for some reason, so you can verify in code whether the activation succeeded or not.

## Changing computers

When you need to activate on another computer you can transfer and re-use the same licensing info. Activations can be transferred over. 

If you activate your copy of _Creative Developer Tools_ by way of the _License Manager_: you can export and import all your account and activation data between computers. Use the _File - Export License Info..._ and _File - Import License Info..._ to manage a transfer.

If you activate your copy by way of the sublicensing mechanism, then the activation will transport automatically. 

Note that to avoid abuse, there is a limitation on how frequently you can re-activate: after you activate a seat on a particular computer, you need to wait at least 10 minutes before you can re-activate the same seat on another computer.

## Change History

### v0.0.1, Feb 23, 2024

- Initial release

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


