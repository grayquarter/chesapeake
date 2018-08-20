
myTable = loadASITable('DRAINAGE PRO-RATA');
proRataAmount = 0;
if (myTable.length > 0) {
	for (thisRow in myTable)
		proRataAmount += parseFloat(myTable[thisRow]['Drainage Pro Rata Amount']);
}

if (myTable.length > 0) {
	r = aa.appSpecificInfo.editSingleAppSpecific(capId, 'Drainage Pro-Rata', aa.util.round(proRataAmount, 2), null);
	logDebug('ASI edit result ' + r.getErrorMessage());
}
