
var totalFee = 0;
if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Small Meter Installation Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

editAppSpecific('Total Small Meter Installation fee', aa.util.round(totalFee, 2));
totalFee = 0;
if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Large Meter Installation Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total Large Meter Installation Fee', String(aa.util.round(totalFee, 2)));
	totalFee = 0;
}

if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Water Connection Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total Water Connection Fee', aa.util.round(totalFee, 2));
	totalFee = 0;
}

if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Fire Connection Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total Fire Connection Fee', aa.util.round(totalFee, 2));
	totalFee = 0;
}

if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Irrigation Connection Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total Irrigation Connection Fee', aa.util.round(totalFee, 2));
	totalFee = 0;
}

if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['Sewer Connection Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total Sewer Connection Fee', aa.util.round(totalFee, 2));
	totalFee = 0;
}

if (typeof(CONNECTIONFEEPAYMENTS) == 'object') {
	for (rowIdx in CONNECTIONFEEPAYMENTS)
		totalFee += parseFloat(CONNECTIONFEEPAYMENTS[rowIdx]['HRSD Fee']);
	if (String(totalFee) == 'NaN')
		totalFee = 0;
}

if (true) {
	editAppSpecific('Total HRSD Fee', aa.util.round(totalFee, 2));
	totalFee = 0;
}

autoAssessFeesByGisAttributesV2();
getDuplicateUCFRecords(capId);
