set -e

# Setup project dependencies
printf "NPM installing\n"
npm install

printf "Pod installation\n"
# for intel chip mac
pod install

# for M1 chip mac
# arch -x86_64 pod install

printf "Done Dona Done (:\n"
