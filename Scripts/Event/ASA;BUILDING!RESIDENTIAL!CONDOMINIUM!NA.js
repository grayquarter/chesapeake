
if ((AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE; 500 YR' || AInfo['Flood Zone'] == '500 YR; Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone');
}

// DISABLED: ASA:Building/Residential/Condominium/NA:01a - CR366
// if (isEmpty(getParcelConditions(null,null,'Letter of Map Amendment or Revision',null)) && (AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE+ì-+ 500 YR' || AInfo['FloodZone']=='500 YR+ì-+ Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone')+ì-+;
// 	}

// DISABLED: ASA:Building/Residential/Condominium/NA:01b - CR366
// if (!isEmpty(getParcelConditions(null,null,'Letter of Map Amendment or Revision',null))) {
// 	editAppSpecific('Letter of Map Amendment (LOMA)','Y');
// 	}

// DISABLED: ASA:Building/Residential/Condominium/NA:02 - script 109
// if (!(getParents('Zoning/Rezoning/Proffer/Project') == '' || getParents('Zoning/Rezoning/Proffer/Project') == null)) {
// 	createChild('Zoning', 'Rezoning', 'Proffer', 'Cash', 'Created via script.');
// 	}

editAppSpecific('Permit Fee', bldPermitFee());
if (publicUser) {
	updateFee('BLD_RES_010', 'BLD_RES_CONDO', 'FINAL', '1', 'Y');
	updateFee('BLD_RES_040', 'BLD_RES_CONDO', 'FINAL', '.02', 'Y');
}

if (AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

addPhysicalProffersCondition();
