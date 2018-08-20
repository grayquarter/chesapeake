
// DISABLED: ASA:Building/Residential/Addition/NA:01 - script 49
// if ((AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

if (isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null)) && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE+ì-+ 500 YR' || AInfo['FloodZone'] == '500 YR+ì-+ Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone') + ì -  + ;
}

if (!isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null))) {
	editAppSpecific('Letter of Map Amendment (LOMA)', 'Y');
}

editAppSpecific('Permit Fee', bldPermitFee());
if (publicUser) {
	updateFee('BLD_RES_010', 'BLD_RES_ADD', 'FINAL', '1', 'Y');
	updateFee('BLD_RES_040', 'BLD_RES_ADD', 'FINAL', '.02', 'Y');
}

if (appHasCondition(null, null, 'Historic South Norfolk', null) == false && AInfo['South Norfolk Historic District'] == 'Yes') {
	addStdCondition('Building Plans', 'Historic South Norfolk');
}

addPhysicalProffersCondition();
