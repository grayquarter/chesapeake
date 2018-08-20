
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASUB:' + appTypeArray[0] + '/*/*/*');
branch('ASUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASUB:' + appTypeString);

