
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('FAB:' + appTypeArray[0] + '/*/*/*');
branch('FAB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('FAB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('FAB:' + appTypeString);

