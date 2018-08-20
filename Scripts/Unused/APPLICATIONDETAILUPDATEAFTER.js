
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ADUA:' + appTypeArray[0] + '/*/*/*');
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ADUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ADUA:' + appTypeString);
// DISABLED: ApplicationDetailUpdateAfter:98
// showMessage = true;
// comment('Assigned user is ' + capDetail.getAsgnStaff());
// DISABLED: ApplicationDetailUpdateAfter:99
// assignTask('Plans Distribution',capDetail.getAsgnStaff());
// assignTask('Engineering Review',capDetail.getAsgnStaff());
// assignTask('Review Coordination',capDetail.getAsgnStaff());

