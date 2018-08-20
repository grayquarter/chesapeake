
if (appHasCondition(null, null, 'AE Flood Zone', null) == false && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE; 500 YR' || AInfo['Flood Zone'] == '500 YR; Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone');
}

// DISABLED: ASIUA:Building/Residential/Addition/NA:01b - CR366
// if (isEmpty(getParcelConditions(null,null,'Letter of Map Amendment or Revision',null)) && appHasCondition(null, null, 'AE Flood Zone', null) == false && (AInfo['Flood Zone =='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

editAppSpecific('Permit Fee', bldPermitFee());
addPhysicalProffersCondition();
