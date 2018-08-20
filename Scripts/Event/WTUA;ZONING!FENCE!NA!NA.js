
// DISABLED: WTUA:Zoning/Fence/NA/NA:1
// if (wfTask == 'Zoning Review' && wfStatus == 'Withdrawn') {
// 	deactivateTask('Zoning Review');
// 	}

if (wfTask == 'Review Coordination' && wfStatus == 'Withdrawn') {
	deactivateTask('Review Coordination');
}
