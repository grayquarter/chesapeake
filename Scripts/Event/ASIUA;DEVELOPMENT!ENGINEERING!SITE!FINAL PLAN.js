
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

if (AInfo['Number of Multi-Family Units'] > 0) {
	editAppSpecific('Residential Final Construction Site Plan Fee', devFSPRes());
}

if (AInfo['Total Disturbed Acreage'] > 0) {
	editAppSpecific('Non-Residential Final Construction Site Plan Fee', devFSPNonRes());
}

// DISABLED: ASIUA:Development/Engineering/Site/Final Plan:30a - CR255
// if (doesASIFieldExistOnRecord('BMP Types')) {
// 	varASIFieldExists = true;
//	} else {
// 	varASIFieldExists = false;
// 	}

// DISABLED: ASIUA:Development/Engineering/Site/Final Plan:30b - CR255
// if (varASIFieldExists) {
// 	editAppSpecific('BMP Types',getGISInfo('CHESAPEAKE','Address Points','LONGITUDE') + ',' + getGISInfo('CHESAPEAKE','Address Points','LATITUDE'));
// 	}
