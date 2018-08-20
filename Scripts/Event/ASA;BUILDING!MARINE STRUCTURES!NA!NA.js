
if (AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

if (AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', resMarineFee());
}

if (publicUser) {
	updateFee('BLD_MRN_010', 'BLD_MARINE', 'FINAL', '1', 'Y');
	updateFee('BLD_MRN_040', 'BLD_MARINE', 'FINAL', '.02', 'Y');
}
