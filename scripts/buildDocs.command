if [ `uname` != "Darwin" ]; then
    echo Needs to run on Mac
    exit
fi

export SCRIPT_DIR=`dirname "$0"`
cd "$SCRIPT_DIR"
export SCRIPT_DIR=`pwd`/

cd ..
rm -rf docs

cat > /tmp/crdt_es_jsdoc.json << EOF
{
  "source": {
    "include": ["./scripts"],
    "includePattern": ".+\\\\.(js|jsx)?\$",
    "excludePattern": "(^|\\\\/|\\\\\\\\)(node_modules|docs|custom_minami)(\\\\/|\\\\\\\\).*\$"
  },
  "opts": {
    "destination": "./docs/",
    "recurse": true,
    "template": "custom_minami"
  }
}
EOF

npm i --save-dev jsdoc minami taffydb
jsdoc -c /tmp/crdt_es_jsdoc.json 
