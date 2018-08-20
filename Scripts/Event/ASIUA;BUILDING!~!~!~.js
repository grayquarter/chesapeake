
if (appHasCondition(null, null, 'Application is Within CBPA', null) == false && AInfo['Within CBPA'] == 'Yes') {
	addStdCondition('Building Permit', 'Application is Within CBPA');
}
