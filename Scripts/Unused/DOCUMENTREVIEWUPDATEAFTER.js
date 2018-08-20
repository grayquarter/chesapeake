
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('DRUA:' + appTypeArray[0] + '/*/*/*');
branch('DRUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('DRUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('DRUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('DRUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('DRUA:' + appTypeString);

