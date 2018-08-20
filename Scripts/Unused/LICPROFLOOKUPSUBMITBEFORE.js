
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPLSB:' + appTypeArray[0] + '/*/*/*');
branch('LPLSB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPLSB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPLSB:' + appTypeString);

