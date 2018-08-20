
var parentId = getCapId();
// DISABLED: WTUA:Building/Residential/New Building/NA:05 - script 57
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['CBPA Review Required'] == 'Yes') {
// 	childId = createChild('Development','Construction','Residential','Land Disturbing',capName);
// 	copyAppSpecific(childId);
// 	copyOwner(parentId,childId);
// 	addFee('DEV_RLD_010','DEV_RLD','FINAL',1,'Y',childId);
// 	copyLicensedProf(parentId,childId);
// 	}

// DISABLED: WTUA:Building/Residential/New Building/NA:06 - script 57
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['CBPA Review Required'] == 'No') {
// 	childId = createChild('Building','Residential','Land Disturbing','NA',capName);
// 	copyAppSpecific(childId);
// 	copyOwner(parentId,childId);
// 	addFee('RES_RLD_010','BLD_RES_RLD','FINAL',1,'Y',childId);
// 	copyLicensedProf(parentId,childId);
// 	}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && isEmpty(childGetByCapType('Building/Residential/Land Disturbing/NA'))) {
	childId = createChild('Building', 'Residential', 'Land Disturbing', 'NA', capName);
	copyAppSpecific(childId);
	copyOwner(parentId, childId);
	addFee('RES_RLD_010', 'BLD_RES_RLD', 'FINAL', 1, 'Y', childId);
	copyLicensedProf(parentId, childId);
	editAppSpecific('Total Disturbed Acreage', 0.34);
}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Driveway Entrance Permit Required'] == 'Yes' && AInfo['Existing Curb and Gutter'] == 'Yes') {
	childId = createChild('Building', 'Residential', 'Driveway', 'NA', capName);
	copyAppSpecific(childId);
	copyOwner(parentId, childId);
	addFee('BLD_RESD_010', 'BLD_RES_DRIVE', 'FINAL', 1, 'Y', childId);
	copyLicensedProf(parentId, childId);
}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Driveway Entrance Permit Required'] == 'Yes' && AInfo['Existing Curb and Gutter'] == 'No') {
	childId = createChild('Building', 'Residential', 'Driveway', 'NA', capName);
	copyAppSpecific(childId);
	copyOwner(parentId, childId);
	addFee('BLD_RESD_010', 'BLD_RES_DRIVE', 'FINAL', 1, 'Y', childId);
	copyLicensedProf(parentId, childId);
}

// DISABLED: WTUA:Building/Residential/New Building/NA:08B - script 57 - OLD
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Driveway Entrance Permit Required'] == 'Yes' && AInfo['Existing Curb and Gutter'] == 'No') {
// 	childId = createChild('Development','Construction','Right-of-Way','Driveway',capName);
// 	copyAppSpecific(childId);
// 	copyOwner(parentId,childId);
// 	addFee('ROWD_010','DEV_ROW_DRIVE','FINAL',1,'Y',childId);
// 	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	createCashProffer();
}

// DISABLED: WTUA:Building/Residential/New Building/NA:1
// br_nch('EMSE:BLD_CheckUtlFee');
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	scheduleInspection('Land Plan', 7, null, null, null);
}

if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review') && AInfo['Existing Curb and Gutter'] == 'No' && !isEmpty(childGetByCapType('Development/Engineering/Site/Misc')) && verifyDocumentOnChild(getCapId(), childGetByCapType('Development/Engineering/Site/Misc'), 'Site Plan') == false) {
	copyDocumentsByCategory(getCapId(), childGetByCapType('Development/Engineering/Site/Misc'), 'Site Plan');
}

if ((isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) && isEmpty(childGetByCapType('Building/Residential/Driveway/NA')) && isEmpty(childGetByCapType('Building/Residential/Land Disturbing/NA'))) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendPermitReadyToIssueNotification();
}

if ((!isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) || !isEmpty(childGetByCapType('Building/Residential/Driveway/NA')) || !isEmpty(childGetByCapType('Building/Residential/Land Disturbing/NA'))) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendPermitWithChildrenReadyToIssueNotification();
}
