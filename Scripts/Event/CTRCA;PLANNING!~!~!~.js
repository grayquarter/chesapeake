
if (publicUser && (appMatch('Planning/Conditional Use/NA/NA') || appMatch('Planning/Conditional Use/Solid Waste/NA') || appMatch('Planning/Conditional Use/Excavation/NA'))) {
	addFee('PLN_010', 'PLN_CUP', 'FINAL', 1, 'Y');
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Fee added', 'Added fee to CUP record.');
}

// DISABLED: CTRCA:Planning/*/*/*:11 - 9.0 TEST
// if (publicUser && appMatch('Planning/Conditional Use/NA/NA')) {
// 	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from CTRCA Event', debug);
// 	}

if (publicUser && (appMatch('Planning/Resubdivision/Standard/NA') || appMatch('Planning/Resubdivision/Conservation/NA'))) {
	addFee('PLN_010', 'PLN_RESUB', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/Resubdivision/Agricultural/NA')) {
	addFee('PLN_AG010', 'PLN_AGSUB', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/Subdivision/Preliminary Plan/NA')) {
	addFee('PLN_PSUB_030', 'PLN_PRESUB', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/Subdivision/Variance/NA')) {
	addFee('PLN_010', 'PLN_SUBV', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/CBPA/Exception/Board') && AInfo['Type of Application'] == 'CBPA Administrative Review') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

// DISABLED: CTRCA:Planning/*/*/*:2
// br_nch('EMSE:SetContactRelationshipToContactType');
if (publicUser && appMatch('Planning/CBPA/Exception/Board') && AInfo['Type of Application'] == 'CBPA Review Committee Exception') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/CBPA/Exception/Board') && AInfo['Type of Application'] == 'CBPA Review Committee Determination') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (publicUser && appMatch('Planning/CBPA/Exception/Board') && AInfo['Type of Application'] == 'CBPA Board Exception') {
	updateFee('PLN_010', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (publicUser && appTypeString == 'Planning/Rezoning/NA/NA') {
	removeFee('PLN_010', 'FINAL');
	updateFee('PLN_010', 'PLN_REZON', 'FINAL', 1, 'N');
}

if (publicUser && appTypeString == 'Planning/PUD/Modification/NA') {
	removeFee('PLN_010', 'FINAL');
	updateFee('PLN_010', 'PLN_REZON', 'FINAL', 1, 'N');
}

if (publicUser && appTypeString == 'Planning/PUD/Creation/NA') {
	removeFee('PLN_010', 'FINAL');
	updateFee('PLN_010', 'PLN_REZON', 'FINAL', 1, 'N');
}

if (publicUser && (appMatch('Planning/PUD/Deviation/NA') || appMatch('Planning/Street Closure/NA/NA'))) {
	addFee('PLN_010', 'PLN_STCL', 'FINAL', 1, 'Y');
}

if (publicUser && appTypeString == 'Planning/Site/Preliminary Plan/NA' && AInfo['Project Type'] == 'Non-Residential') {
	updateFee('PLN_PSITE_15', 'PLN_PRESITE', 'FINAL', 1, 'Y');
	updateFee('PLN_PSITE_30', 'PLN_PRESITE', 'FINAL', 1, 'Y');
}

if (publicUser && appTypeString == 'Planning/Site/Preliminary Plan/NA' && AInfo['Project Type'] == 'Residential') {
	addFee('PLN_PSITE_10', 'PLN_PRESITE', 'FINAL', 1, 'Y');
	addFee('PLN_PSITE_31', 'PLN_PRESITE', 'FINAL', 1, 'Y');
}

if (publicUser && appTypeString == 'Planning/Site/Preliminary Plan/NA' && AInfo['Project Type'] == 'Mixed Use') {
	updateFee('PLN_PSITE_15', 'PLN_PRESITE', 'FINAL', 1, 'Y');
	updateFee('PLN_PSITE_31', 'PLN_PRESITE', 'FINAL', 1, 'Y');
}

if (publicUser && appTypeString == 'Planning/Site/Preliminary Plan/NA') {
	updateFee('PLN_PSITE_20', 'PLN_PRESITE', 'FINAL', 1, 'Y');
}

if (publicUser) {
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'CTRCA', capIDString + ' $' + balanceDue);
}
