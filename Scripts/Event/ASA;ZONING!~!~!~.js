
// DISABLED: ASA:Zoning/*/*/*:2
// if (publicUser) {
// 	removeCCFees();
//	} else {
// 	removeCCFees();
// 	}

// DISABLED: ASA:Zoning/*/*/*:3
// if (publicUser) {
//	} else {
// 	addCCFees();
// 	}

if (!isEmpty(getAppSpecific('Job Value'))) {
	var jvRound = Math.round(getAppSpecific('Job Value'));
	editAppSpecific('Job Value', jvRound);
}

//start replaced branch: GIS_ATTRIBUTES_ZONING
{
	if (doesASIFieldExistOnRecord('Fentress Noise Zone')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Fentress Accident Potential Zone', -1, 'feet')) {
		editAppSpecific('Fentress Noise Zone', 'Yes');
	} else {
		editAppSpecific('Fentress Noise Zone', 'No');
	}

	if (doesASIFieldExistOnRecord('Fentress Restricted Easement')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Fentress Restricted Easement', -1, 'feet')) {
		editAppSpecific('Fentress Restricted Easement', 'Yes');
	} else {
		editAppSpecific('Fentress Restricted Easement', 'No');
	}

	if (doesASIFieldExistOnRecord('Flood Zone')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		var myArrFlood = getGISInfoArray2('CHESAPEAKE', 'Flood Zones', 'FLD_ZONE', -1, 'feet');
	}

	if (varASIFieldExists && myArrFlood.length > 0) {
		varFloodTemp = myArrFlood[0];
	} else {
		varFloodTemp = null;
	}

	if (varASIFieldExists && varFloodTemp == '0.2 PCT ANNUAL CHANCE FLOOD HAZARD') {
		varFloodTemp = '500 YR';
	}

	if (varASIFieldExists && varFloodTemp == 'AE') {
		varFloodTemp = 'Zone AE';
	}

	if (varASIFieldExists && myArrFlood.length > 0) {
		varFlood = varFloodTemp;
	} else {
		varFlood = null;
	}

	if (varASIFieldExists && myArrFlood.length > 1) {
		varFloodTemp = myArrFlood[1];
	} else {
		varFloodTemp = null;
	}

	if (varASIFieldExists && varFloodTemp == '0.2 PCT ANNUAL CHANCE FLOOD HAZARD') {
		varFloodTemp = '500 YR';
	}

	if (varASIFieldExists && varFloodTemp == 'AE') {
		varFloodTemp = 'Zone AE';
	}

	if (varASIFieldExists && myArrFlood.length > 1 && !((varFlood).indexOf(varFloodTemp) > -1)) {
		varFlood = varFlood + ' ' + varFloodTemp;
	}

	if (varASIFieldExists && myArrFlood.length > 2) {
		varFloodTemp = myArrFlood[2];
	} else {
		varFloodTemp = null;
	}

	if (varASIFieldExists && varFloodTemp == '0.2 PCT ANNUAL CHANCE FLOOD HAZARD') {
		varFloodTemp = '500 YR';
	}

	if (varASIFieldExists && myArrFlood.length > 2 && !((varFlood).indexOf(varFloodTemp) > -1)) {
		varFlood = varFlood + ' ' + varFloodTemp;
	}

	if (varASIFieldExists && varFlood) {
		editAppSpecific('Flood Zone', varFlood);
	}

	if (doesASIFieldExistOnRecord('Great Bridge Village')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Great Bridge Village Gateways', -1, 'feet')) {
		editAppSpecific('Great Bridge Village', 'Yes');
	} else {
		editAppSpecific('Great Bridge Village', 'No');
	}

	if (doesASIFieldExistOnRecord('Northwest River Watershed')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Watershed Protection District', -1, 'feet')) {
		editAppSpecific('Northwest River Watershed', 'Yes');
	} else {
		editAppSpecific('Northwest River Watershed', 'No');
	}

	// DISABLED: GIS_ATTRIBUTES_ZONING:05c2a Flood Zone
	// if (varASIFieldExists && varFloodTemp == 'AE') {
	// 	varFloodTemp = 'Zone AE';
	// 	}

	if (doesASIFieldExistOnRecord('South Norfolk Business District')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'South Norfolk Business District', -1, 'feet')) {
		editAppSpecific('South Norfolk Business District', 'Yes');
	} else {
		editAppSpecific('South Norfolk Business District', 'No');
	}

	if (doesASIFieldExistOnRecord('South Norfolk Overlay')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'South Norfolk Business District', -1, 'feet')) {
		editAppSpecific('South Norfolk Overlay', 'Yes');
	} else {
		editAppSpecific('South Norfolk Overlay', 'No');
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

	if (doesASIFieldExistOnRecord('Zoning Classification')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		var myArrZoning = getGISInfoArray2('CHESAPEAKE', 'Zoning', 'CLASS', -1, 'feet');
	}

	if (varASIFieldExists && myArrZoning.length > 1) {
		showMessage = true;
		comment('<B><Font Color=RED>More than one Zoning District Value was returned for this parcel.</B></Font>');
	}

	if (varASIFieldExists && myArrZoning.length > 0) {
		varZoning = myArrZoning[0];
	} else {
		varZoning = null;
	}

	if (varASIFieldExists && myArrZoning.length > 1 && !((varZoning).indexOf(myArrZoning[1]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[1];
	}

	if (varASIFieldExists && myArrZoning.length > 2 && !((varZoning).indexOf(myArrZoning[2]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[2];
	}

	if (varASIFieldExists && myArrZoning.length > 3 && !((varZoning).indexOf(myArrZoning[3]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[3];
	}

	if (varASIFieldExists && myArrZoning.length > 4 && !((varZoning).indexOf(myArrZoning[4]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[4];
	}

	if (varASIFieldExists && varZoning) {
		editAppSpecific('Zoning Classification', varZoning);
	}

	if (doesASIFieldExistOnRecord('Base Flood Elevation')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Flood Zones', -1, 'feet')) {
		editAppSpecific('Base Flood Elevation', getGISInfo2('CHESAPEAKE', 'Flood Zones', 'STATIC_BFE', -1, 'feet'));
	}

}
//end replaced branch: GIS_ATTRIBUTES_ZONING;
if (AInfo['Within CBPA'] == 'Yes') {
	addStdCondition('Zoning Permit', 'Application is Within CBPA');
}



if (!publicUser) {
	runDPORCheck(capId);
}

var profferScriptFlag = false;
var developmentTracking = false;
profferScriptFlag = lookup('ZONING_EMSE_ProfferScript_Applies', appTypeString);
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
	addStdCondition('Zoning', 'Development Tracking Area');
}

if (developmentTracking) {
	var myConditionDesc = 'Application(s): ' + varDevTrackingApp;
}

if (developmentTracking) {
	addAppCondition('Building Permit', 'Applied', 'Development Tracking Area', myConditionDesc, 'Notice', 'N');
}
