
LdIdExists = childGetByCapType('Development/Construction/Commercial/Land Disturbing');
RwIdExists = childGetByCapType('Development/Construction/Right-of-Way/Commercial');
SwIdExists = childGetByCapType('Development/Construction/Commercial/Stormwater');
ShortNotes = getShortNotes();
if (isEmpty(LdIdExists) && AInfo['Land Disturbing Permit Required'] == 'Yes') {
	childId = createChild('Development', 'Construction', 'Commercial', 'Land Disturbing', capName);
	copyOwner(capId, childId);
	copyAppSpecific(childId);
	updateShortNotes(ShortNotes, childId);
}

if (isEmpty(RwIdExists) && AInfo['Right-of-Way Permit Required'] == 'Yes') {
	childId = createChild('Development', 'Construction', 'Right-of-Way', 'Commercial', capName);
	copyOwner(capId, childId);
	copyAppSpecific(childId);
	updateShortNotes(ShortNotes, childId);
}

if (isEmpty(SwIdExists) && AInfo['Stormwater Permit Required'] == 'Yes') {
	childId = createChild('Development', 'Construction', 'Commercial', 'Stormwater', capName);
	copyOwner(capId, childId);
	copyAppSpecific(childId);
	updateShortNotes(ShortNotes, childId);
}

// DISABLED: ASIUA:Development/Construction/Subdivision/NA:05 - script 134
// var childIds = getChildren('Utilities/Utility Activation/NA/NA');
// DISABLED: ASIUA:Development/Construction/Subdivision/NA:06 - script 134
// if (!isEmpty(childIds)) {
// 	editAppSpecific('Bond Amount', getAppSpecific('Utility Defect Bond Amount'), childIds[0]);
// 	}

var siblings = [];
var parents = getParents('*/*/*/*');
if (parents) {
	for (var i in parents)
		siblings = siblings.concat(getChildren('Utilities/Utility Activation/NA/NA', parents[i]));
}

for (var i in siblings)
	var r = aa.appSpecificInfo.editSingleAppSpecific(siblings[i], 'Bond Amount', AInfo['Utility Defect Bond Amount'], 'DEFECT BOND INFORMATION');
