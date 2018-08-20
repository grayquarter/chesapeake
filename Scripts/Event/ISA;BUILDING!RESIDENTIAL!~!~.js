
if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && inspType == 'Landscaping') {
	addTreeCountToInspection();
}

if (inspType == 'Landscaping') {
	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from ISA Event', debug);
}
