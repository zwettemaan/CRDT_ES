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
mkdir  "${CRDT_ES_RELEASE_DIR_TEMP}Helpers"
mkdir  "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Mac"
mkdir  "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_x86_64"
mkdir  "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_arm64"
 
export CRDT_ES_RELEASE_DIR_NAME_NOTARIZE=${CRDT_ES_PRODUCT_NAME}_notarize
export CRDT_ES_RELEASE_DIR_NOTARIZE="${SCRIPT_DIR}${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}/"
rm -rf ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}"
mkdir "${CRDT_ES_RELEASE_DIR_NOTARIZE}"

cp "${TIGHTENER_RELEASE_ROOT}Apps/PluginInstaller.tgz" "${CRDT_ES_RELEASE_DIR_TEMP}Helpers"

cd "${CRDT_ES_RELEASE_DIR_TEMP}Helpers"
tar -zxf PluginInstaller.tgz
rm -f PluginInstaller.tgz

cd PluginInstaller

unzip MacOS_Intel_And_M1/PluginInstaller.zip > /dev/null
mv    PluginInstaller.app    "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Mac"
mv    README.md              "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Mac/PluginInstaller_README.md"

unzip Windows_Intel_x86_64/PluginInstaller.zip > /dev/null
mv    PluginInstaller        "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_x86_64"
mv    README.md              "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_x86_64/PluginInstaller_README.md"

unzip Windows_ARM64/PluginInstaller.zip > /dev/null
mv    PluginInstaller        "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_arm64"
mv    README.md              "${CRDT_ES_RELEASE_DIR_TEMP}Helpers/Windows_arm64/PluginInstaller_README.md"

cd ..

rm -rf PluginInstaller

cd "${SCRIPT_DIR}"

codesign --timestamp --verbose --deep --force --sign "${TIGHTENER_DEV_ID_APPLE}" "${CRDT_ES_PRODUCT_NAME}/mac64/TightenerESDLL_x64R.framework"

cp -R ${CRDT_ES_PRODUCT_NAME}              "${CRDT_ES_RELEASE_DIR_TEMP}"

cp sample.jsx                              "${CRDT_ES_RELEASE_DIR_TEMP}"
cp README.md                               "${CRDT_ES_RELEASE_DIR_TEMP}"
cp "../../CRDT_UXP/README_CRDT.md"         "${CRDT_ES_RELEASE_DIR_TEMP}"
cp docs.md                                 "${CRDT_ES_RELEASE_DIR_TEMP}"

cp -R ${CRDT_ES_PRODUCT_NAME}              "${CRDT_ES_RELEASE_DIR_NOTARIZE}"

find . -name ".DS_Store" | while read a; do rm "$a"; done
find . -name "__MACOSX" | while read a; do rm -rf "$a"; done

xattr -cr "${CRDT_ES_RELEASE_DIR_TEMP}"
zip -y -r ${CRDT_ES_RELEASE_DIR_NAME}.zip ${CRDT_ES_RELEASE_DIR_NAME}  > /dev/null
rm -rf ${CRDT_ES_RELEASE_DIR_TEMP}

rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/ARM64"
rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/win32"
rm -rf "${CRDT_ES_RELEASE_DIR_NOTARIZE}${CRDT_ES_PRODUCT_NAME}/win64"

xattr -cr "${CRDT_ES_RELEASE_DIR_NOTARIZE}"
zip -y -r ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}  > /dev/null
rm -rf ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE} 

xcrun notarytool submit --password ${TIGHTENER_NOTARY_PASSWORD}  --apple-id ${TIGHTENER_NOTARY_APPLE_ID} --team-id ${TIGHTENER_NOTARY_TEAM_ID} --wait ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

rm ${CRDT_ES_RELEASE_DIR_NAME_NOTARIZE}.zip

echo "makerelease ${CRDT_ES_PRODUCT_NAME} done"
