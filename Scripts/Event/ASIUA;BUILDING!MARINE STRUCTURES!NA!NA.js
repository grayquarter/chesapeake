
if (appHasCondition(null, null, 'Special Inspections is Required', null) == false && AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (appHasCondition(null, null, 'As Built is Required', null) == false && AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

if (appHasCondition(null, null, 'Landscape Inspection is Required', null) == false && AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', resMarineFee());
}
