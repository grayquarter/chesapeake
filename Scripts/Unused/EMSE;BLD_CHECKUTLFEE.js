
var parentUtlFeeBal;
var saveId = capId;
capId = getParent();
if (capId != false) parentUtlFeeBal = feeBalance('UTL_050');
capId = saveId;
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && parentUtlFeeBal > 0) {
	addStdCondition('Building Permit','Fees Deferred');
	}

