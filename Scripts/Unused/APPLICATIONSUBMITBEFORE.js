
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASB:' + appTypeArray[0] + '/*/*/*');
branch('ASB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ASB:' + appTypeString);

