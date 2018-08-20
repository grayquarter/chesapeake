
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('DUB:' + appTypeArray[0] + '/*/*/*');
branch('DUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('DUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('DUB:' + appTypeString);

