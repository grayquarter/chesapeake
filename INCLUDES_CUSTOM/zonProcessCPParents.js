function zonProcessCPParents() {

// DISABLED: EMSE:ZON_ProcessCPParents:0
// comment('Inside EMSE:ZON_ProcessCPParents' );
childCapIds = getChildren('Zoning/Rezoning/Proffer/Cash', parentCapIds[cntPar]);
if (childCapIds != null) {
	for (cntChild in childCapIds) 
//start replaced branch: EMSE:ZON_ProcessCPChildren
 {
// DISABLED: EMSE:ZON_ProcessCPChildren:0
// comment('Inside EMSE:ZON_ProcessCPChildren' );
var saveCapId = capId;
capId = childCapIds[cntChild];
logDebug(capId);
if (feeAmount('PROF_010', 'INVOICED') > 0) {
	totalLibraryProffer += aa.util.round((feeAmount('PROF_010', 'INVOICED') - feeBalance('PROF_010','ZON_CPROF')), 2);
	}

if (feeAmount('PROF_020', 'INVOICED') > 0) {
	logDebug('Fee Amount = $' + feeAmount('PROF_020', 'INVOICED'));
	logDebug('Fee Balance = $' + feeBalance('PROF_020','ZON_CPROF'));
	logDebug('Invoiced - Balance = $' +(feeAmount('PROF_020', 'INVOICED') - feeBalance('PROF_020','ZON_CPROF')));
	totalSchoolProffer += aa.util.round((feeAmount('PROF_020', 'INVOICED') - feeBalance('PROF_020','ZON_CPROF')), 2);
	logDebug('Total School Proffer = $' + totalSchoolProffer);
	}

if (feeAmount('PROF_030', 'INVOICED') > 0) {
	totalRoadsProffer += aa.util.round((feeAmount('PROF_030', 'INVOICED') - feeBalance('PROF_030','ZON_CPROF')), 2);
	}

if (feeAmount('PROF_040', 'INVOICED') > 0) {
	totalEMSProffer += aa.util.round((feeAmount('PROF_040', 'INVOICED') - feeBalance('PROF_040','ZON_CPROF')), 2);
	}

capId = saveCapId;

}
//end replaced branch: EMSE:ZON_ProcessCPChildren;
	}

}
