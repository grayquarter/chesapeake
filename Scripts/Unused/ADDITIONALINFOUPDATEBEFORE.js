
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('AIUB:' + appTypeArray[0] + '/*/*/*');
branch('AIUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('AIUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('AIUB:' + appTypeString);

