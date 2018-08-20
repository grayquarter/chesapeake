
// DISABLED: ContactEditAfter:1
// showDebug = true;
// showMessage= true;
// br_nch('EMSE:GlobalFlags');
branch('CEA:' + appTypeArray[0] + '/*/*/*');
branch('CEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CEA:' + appTypeString);

