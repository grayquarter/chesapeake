
if (appHasCondition(null, null, 'Fire Inspection is Required', null) == false && AInfo['Fire Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Fire Inspection is Required');
}

if (appHasCondition(null, null, 'Asbestos Report is Required', null) == false && AInfo['Asbestos Report Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Asbestos Report is Required');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', bldFee());
}

if (appHasCondition(null, null, 'Special Inspections is Required', null) == false && AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

addPhysicalProffersCondition();
