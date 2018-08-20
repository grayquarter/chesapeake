
if (appHasCondition(null, null, 'Fire Inspection is Required', null) == false && AInfo['Fire Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Fire Inspection is Required');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', bldFee());
}

if (appHasCondition(null, null, 'Special Inspections is Required', null) == false && AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

if (AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}

if (appHasCondition(null, null, 'Asbestos Report is Required', null) == false && AInfo['Asbestos Report Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Asbestos Report is Required');
}

addPhysicalProffersCondition();
