
// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:10 - script 149
// var totalSchoolProffer = 0;
// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:20 - script 149
// if (AInfo['Proffer Type'] = 'Schools' && typeof(PROFFERCALCULATION) == 'object') {
// 	for (rowIdx in PROFFERCALCULATION) totalSchoolProffer += parseFloat(PROFFERCALCULATION[rowIdx]['Amount Pledged']);
// 	if (String(totalSchoolProffer) == 'NaN' ) totalSchoolProffer = 0;
// 	}

// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:30 - script 149
// editAppSpecific('Total School Proffer Pledged', aa.util.round(totalSchoolProffer,2));
// totalSchoolProffer = 0;
// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:3
// if (AInfo['Proffer Type'] = 'Schools') {
// 	showMessage = true;
// 	comment('Proffer Type is ' + AInfo['Proffer Type']);
//	} else {
// 	showMessage = true;
// 	comment('You are clueless, Greg.');
// 	}

// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:40
// if (!isEmpty(AInfo['Total School Proffer Collected'])) {
// 	editAppSpecific('Total School Proffer Collected', aa.util.round(AInfo['Total School Proffer Collected'],2));
// 	}

// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:41
// if (!isEmpty(AInfo['Total EMS Proffer Collected'])) {
// 	editAppSpecific('Total EMS Proffer Collected', aa.util.round(AInfo['Total EMS Proffer Collected'],2));
// 	}

// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:42
// if (!isEmpty(AInfo['Total Roads Proffer Collected'])) {
// 	editAppSpecific('Total Roads Proffer Collected', aa.util.round(AInfo['Total Roads Proffer Collected'],2));
// 	}

// DISABLED: ASIUA:Zoning/Rezoning/Proffer/Project:43
// if (!isEmpty(AInfo['Total Library Proffer Collected'])) {
// 	editAppSpecific('Total Library Proffer Collected', aa.util.round(AInfo['Total Library Proffer Collected'],2));
// 	}

sumProffer();
