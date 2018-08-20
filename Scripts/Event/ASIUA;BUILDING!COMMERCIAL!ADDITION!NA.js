
if (appHasCondition(null, null, 'AE Flood Zone', null) == false && (AInfo['Flood Zone'] == 'Zone AE' || AInfo['Flood Zone'] == 'Zone A' || AInfo['Flood Zone'] == 'Zone AE; 500 YR' || AInfo['Flood Zone'] == '500 YR; Zone AE')) {
	addStdCondition('Building Permit', 'AE Flood Zone');
}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldPermitComFee());
} else {
	editAppSpecific('Permit Fee', 0);
}

if (appHasCondition(null, null, 'Fire Inspection is Required', null) == false && AInfo['Fire Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Fire Inspection is Required');
}

if (appHasCondition(null, null, 'Special Inspections is Required', null) == false && AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (appHasCondition(null, null, 'Asbestos Report is Required', null) == false && AInfo['Asbestos Report Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Asbestos Report is Required');
}

if (appHasCondition(null, null, 'As Built is Required', null) == false && AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

if (appHasCondition(null, null, 'Landscape Inspection is Required', null) == false && AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}

addPhysicalProffersCondition();
