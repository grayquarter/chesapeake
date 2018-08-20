
if ((appMatch('Zoning/Accessory Structure/NA/NA') || appMatch('Zoning/Fence/NA/NA')) && lookup('INSPECTION_NOTIFICATION', inspType) == 'Include') {
	sendInspectionResultNotification();
}
