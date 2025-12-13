/**
 * Creative Developer Tools (CRDT) is a growing suite of tools aimed at script developers<br>
 * and plug-in developers for the Adobe Creative Cloud eco-system.<br>
 * <br>
 * This module provides functions that are specific to Adobe InDesign.
 * @module crdtesIDSN
 * @namespace crdtesIDSN
 * 
 */

var crdtesIDSN = getPlatformGlobals().defineGlobalObject("crdtesIDSN");

/**
 * Convert an InDesign collection into a pure JavaScript array
 *
 * @function collectionToArray
 * @memberOf crdtesIDSN
 *
 * @param {Collection} coll - an InDesign collection
 * @returns array with the collection elements
 */

function collectionToArray(coll) {

    var retVal = undefined;

    do {

        try {

            if (! coll) {
                break; 
            }

            if (coll instanceof Array) {
                retVal = coll.slice(0);
            }
            else {
                retVal = coll.everyItem().getElements().slice(0); 
            }

        }
        catch (err) {
            crdtes.logError(arguments, "throws " + err);
        }
    }
    while (false);

    return retVal;
}
crdtesIDSN.collectionToArray = collectionToArray