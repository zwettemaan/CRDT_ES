if [ `uname` != "Darwin" ]; then
    echo Needs to run on Mac
    exit
fi

. "${TIGHTENER_GIT_ROOT}BuildScripts/setEnv"

echo "makerelease ${CRDT_ES_PRODUCT_NAME} in ${CRDT_ES_GIT_ROOT} started"

if [ "${TIGHTENER_RELEASE_ROOT}" = "" -o ! -d "${TIGHTENER_RELEASE_ROOT}" ]; then
    echo "Cannot make release. CRDT_ES repo needs to be installed alongside TightenerDocs repo"
    exit
fi

export SCRIPT_DIR=`dirname "$0"`
cd "$SCRIPT_DIR"
export SCRIPT_DIR=`pwd`/

./buildDocs.command

rm -rf ${CRDT_ES_PRODUCT_NAME}/ARM64
rm -rf ${CRDT_ES_PRODUCT_NAME}/mac64
rm -rf ${CRDT_ES_PRODUCT_NAME}/win32
rm -rf ${CRDT_ES_PRODUCT_NAME}/win64

cp -R "${TIGHTENER_RELEASE_ROOT}Plug-Ins/TightenerESDLL/lib/ARM64" ${CRDT_ES_PRODUCT_NAME}
cp -R "${TIGHTENER_RELEASE_ROOT}Plug-Ins/TightenerESDLL/lib/mac64" ${CRDT_ES_PRODUCT_NAME}
cp -R "${TIGHTENER_RELEASE_ROOT}Plug-Ins/TightenerESDLL/lib/win32" ${CRDT_ES_PRODUCT_NAME}
cp -R "${TIGHTENER_RELEASE_ROOT}Plug-Ins/TightenerESDLL/lib/win64" ${CRDT_ES_PRODUCT_NAME}

rm -rf ${CRDT_ES_RELEASE}
rm -rf "${CRDT_ES_RELEASE_DIR_TEMP}"

mkdir  "${CRDT_ES_RELEASE_DIR_TEMP}"
 
export CRDT_ES_RELEASE_DIR_NAME_NOTARIZE=${CRDT_ES_PRODUCT_NAME}_notarize
export CRDT_ES_RELEASE_DIR_NOTARIZE="${SCRIPT_DIR}${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}/"
rm -rf ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}"
mkdir "${CRDT_ES_RELEASE_DIR_NOTARIZE}"

cd "${SCRIPT_DIR}"

codesign --timestamp --verbose --deep --force --sign "${ROROHIKO_DEV_ID_APPLE}" "${CRDT_ES_PRODUCT_NAME}/mac64/TightenerESDLL_x64R.framework"

rm -rf ${CRDT_ES_PRODUCT_NAME}.zip
rm -rf ${CRDT_ES_PRODUCT_NAME}.nzip

zip -q -y -r ${CRDT_ES_PRODUCT_NAME}.zip   ${CRDT_ES_PRODUCT_NAME}
mv ${CRDT_ES_PRODUCT_NAME}.zip             ${CRDT_ES_PRODUCT_NAME}.nzip

cp -R ${CRDT_ES_PRODUCT_NAME}              "${CRDT_ES_RELEASE_DIR_TEMP}"

cp sample.jsx                              "${CRDT_ES_RELEASE_DIR_TEMP}"
cp ${CRDT_ES_PRODUCT_NAME}.nzip            "${CRDT_ES_RELEASE_DIR_TEMP}"
cp README.md                               "${CRDT_ES_RELEASE_DIR_TEMP}"
cp "../../CRDT_UXP/README_CRDT.md"         "${CRDT_ES_RELEASE_DIR_TEMP}"
cp docs.md                                 "${CRDT_ES_RELEASE_DIR_TEMP}"

cp -R ${CRDT_ES_PRODUCT_NAME}              "${CRDT_ES_RELEASE_DIR_NOTARIZE}"

find . -name ".DS_Store" | while read a; do rm "$a"; done
find . -name "__MACOSX" | while read a; do rm -rf "$a"; done

xattr -cr "${CRDT_ES_RELEASE_DIR_TEMP}"
zip -q -y -r ${CRDT_ES_RELEASE_DIR_NAME}.zip ${CRDT_ES_RELEASE_DIR_NAME}
rm -rf ${CRDT_ES_RELEASE_DIR_TEMP}

rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/ARM64"
rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/win32"
rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/win64"

xattr -cr "${CRDT_ES_RELEASE_DIR_NOTARIZE}"
zip -q -y -r ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}
rm -rf ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE} 

xcrun notarytool submit --password ${ROROHIKO_NOTARY_PASSWORD}  --apple-id ${ROROHIKO_NOTARY_APPLE_ID} --team-id ${ROROHIKO_NOTARY_TEAM_ID} --wait ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

rm ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

echo "makerelease ${CRDT_ES_PRODUCT_NAME} done"
