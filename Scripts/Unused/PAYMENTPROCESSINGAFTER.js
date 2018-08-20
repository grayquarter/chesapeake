
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PPA:' + appTypeArray[0] + '/*/*/*');
branch('PPA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PPA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PPA:' + appTypeString);

