
if (currentUserID == 'ADMIN') {
	showMessage=false;
	showDebug=true;
	} else {
	showMessage=false;
	showDebug=false;
	}


//start replaced branch: GIS_ATTRIBUTES_DEVELOPMENT
 {
if (doesASIFieldExistOnRecord('Borough')) {
	varASIFieldExists = true;
	} else {
	varASIFieldExists = false;
	}

if (varASIFieldExists) {
	editAppSpecific('Borough',getGISInfo2('CHESAPEAKE','Boroughs','NAME',-1,'feet'));
	}

if (doesASIFieldExistOnRecord('Subdivision')) {
	varASIFieldExists = true;
	} else {
	varASIFieldExists = false;
	}

if (varASIFieldExists && proximity('CHESAPEAKE','Subdivisions',-1,'feet')) {
	editAppSpecific('Subdivision',getGISInfo2('CHESAPEAKE','Subdivisions','NAME',-1,'feet'));
	}

if (doesASIFieldExistOnRecord('Hydrologic Unit Code (HUC)')) {
	varASIFieldExists = true;
	} else {
	varASIFieldExists = false;
	}

if (varASIFieldExists) {
	var myArrHUC = getGISInfoArray2('CHESAPEAKE','6th Order NWBD HUC','VAHU6',-1,'feet');
	}

if (varASIFieldExists && myArrHUC.length > 0) {
	varHUC = myArrHUC[0];
	} else {
	varHUC = null;
	}

if (varASIFieldExists && myArrHUC.length > 1 && !((varHUC).indexOf(myArrHUC[1]) > -1)) {
	varHUC = varHUC + ';
	' + myArrHUC[1];
	}

if (varASIFieldExists && myArrHUC.length > 2 && !((varHUC).indexOf(myArrHUC[2]) > -1)) {
	varHUC = varHUC + ';
	' + myArrHUC[2];
	}

if (varASIFieldExists && myArrHUC.length > 3 && !((varHUC).indexOf(myArrHUC[3]) > -1)) {
	varHUC = varHUC + ';
	' + myArrHUC[3];
	}

if (varASIFieldExists && myArrHUC.length > 4 && !((varHUC).indexOf(myArrHUC[4]) > -1)) {
	varHUC = varHUC + ';
	' + myArrHUC[4];
	}

if (varASIFieldExists && varHUC) {
	editAppSpecific('Hydrologic Unit Code (HUC)',varHUC);
	}

if (doesASIFieldExistOnRecord('Within CBPA')) {
	varASIFieldExists = true;
	} else {
	varASIFieldExists = false;
	}

if (varASIFieldExists && proximity('CHESAPEAKE','Chesapeake Bay Preservation Area',-1,'feet')) {
	editAppSpecific('Within CBPA','Yes');
	} else {
	editAppSpecific('Within CBPA','No');
	}

}
//end replaced branch: GIS_ATTRIBUTES_DEVELOPMENT;
if (AInfo['Within CBPA']=='Yes') {
	addStdCondition('Development','Application is Within CBPA');
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

var profferScriptFlag=false;
var developmentTracking=false;
profferScriptFlag = lookup('DEVELOPMENT_EMSE_ProfferScript_Applies', appTypeString);
if (profferScriptFlag && profferScriptFlag=='YES' && proximity('CHESAPEAKE','Development Tracking',-1,'feet')) {
	developmentTracking=true;
	}

if (developmentTracking) {
	var myDevTrackingApps = getGISInfoArray2('CHESAPEAKE','Development Tracking','APPLICATIO',-1,'feet');
	}

if (developmentTracking && myDevTrackingApps.length > 0) {
	varDevTrackingApp = myDevTrackingApps[0];
	} else {
	varDevTrackingApp = null;
	}

if (developmentTracking && myDevTrackingApps.length > 1 && !((varDevTrackingApp).indexOf(myDevTrackingApps[1]) > -1)) {
	varDevTrackingApp = varDevTrackingApp + ';
	' + myDevTrackingApps[1];
	}

if (developmentTracking && myDevTrackingApps.length > 2 && !((varDevTrackingApp).indexOf(myDevTrackingApps[2]) > -1)) {
	varDevTrackingApp = varDevTrackingApp + ';
	' + myDevTrackingApps[2];
	}

if (developmentTracking && myDevTrackingApps.length > 3 && !((varDevTrackingApp).indexOf(myDevTrackingApps[3]) > -1)) {
	varDevTrackingApp = varDevTrackingApp + ';
	' + myDevTrackingApps[3];
	}

if (developmentTracking && myDevTrackingApps.length > 4 && !((varDevTrackingApp).indexOf(myDevTrackingApps[4]) > -1)) {
	varDevTrackingApp = varDevTrackingApp + ';
	' + myDevTrackingApps[4];
	}

if (developmentTracking) {
	showMessage = true;
	comment('<B><Font Color=RED>This property is located within a development tracking area. Application(s): ' + varDevTrackingApp + '</B></Font>');
	}

if (developmentTracking) {
	addStdCondition('Development','Development Tracking Area');
	}

if (developmentTracking) {
	var myConditionDesc = 'This property is located within a development tracking area. Application(s): ' + varDevTrackingApp;
	}

if (developmentTracking) {
	addAppCondition('Building Permit','Applied','Development Tracking Area',myConditionDesc,'Notice','N');
	}

// DISABLED: ASA:Development/*/*/*:50 - CR312 DPU Pro Rata
// if ((appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA')) && proximity('CHESAPEAKE','Pro Rata Projects - PU',-1,'feet')) {
// 	addStdCondition('Utilities','Utility Pro Rata Service Area');
// 	}

if ((appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA')) && proximity('CHESAPEAKE','Pro Rata Projects - PU',-1,'feet')) {
	flagUtilityProRataProjects();
	}

// DISABLED: ASA:Development/*/*/*:99 - send Debug
// if (publicUser && appMatch('Development/Engineering/Site/Final Plan Revision')) {
// 	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from ApplicationSubmitAfter Event', debug);
// 	}
