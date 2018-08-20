function globalFlags() {

if (matches(currentUserID, 'BYRNE')) {
	showMessage = true;
	showDebug = 3;
	}

// DISABLED: EMSE:GlobalFlags:10
// if (publicUser) {
// 	showMessage = true;
// 	showDebug = 3;
// 	}

// DISABLED: EMSE:GlobalFlags:11
// if (if(currentUserGroup && currentUserGroup.indexOf('Admin') > -1)) {
// 	showDebug = 3;
// 	showMessage = true;
//	} else {
// 	showDebug = false;
// 	showMessage = false;
// 	}

if (matches(currentUserID, 'GHESS')) {
	showMessage = true;
	showDebug = 3;
	}

if (matches(currentUserID, 'RFOGGO')) {
	showMessage = true;
	showDebug = 3;
	}

if (matches(currentUserID, 'GLEE', 'MLINSCHEID', 'DHEDD', 'MDELK','GQUARTER')) {
	showMessage = true;
	showDebug = 3;
	}

docReviewStatusStdChoice = 'Plan Review Document Review Status - Planning';
docStatusStdChoice = 'Plan Review Document Status - General';
params = aa.util.newHashtable();
acaUrl = 'https://acasupp3.accela.com/chesapeake/';

}
