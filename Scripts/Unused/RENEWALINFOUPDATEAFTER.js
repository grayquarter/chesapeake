
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('RIUA:' + appTypeArray[0] + '/*/*/*');
branch('RIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('RIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('RIUA:' + appTypeString);

