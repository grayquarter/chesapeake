
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IFA:' + appTypeArray[0] + '/*/*/*');
branch('IFA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IFA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IFA:' + appTypeString);

