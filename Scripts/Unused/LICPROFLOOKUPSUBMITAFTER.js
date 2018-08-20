
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPLSA:' + appTypeArray[0] + '/*/*/*');
branch('LPLSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPLSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPLSA:' + appTypeString);

