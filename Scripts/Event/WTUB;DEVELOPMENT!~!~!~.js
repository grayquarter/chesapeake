
var childID = getCapId();
var newACNumber = AInfo['AC Number'] + '-' + AInfo['Plat/Phase'];

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && (appHasCondition('Development','Applied','Application is Within CBPA',null) || appHasCondition('Development','Pending','Application is Within CBPA',null))) {
	showMessage = true;
	comment('The Application is Within CBPA condition has not been met');
	cancel = true;
	}

// DISABLED: WTUB:Development/*/*/*:02 - CR359 DPU Pro Rata
// if ((appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA')) && wfTask == 'Utilities Review' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && (appHasCondition('Utilities','Applied','Utility Pro Rata Initial Developer',null) || appHasCondition('Utilities','Applied','Utility Pro Rata Subsequent Developer',null))) {
// 	showMessage = true;
// 	comment('Utility Pro Rata condition must be cleared before Utilities Review can be approved.');
// 	cancel = true;
// 	}

// DISABLED: WTUB:Development/*/*/*:05 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
// 	validateAccountSequence();
// 	}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	validateAccountSequence();
	}

// DISABLED: WTUB:Development/*/*/*:06 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	validateAccountSequence();
// 	}

if (isEmpty(getParent()) && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
	validateAccountSequence();
	}

// DISABLED: WTUB:Development/*/*/*:06 - script 133
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	validateAccountSequence();
// 	}

// DISABLED: WTUB:Development/*/*/*:07 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
// 	validateAccountSequence();
// 	}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
	validateAccountSequence();
	}

// DISABLED: WTUB:Development/*/*/*:08 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
// 	validateAccountSequence();
// 	}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
	validateAccountSequence();
	}

// DISABLED: WTUB:Development/*/*/*:09 - script 133 - 2/16/15
// if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
// 	updateShortNotes(newACNumber,childID);
// 	}

if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	updateShortNotes(newACNumber,childID);
	}

// DISABLED: WTUB:Development/*/*/*:110 - script 133 - 2/16/15
// if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	updateShortNotes(newACNumber,childID);
// 	}

if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
	updateShortNotes(newACNumber,childID);
	}

// DISABLED: WTUB:Development/*/*/*:111 - script 133 - 2/16/15
// if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
// 	updateShortNotes(newACNumber,childID);
// 	}

if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
	updateShortNotes(newACNumber,childID);
	}

// DISABLED: WTUB:Development/*/*/*:112 - script 133 - 2/16/15
// if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
// 	updateShortNotes(newACNumber,childID);
// 	}

if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
	updateShortNotes(newACNumber,childID);
	}

// DISABLED: WTUB:Development/*/*/*:113 - script 133 - 2/16/15
// if (isEmpty(getParent()) != true && appMatch('Development/Engineering/Plat/Other') && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	updateShortNotes(newACNumber,childID);
// 	}

