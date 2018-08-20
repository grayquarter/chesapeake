
editAppSpecific('Permit Fee', bldPermitFee());
if (hasPrimaryAddressInCap(capId) == false) {
	addrs = aa.address.getAddressByCapId(capId).getOutput();
	addrs[0].setPrimaryFlag('Y');
	aa.address.editAddress(addrs[0]);
}

if (AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

// DISABLED: ASA:Building/Residential/Model/Permit:40 - script 49
// if ((AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

if (isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null)) && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE+�-+ 500 YR' || AInfo['FloodZone'] == '500 YR+�-+ Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone') + � -  + ;
}

if (!isEmpty(getParcelConditions(null, null, 'Letter of Map Amendment or Revision', null))) {
	editAppSpecific('Letter of Map Amendment (LOMA)', 'Y');
}

addPhysicalProffersCondition();
