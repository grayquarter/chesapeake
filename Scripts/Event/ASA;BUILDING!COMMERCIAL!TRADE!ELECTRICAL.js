
if (!isEmpty(getAppSpecific('Release Date'))) {
	showMessage = true;
	comment('The electrical release date custom field is not empty. Please clear this field before issuing the permit.');
}

if (publicUser) {
	calcElecFees();
}

if (publicUser && appMatch('Building/Commercial/Trade/Electrical') && validateLPDporAndBtax(true, false)) {
	checkExistAddFees('Building/Commercial/Trade/Electrical');
}
