#!/bin/sh
set -euxo pipefail

(cd realscript-app && yarn && yarn eslint)