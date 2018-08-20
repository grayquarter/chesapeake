
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('CEB:' + appTypeArray[0] + '/*/*/*');
branch('CEB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CEB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CEB:' + appTypeString);

