
// DISABLED: ASIUA:Building/Commercial/Foundation/NA:01 - script 29
// if (AInfo['Job Value'] > 0) {
// 	editAppSpecific('Permit Fee', bldFee());
// 	}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldComFdnPermitFee());
}

if (appHasCondition(null, null, 'Special Inspections is Required', null) == false && AInfo['Special Inspections'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (appHasCondition(null, null, 'Landscape Inspection is Required', null) == false && AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}
