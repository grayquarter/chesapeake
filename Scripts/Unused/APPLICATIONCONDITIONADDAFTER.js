
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ACAA:' + appTypeArray[0] + '/*/*/*');
branch('ACAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ACAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ACAA:' + appTypeString);

