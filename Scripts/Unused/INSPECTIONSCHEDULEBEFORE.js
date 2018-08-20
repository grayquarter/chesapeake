
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ISB:' + appTypeArray[0] + '/*/*/*');
branch('ISB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ISB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ISB:' + appTypeString);
branch('ISB:' + appTypeArray[0] + '/*/' + appTypeArray[2] + '/' + appTypeArray[3] );

