
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASUA:' + appTypeArray[0] + '/*/*/*');
branch('ASUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ASUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ASUA:' + appTypeString);

