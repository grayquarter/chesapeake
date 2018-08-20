
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IRMA:' + appTypeArray[0] + '/*/*/*');
branch('IRMA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRMA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRMA:' + appTypeString);
branch('IRMA:' + appTypeArray[0] + '/*/' + appTypeArray[2] + '/' + appTypeArray[3]);
branch('IRMA:' + appTypeArray[0] + '/*/' + appTypeArray[2] + '/*');

