
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('CRB:' + appTypeArray[0] + '/*/*/*');
branch('CRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CRB:' + appTypeString);

