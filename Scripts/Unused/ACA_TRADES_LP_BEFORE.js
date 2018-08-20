
var rlpId;
lpList = cap.getLicenseProfessionalList();
if(lpList != null && lpList.size() > 0) rlpId = lpList.get(0);
if (rlpId != null) {
	LicenseType = rlpId.getLicenseType();
	}

if ((lpList != null) && (lpList.size() == 1) && (LicenseType == 'Contractor')) {
	cancel = true;
	showMessage = true;
	comment('A tradesman is required for this permit.  Please add one before continuing application.');
	} else {
	cancel = false;
	}

if ((lpList != null) && (lpList.size() == 1) && (LicenseType == 'Tradesman')) {
	cancel = true;
	showMessage = true;
	comment('A contractor is required for this permit.  Please add one before continuing application.');
	} else {
	cancel = false;
	}

isSameLicense();

