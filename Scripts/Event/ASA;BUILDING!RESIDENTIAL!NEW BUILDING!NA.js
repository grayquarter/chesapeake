
// DISABLED: ASA:Building/Residential/New Building/NA:05 - script 49
// if ((AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

if (isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null)) && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE+ì-+ 500 YR' || AInfo['FloodZone'] == '500 YR+ì-+ Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone') + ì -  + ;
}

if (!isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null))) {
	editAppSpecific('Letter of Map Amendment (LOMA)', 'Y');
}

// DISABLED: ASA:Building/Residential/New Building/NA:06 - script 109
// if (!(getParents('Zoning/Rezoning/Proffer/Project') == '' || getParents('Zoning/Rezoning/Proffer/Project') == null)) {
// 	createChild('Zoning', 'Rezoning', 'Proffer', 'Cash', 'Created via script.');
// 	}

// DISABLED: ASA:Building/Residential/New Building/NA:10 - script 127
// if (publicUser) {
// 	updateFee('BLD_RES_010','BLD_RES_NEW','FINAL','1','Y');
// 	updateFee('BLD_RES_040','BLD_RES_NEW','FINAL','.02','Y');
// 	}

editAppSpecific('Permit Fee', bldPermitFee());
if (appHasCondition(null, null, 'Historic South Norfolk', null) == false && AInfo['South Norfolk Historic District'] == 'Yes') {
	addStdCondition('Building Plans', 'Historic South Norfolk');
}

addPhysicalProffersCondition();
