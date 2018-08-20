
//start replaced branch: ISA:*/*/*/*
{
	if (typeof(curResult) == 'undefined') {
		curResult = getInspObj4ISA();
	}

	if (getCurInspectionDepartment(curResult).indexOf('/FIRE/') != -1 && matches(getCurInspectionStaff(curResult), null, 'null', '')) {
		scheduleInspections(curResult);
	}

	if (isReschedule(curResult)) {
		notifyRescheduledInspection(curResult);
	}

	// DISABLED: ISA:*/*/*/*:4
	// email('dquatacker@accela.com','eBUILD-noreply@cityofchesapeake.net','debug info',debug);

}
//end replaced branch: ISA:*/*/*/*;
