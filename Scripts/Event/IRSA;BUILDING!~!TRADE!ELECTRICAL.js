
if (inspType == 'Service' && inspResult == 'Approved for Early Release') {
	updateTask('Inspections', 'Approved for Early Release', 'updated by Inspection Result', '');
}

// DISABLED: IRSA:Building/*/Trade/Electrical:20 - script 147
// if (inspType == 'Final' && inspResult == 'Approved') {
// 	closeTask('Inspections','Approved','updated by Inspection Result','');
// 	}
