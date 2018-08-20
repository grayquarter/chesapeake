
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IRMB:' + appTypeArray[0] + '/*/*/*');
branch('IRMB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRMB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRMB:' + appTypeString);

