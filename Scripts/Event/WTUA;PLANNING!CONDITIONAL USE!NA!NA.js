
if (wfTask == ('CC Planning Meeting') && (wfStatus == 'Approved' || wfStatus == 'Approved with Stipulations')) {
	addParcelCondition(null, 'Planning COA', 'Applied', 'Use Permit Stipulations', "There is a Conditional Use Permit associated with this parcel.  Please verify if stipulations exist that would affect this permit.  If so, create a 'Use Permit Stipulation' child record", 'Notice');
	//addParcelConditionAndRelatedCap();
}

// DISABLED: WTUA:Planning/Conditional Use/NA/NA:20 - GL test
// if (wfTask == 'CC Planning Meeting' && wfStatus == 'Approved with Stipulations') {
// 	addParcelConditionAndRelatedCap();
// 	}

updateParallelTasksDueDate();
