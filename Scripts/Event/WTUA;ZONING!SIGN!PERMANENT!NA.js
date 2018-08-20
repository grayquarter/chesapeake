
if (wfTask == 'Zoning Review' && wfStatus == 'Denied') {
	deactivateTask('Zoning Review');
}

if (wfTask == 'Engineering Review' && wfStatus == 'Denied') {
	deactivateTask('Planning Review');
}
