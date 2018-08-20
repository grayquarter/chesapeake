
if (AInfo['Number of Multi-Family Units'] > 0) {
	editAppSpecific('Residential Final Construction Site Plan Fee', devFSPRes());
}

if (AInfo['Total Impervious Area (Acres)'] > 0) {
	editAppSpecific('Non-Residential Final Construction Site Plan Fee', devFSPNonRes());
}
