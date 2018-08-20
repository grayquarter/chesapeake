
// DISABLED: ASA:Building/Residential/Mobile Home/NA:10 - script 49
// if ((AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

if (isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null)) && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE; 500 YR' || AInfo['FloodZone'] == '500 YR; Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone');
}

if (!isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null))) {
	editAppSpecific('Letter of Map Amendment (LOMA)', 'Y');
}
