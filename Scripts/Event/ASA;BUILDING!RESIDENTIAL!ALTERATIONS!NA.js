
if (appHasCondition(null, null, 'Historic South Norfolk', null) == false && AInfo['South Norfolk Historic District'] == 'Yes') {
	addStdCondition('Building Plans', 'Historic South Norfolk');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', bldResFee());
}

addPhysicalProffersCondition();
