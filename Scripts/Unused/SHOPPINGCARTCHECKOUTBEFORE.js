
showDebug = false;
showMessage = false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('SCCOB:' + appTypeArray[0] + '/*/*/*');
branch('SCCOB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('SCCOB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('SCCOB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('SCCOB:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('SCCOB:' + appTypeString);

