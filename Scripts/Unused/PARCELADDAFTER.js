
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PAA:' + appTypeArray[0] + '/*/*/*');
branch('PAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PAA:' + appTypeString);

