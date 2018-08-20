
showDebug = false;
showMessage= true;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IRSB:' + appTypeArray[0] + '/*/*/*');
branch('IRSB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRSB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRSB:' + appTypeString);

