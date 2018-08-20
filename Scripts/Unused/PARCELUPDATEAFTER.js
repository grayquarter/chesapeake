
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PUA:' + appTypeArray[0] + '/*/*/*');
branch('PUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PUA:' + appTypeString);

