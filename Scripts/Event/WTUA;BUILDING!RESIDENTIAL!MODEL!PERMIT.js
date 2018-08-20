
var parentId = getCapId();
// DISABLED: WTUA:Building/Residential/Model/Permit:02 - script 57
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['CBPA Review Required'] == 'Yes') {
// 	childId = createChild('Development','Construction','Residential','Land Disturbing',capName);
// 	copyAppSpecific(childId);
// 	copyOwner(parentId,childId);
// 	addFee('DEV_RLD_010','DEV_RLD','FINAL',1,'Y',childId);
// 	copyLicensedProf(parentId,childId);
// 	}

// DISABLED: WTUA:Building/Residential/Model/Permit:03 - script 57
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['CBPA Review Required'] == 'No' && isEmpty(childGetByCapType('Building/Residential/Land Disturbing/NA'))) {
// 	childId = createChild('Building','Residential','Land Disturbing','NA',capName);
// 	copyAppSpecific(childId);
// 	copyOwner(parentId,childId);
// 	addFee('RES_RLD_010','BLD_RES_RLD','FINAL',1,'Y',childId);
// 	copyLicensedProf(parentId,childId);
// 	editAppSpecific('Total Disturbed Acreage',0.34);
// 	}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions') && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['Land Disturbing Permit Type'] == 'Residential' && isEmpty(childGetByCapType('Building/Residential/Land Disturbing/NA'))) {
	childId = createChild('Building', 'Residential', 'Land Disturbing', 'NA', capName);
	copyAppSpecific(childId);
	copyOwner(parentId, childId);
	addFee('RES_RLD_010', 'BLD_RES_RLD', 'FINAL', 1, 'Y', childId);
	copyLicensedProf(parentId, childId);
	editAppSpecific('Total Disturbed Acreage', 0.34);
}

if (wfTask == 'Record Creation' && wfStatus == 'Ready for Review' && AInfo['Land Disturbing Permit Required'] == 'Yes' && AInfo['Land Disturbing Permit Type'] == 'Commercial' && isEmpty(childGetByCapType('Development/Construction/Commercial/Land Disturbing'))) {
	childId = createChild('Development', 'Construction', 'Commercial', 'Land Disturbing', capName);
	copyOwner(parentId, childId);
	editAppSpecific('Total Disturbed Acreage', '0.6', childId);
	editAppSpecific('Approved for E&S', dateAdd(null, 0), childId);
	editAppSpecific('Permit Fee', 209, childId);
	addFee('DEV_LD_010', 'DEV_LNDISTRB', 'FINAL', 1, 'Y', childId);
	copyLicensedProf(parentId, childId);
	runReportAsyncAttach(childId, 'In Lieu Of Site Plan');
	saveCapId = capId;
	capId = childId;
	copyParcelGisObjects();

	//start replaced branch: ASA:Development/*/*/*
	{
		//start replaced branch: GIS_ATTRIBUTES_DEVELOPMENT
		{
			if (doesASIFieldExistOnRecord('Borough')) {
				varASIFieldExists = true;
			} else {
				varASIFieldExists = false;
			}

			if (varASIFieldExists) {
				editAppSpecific('Borough', getGISInfo2('CHESAPEAKE', 'Boroughs', 'NAME', -1, 'feet'));
			}

			if (doesASIFieldExistOnRecord('Subdivision')) {
				varASIFieldExists = true;
			} else {
				varASIFieldExists = false;
			}

			if (varASIFieldExists && proximity('CHESAPEAKE', 'Subdivisions', -1, 'feet')) {
				editAppSpecific('Subdivision', getGISInfo2('CHESAPEAKE', 'Subdivisions', 'NAME', -1, 'feet'));
			}

			if (doesASIFieldExistOnRecord('Hydrologic Unit Code (HUC)')) {
				varASIFieldExists = true;
			} else {
				varASIFieldExists = false;
			}

			if (varASIFieldExists) {
				var myArrHUC = getGISInfoArray2('CHESAPEAKE', '6th Order NWBD HUC', 'VAHU6', -1, 'feet');
			}

			if (varASIFieldExists && myArrHUC.length > 0) {
				varHUC = myArrHUC[0];
			} else {
				varHUC = null;
			}

			if (varASIFieldExists && myArrHUC.length > 1 && !((varHUC).indexOf(myArrHUC[1]) > -1)) {
				varHUC = varHUC + ' ' + myArrHUC[1];
			}

			if (varASIFieldExists && myArrHUC.length > 2 && !((varHUC).indexOf(myArrHUC[2]) > -1)) {
				varHUC = varHUC + '	' + myArrHUC[2];
			}

			if (varASIFieldExists && myArrHUC.length > 3 && !((varHUC).indexOf(myArrHUC[3]) > -1)) {
				varHUC = varHUC + '	' + myArrHUC[3];
			}

			if (varASIFieldExists && myArrHUC.length > 4 && !((varHUC).indexOf(myArrHUC[4]) > -1)) {
				varHUC = varHUC + '	' + myArrHUC[4];
			}

			if (varASIFieldExists && varHUC) {
				editAppSpecific('Hydrologic Unit Code (HUC)', varHUC);
			}

			if (doesASIFieldExistOnRecord('Within CBPA')) {
				varASIFieldExists = true;
			} else {
				varASIFieldExists = false;
			}

			if (varASIFieldExists && proximity('CHESAPEAKE', 'Chesapeake Bay Preservation Area', -1, 'feet')) {
				editAppSpecific('Within CBPA', 'Yes');
			} else {
				editAppSpecific('Within CBPA', 'No');
			}

		}
		//end replaced branch: GIS_ATTRIBUTES_DEVELOPMENT;
		if (AInfo['Within CBPA'] == 'Yes') {
			addStdCondition('Development', 'Application is Within CBPA');
		}

		// DISABLED: ASA:Development/*/*/*:30 - script 133 - 2/16/15
		// if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other'))) {
		// 	updateShortNotes('');
		// 	}

		if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other'))) {
			updateShortNotes('');
		}

		// DISABLED: ASA:Development/*/*/*:31 - script 133 - 2/16/15
		// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other'))) {
		// 	updateSequenceInSC();
		// 	}

		if (!publicUser && isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other'))) {
			updateSequenceInSC();
		}

		if (publicUser && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub') || appMatch('Development/Engineering/Plat/Other'))) {
			updateSequence();
		}

		var profferScriptFlag = false;
		var developmentTracking = false;
		profferScriptFlag = lookup('DEVELOPMENT_EMSE_ProfferScript_Applies', appTypeString);
		if (profferScriptFlag && profferScriptFlag == 'YES' && proximity('CHESAPEAKE', 'Development Tracking', -1, 'feet')) {
			developmentTracking = true;
		}

		if (developmentTracking) {
			var myDevTrackingApps = getGISInfoArray2('CHESAPEAKE', 'Development Tracking', 'APPLICATIO', -1, 'feet');
		}

		if (developmentTracking && myDevTrackingApps.length > 0) {
			varDevTrackingApp = myDevTrackingApps[0];
		} else {
			varDevTrackingApp = null;
		}

		if (developmentTracking && myDevTrackingApps.length > 1 && !((varDevTrackingApp).indexOf(myDevTrackingApps[1]) > -1)) {
			varDevTrackingApp = varDevTrackingApp + ' ' + myDevTrackingApps[1];
		}

		if (developmentTracking && myDevTrackingApps.length > 2 && !((varDevTrackingApp).indexOf(myDevTrackingApps[2]) > -1)) {
			varDevTrackingApp = varDevTrackingApp + ' ' + myDevTrackingApps[2];
		}

		if (developmentTracking && myDevTrackingApps.length > 3 && !((varDevTrackingApp).indexOf(myDevTrackingApps[3]) > -1)) {
			varDevTrackingApp = varDevTrackingApp + ' ' + myDevTrackingApps[3];
		}

		if (developmentTracking && myDevTrackingApps.length > 4 && !((varDevTrackingApp).indexOf(myDevTrackingApps[4]) > -1)) {
			varDevTrackingApp = varDevTrackingApp + ' ' + myDevTrackingApps[4];
		}

		if (developmentTracking) {
			showMessage = true;
			comment('<B><Font Color=RED>This property is located within a development tracking area. Application(s): ' + varDevTrackingApp + '</B></Font>');
		}

		if (developmentTracking) {
			addStdCondition('Development', 'Development Tracking Area');
		}

		if (developmentTracking) {
			var myConditionDesc = 'This property is located within a development tracking area. Application(s): ' + varDevTrackingApp;
		}

		if (developmentTracking) {
			addAppCondition('Building Permit', 'Applied', 'Development Tracking Area', myConditionDesc, 'Notice', 'N');
		}

		// DISABLED: ASA:Development/*/*/*:50 - CR312 DPU Pro Rata
		// if ((appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA')) && proximity('CHESAPEAKE','Pro Rata Projects - PU',-1,'feet')) {
		// 	addStdCondition('Utilities','Utility Pro Rata Service Area');
		// 	}

		if ((appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA')) && proximity('CHESAPEAKE', 'Pro Rata Projects - PU', -1, 'feet')) {
			flagUtilityProRataProjects();
		}

		// DISABLED: ASA:Development/*/*/*:99 - send Debug
		// if (publicUser && appMatch('Development/Engineering/Site/Final Plan Revision')) {
		// 	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from ApplicationSubmitAfter Event', debug);
		// 	}

	}
	//end replaced branch: ASA:Development/*/*/*;
	capId = saveCapId;
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

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	createCashProffer();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	scheduleInspection('Land Plan', '7', null, null, null);
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

// DISABLED: WTUA:Building/Residential/Model/Permit:95 - CR122 TEST
// if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && !publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) sendPermitWithChildrenBalanceDueNotification();
// 	else autoIssueBldPermit(capId);
// 	}

// DISABLED: WTUA:Building/Residential/Model/Permit:97 - GLEE test for CR122
// childBalanceDue = getChildrenBalance('*/*/*/*');
// if(childBalanceDue > 0) sendPermitWithChildrenReadyToIssueNotification();
// DISABLED: WTUA:Building/Residential/Model/Permit:98 - GLEE test for CR122
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Issued') && !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	}

// DISABLED: WTUA:Building/Residential/Model/Permit:99 - GLEE test for CR122
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) &&  balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Issued') && childBalanceDue > 0) {
// 	sendPermitWithChildrenBalanceDueNotification();
//	} else {
// 	autoIssueBldPermit(capId);
// 	}
