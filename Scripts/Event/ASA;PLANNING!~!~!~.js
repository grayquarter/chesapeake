
// DISABLED: ASA:Planning/*/*/*:08 - test
// if (publicUser && appTypeString == 'Planning/Rezoning/NA/NA') {
// 	removeFee('PLN_010', 'FINAL');
// 	updateFee('PLN_010', 'PLN_REZON', 'FINAL', 1, 'N');
// 	}

if (AInfo['Within CBPA'] == 'Yes') {
	addStdCondition('Planning COA', 'Application is Within CBPA');
}

// DISABLED: ASA:Planning/*/*/*:20 - CR246 test
// if (publicUser) {
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','ASA',capIDString + ' $' + balanceDue);
// 	}

// DISABLED: ASA:Planning/*/*/*:30 - CR312 DPU Pro Rata
// if ((appMatch('Planning/Site/Preliminary Plan/NA') || appMatch('Planning/Subdivision/Preliminary Plan/NA') || appMatch('Planning/PUD/*/*') || appMatch('Planning/Rezoning/*/*') || appMatch('Planning/Conditional Use/*/*')) && proximity('CHESAPEAKE','Pro Rata Projects - PU',-1,'feet')) {
// 	addStdCondition('Utilities','Utility Pro Rata Service Area');
// 	}


//replaced branch(EMSE:SetContactRelationshipToContactType)
setContactRelationshipToContactType();
if ((appMatch('Planning/Site/Preliminary Plan/NA') || appMatch('Planning/Subdivision/Preliminary Plan/NA') || appMatch('Planning/PUD/*/*') || appMatch('Planning/Rezoning/*/*') || appMatch('Planning/Conditional Use/*/*')) && proximity('CHESAPEAKE', 'Pro Rata Projects - PU', -1, 'feet')) {
	flagUtilityProRataProjects();
}

// DISABLED: ASA:Planning/*/*/*:4
// if (publicUser) {
// 	removeCCFees();
//	} else {
// 	removeCCFees();
// 	}

// DISABLED: ASA:Planning/*/*/*:5
// if (publicUser) {
//	} else {
// 	addCCFees();
// 	}


//start replaced branch: GIS_PROXIMITY_ALERTS_PLANNING
{
	var myArrOSAP = getGISInfoArray2('CHESAPEAKE', 'Zoning', 'OPENSPACEPRESERVATION', -1, 'feet');
	if (myArrOSAP.length > 0) {
		varOSAP = myArrOSAP[0];
	} else {
		varOSAP = null;
	}

	if (myArrOSAP.length > 1 && !((varOSAP).indexOf(myArrOSAP[1]) > -1)) {
		varOSAP = varOSAP + ' ' + myArrOSAP[1];
	}

	if (myArrOSAP.length > 2 && !((varOSAP).indexOf(myArrOSAP[2]) > -1)) {
		varOSAP = varOSAP + ' ' + myArrOSAP[2];
	}

	if (myArrOSAP.length > 3 && !((varOSAP).indexOf(myArrOSAP[3]) > -1)) {
		varOSAP = varOSAP + ' ' + myArrOSAP[3];
	}

	if (myArrOSAP.length > 4 && !((varOSAP).indexOf(myArrOSAP[4]) > -1)) {
		varOSAP = varOSAP + ' ' + myArrOSAP[4];
	}

	if (varOSAP && ((varOSAP).indexOf('Yes') > -1)) {
		showMessage = true;
		comment('<B><Font Color=RED>Please be advised, this property has been identified as a participant in the Open Space Acquisition Program. Additional review is required by City staff.</B></Font>');
	}

	if (proximity('CHESAPEAKE', 'Chesapeake Bay Preservation Area', 0, 'feet')) {
		showMessage = true;
		comment('<B><Font Color=RED>Please be advised, this property is located within the Chesapeake Bay Preservation Area and staff review is necessary to determine if additional regulations may apply.</B></Font>');
	}

	// DISABLED: GIS_PROXIMITY_ALERTS_PLANNING:03 FIRM with Notice
	// if (!appHasCondition(null,null,'Please be advised, this property is located within a flood plain. Additional regulations may apply to your application, staff will review and advise.',null) && proximity('CHESAPEAKE','Flood Insurance Rate Map - 1999',0,'feet')) {
	// 	showMessage = true;
	// 	comment('<B><Font Color=RED>Please be advised, this property is located within the 100 year flood plain. Additional regulations may apply to your application, staff will review and advise.</B></Font>');
	// 	addAppCondition('Planning COA','Applied','Please be advised, this property is located within the 100 year flood plain. Additional regulations may apply to your application, staff will review and advise.','Please be advised, this property is located within the 100 year flood plain. Additional regulations may apply to your application, staff will review and advise.','Notice','N');
	// 	}

	if (proximity('CHESAPEAKE', 'Flood Zones', 0, 'feet')) {
		showMessage = true;
		comment('<B><Font Color=RED>Please be advised, this property is located within a flood plain. Additional regulations may apply to your application, staff will review and advise.</B></Font>');
	}

	if (proximity('CHESAPEAKE', 'Transportation Corridor Overlay District', 0, 'feet')) {
		showMessage = true;
		comment('<B><Font Color=RED>Please be advised, this property is located within the Transportation Corridor Overlay District.  Please refer to the Chesapeake Zoning Ordinance for appropriate uses in this district.</B></Font>');
	}

	var myArrZoning = getGISInfoArray2('CHESAPEAKE', 'Zoning', 'CLASS', -1, 'feet');
	if (myArrZoning.length > 0) {
		varZoning = myArrZoning[0];
	} else {
		varZoning = null;
	}

	if (myArrZoning.length > 1 && !((varZoning).indexOf(myArrZoning[1]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[1];
	}

	if (myArrZoning.length > 2 && !((varZoning).indexOf(myArrZoning[2]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[2];
	}

	if (myArrZoning.length > 3 && !((varZoning).indexOf(myArrZoning[3]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[3];
	}

	if (myArrZoning.length > 4 && !((varZoning).indexOf(myArrZoning[4]) > -1)) {
		varZoning = varZoning + ' ' + myArrZoning[4];
	}

	if (varZoning && ((varZoning).indexOf('PUD') > -1)) {
		showMessage = true;
		comment('<B><Font Color=RED>Please be advised, this property is located within a Planned Unit Development, additional development criteria may apply.  City staff will review your application and advise.</B></Font>');
	}

}
//end replaced branch: GIS_PROXIMITY_ALERTS_PLANNING;

//start replaced branch: GIS_ATTRIBUTES_PLANNING
{
	if (doesASIFieldExistOnRecord('Borough')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		editAppSpecific('Borough', getGISInfo2('CHESAPEAKE', 'Boroughs', 'NAME', -1, 'feet'));
	}

	if (doesASIFieldExistOnRecord('Current Zoning')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
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

	if (varASIFieldExists && myArrZoning.length > 1) {
		varZoning = varZoning + ' ' + myArrZoning[1];
	}

	if (varASIFieldExists && myArrZoning.length > 2) {
		varZoning = varZoning + ' ' + myArrZoning[2];
	}

	if (varASIFieldExists && myArrZoning.length > 3) {
		varZoning = varZoning + ' ' + myArrZoning[3];
	}

	if (varASIFieldExists && myArrZoning.length > 4) {
		varZoning = varZoning + ' ' + myArrZoning[4];
	}

	if (varASIFieldExists && varZoning) {
		editAppSpecific('Current Zoning', varZoning);
	}

	if (doesASIFieldExistOnRecord('Land Use Designation')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		var myArrLandUse = getGISInfoArray2('CHESAPEAKE', 'Land Use - Adopted', 'LANDUSE', -1, 'feet');
	}

	if (varASIFieldExists && myArrLandUse.length > 1) {
		showMessage = true;
		comment('<B><Font Color=RED>More than one Land Use Designation Value was returned for this parcel.</B></Font>');
	}

	if (varASIFieldExists && myArrLandUse.length > 0) {
		varLandUse = myArrLandUse[0];
	} else {
		varLandUse = null;
	}

	if (varASIFieldExists && myArrLandUse.length > 1 && !((varLandUse).indexOf(myArrLandUse[1]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[1];
	}

	if (varASIFieldExists && myArrLandUse.length > 2 && !((varLandUse).indexOf(myArrLandUse[2]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[2];
	}

	if (varASIFieldExists && myArrLandUse.length > 3 && !((varLandUse).indexOf(myArrLandUse[3]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[3];
	}

	if (varASIFieldExists && myArrLandUse.length > 4 && !((varLandUse).indexOf(myArrLandUse[4]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[4];
	}

	if (varASIFieldExists && varLandUse) {
		editAppSpecific('Land Use Designation', varLandUse);
	}

	if (doesASIFieldExistOnRecord('Land Use Classification(s)')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		var myArrLandUse = getGISInfoArray2('CHESAPEAKE', 'Land Use - Adopted', 'LANDUSE', -1, 'feet');
	}

	if (varASIFieldExists && myArrLandUse.length > 1) {
		showMessage = true;
		comment('<B><Font Color=RED>More than one Land Use Classification Value was returned for this parcel.</B></Font>');
	}

	if (varASIFieldExists && myArrLandUse.length > 0) {
		varLandUse = myArrLandUse[0];
	} else {
		varLandUse = null;
	}

	if (varASIFieldExists && myArrLandUse.length > 1 && !((varLandUse).indexOf(myArrLandUse[1]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[1];
	}

	if (varASIFieldExists && myArrLandUse.length > 2 && !((varLandUse).indexOf(myArrLandUse[2]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[2];
	}

	if (varASIFieldExists && myArrLandUse.length > 3 && !((varLandUse).indexOf(myArrLandUse[3]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[3];
	}

	if (varASIFieldExists && myArrLandUse.length > 4 && !((varLandUse).indexOf(myArrLandUse[4]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[4];
	}

	if (varASIFieldExists && varLandUse) {
		editAppSpecific('Land Use Classification(s)', varLandUse);
	}

	if (doesASIFieldExistOnRecord('Land Use Overlay District')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		var myArrLandUse = getGISInfoArray2('CHESAPEAKE', 'Land Use Overlays 2035 - Adopted', 'OVERLAY', -1, 'feet');
	}

	if (varASIFieldExists && myArrLandUse.length > 1) {
		showMessage = true;
		comment('<B><Font Color=RED>More than one Land Use Overlay DIstrict Value was returned for this parcel.</B></Font>');
	}

	if (varASIFieldExists && myArrLandUse.length > 0) {
		varLandUse = myArrLandUse[0];
	} else {
		varLandUse = null;
	}

	if (varASIFieldExists && myArrLandUse.length > 1 && !((varLandUse).indexOf(myArrLandUse[1]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[1];
	}

	if (varASIFieldExists && myArrLandUse.length > 2 && !((varLandUse).indexOf(myArrLandUse[2]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[2];
	}

	if (varASIFieldExists && myArrLandUse.length > 3 && !((varLandUse).indexOf(myArrLandUse[3]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[3];
	}

	if (varASIFieldExists && myArrLandUse.length > 4 && !((varLandUse).indexOf(myArrLandUse[4]) > -1)) {
		varLandUse = varLandUse + ' ' + myArrLandUse[4];
	}

	if (varASIFieldExists && varLandUse) {
		editAppSpecific('Land Use Overlay District', varLandUse);
	}

	if (doesASIFieldExistOnRecord('Planning Area')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		editAppSpecific('Planning Area', getGISInfo2('CHESAPEAKE', 'Planning Areas', 'PLANAREA', -1, 'feet'));
	}

	if (doesASIFieldExistOnRecord('Subdivision')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Subdivisions', -1, 'feet')) {
		editAppSpecific('Subdivision', getGISInfo2('CHESAPEAKE', 'Subdivisions', 'NAME', -1, 'feet'));
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

	if (doesASIFieldExistOnRecord('Census Tract')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		editAppSpecific('Census Tract', getGISInfo2('CHESAPEAKE', 'Census Tract 2010', 'NAME10', -1, 'feet'));
	}

	if (doesASIFieldExistOnRecord('Statistical Area')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists) {
		editAppSpecific('Statistical Area', getGISInfo2('CHESAPEAKE', 'Statistical Areas', 'STAT', -1, 'feet'));
	}

	if (doesASIFieldExistOnRecord('Fentress Restrictive Easement')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Fentress Restricted Easement', -1, 'feet')) {
		editAppSpecific('Fentress Restrictive Easement', 'Yes');
	} else {
		editAppSpecific('Fentress Restrictive Easement', 'No');
	}

	if (doesASIFieldExistOnRecord('Special Overlay District')) {
		varASIFieldExists = true;
	} else {
		varASIFieldExists = false;
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Transportation Corridor Overlay District', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'TCOD');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Great Bridge Village Gateways', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'Great Bridge Village');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'South Military Highway Corridor Study', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'South Military Highway Corridor');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Local Historic Districts', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'Historic SN');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'South Norfolk Business District', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'SNBD');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Fentress Overlay District', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'Fentress');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Watershed Protection District', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'Watershed Protection');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Transportation Corridor Overlay District', -1, 'feet') && proximity('CHESAPEAKE', 'Great Bridge Village Gateways', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'TCOD Great Bridge Village');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'Transportation Corridor Overlay District', -1, 'feet') && proximity('CHESAPEAKE', 'Watershed Protection District', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'TCOD Watershed Protection');
	}

	if (varASIFieldExists && proximity('CHESAPEAKE', 'South Norfolk Business District', -1, 'feet') && proximity('CHESAPEAKE', 'Local Historic Districts', -1, 'feet')) {
		editAppSpecific('Special Overlay District', 'SNBD Historic');
	}

}
//end replaced branch: GIS_ATTRIBUTES_PLANNING;
