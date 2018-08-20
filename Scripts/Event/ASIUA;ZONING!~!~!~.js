
if (appHasCondition(null, null, 'Application is Within CBPA', null) == false && AInfo['Within CBPA'] == 'Yes') {
	addStdCondition('Zoning Permit', 'Application is Within CBPA');
}
