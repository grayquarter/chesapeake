
if (wfTask == 'SR Intake' && wfStatus == 'Accepted') {
	scheduleInspectDate('Initial Investigation', dateAdd(null, 1, true));
}

if (wfTask == 'SR Intake' && wfStatus == 'Duplicate') {
	closeTask('Final Notification', 'Notification Sent'),
	//start replaced branch: EMSE:ServiceRequestCloseCase
	{
		if (capStatus == 'Complete-Fixed') {
			updateAppStatus('Closed-Fixed');
		}

		if (capStatus == 'Complete-Duplicate') {
			updateAppStatus('Closed-Duplicate');
		}

		if (capStatus == 'Complete-Referred') {
			updateAppStatus('Closed-Referred');
		}

		if (capStatus == 'Complete-No Violation') {
			updateAppStatus('Closed-No Violation');
		}

	}
	//end replaced branch: EMSE:ServiceRequestCloseCase;
}

if (wfTask == 'SR Intake' && wfStatus == 'Referred') {
	closeTask('Final Notification', 'Notification Sent'),
	//start replaced branch: EMSE:ServiceRequestCloseCase
	{
		if (capStatus == 'Complete-Fixed') {
			updateAppStatus('Closed-Fixed');
		}

		if (capStatus == 'Complete-Duplicate') {
			updateAppStatus('Closed-Duplicate');
		}

		if (capStatus == 'Complete-Referred') {
			updateAppStatus('Closed-Referred');
		}

		if (capStatus == 'Complete-No Violation') {
			updateAppStatus('Closed-No Violation');
		}

	}
	//end replaced branch: EMSE:ServiceRequestCloseCase;
}

if (wfTask == 'Final Notification' && wfStatus == 'Send Email') {

	//start replaced branch: EMSE:ServiceRequestCloseCase
	{
		if (capStatus == 'Complete-Fixed') {
			updateAppStatus('Closed-Fixed');
		}

		if (capStatus == 'Complete-Duplicate') {
			updateAppStatus('Closed-Duplicate');
		}

		if (capStatus == 'Complete-Referred') {
			updateAppStatus('Closed-Referred');
		}

		if (capStatus == 'Complete-No Violation') {
			updateAppStatus('Closed-No Violation');
		}

	}
	//end replaced branch: EMSE:ServiceRequestCloseCase;
}

if (wfTask == 'Final Notification' && wfStatus == 'Notification Sent') {

	//start replaced branch: EMSE:ServiceRequestCloseCase
	{
		if (capStatus == 'Complete-Fixed') {
			updateAppStatus('Closed-Fixed');
		}

		if (capStatus == 'Complete-Duplicate') {
			updateAppStatus('Closed-Duplicate');
		}

		if (capStatus == 'Complete-Referred') {
			updateAppStatus('Closed-Referred');
		}

		if (capStatus == 'Complete-No Violation') {
			updateAppStatus('Closed-No Violation');
		}

	}
	//end replaced branch: EMSE:ServiceRequestCloseCase;
}

if (wfTask == 'Final Notification' && wfStatus == 'No Notification Sent') {

	//start replaced branch: EMSE:ServiceRequestCloseCase
	{
		if (capStatus == 'Complete-Fixed') {
			updateAppStatus('Closed-Fixed');
		}

		if (capStatus == 'Complete-Duplicate') {
			updateAppStatus('Closed-Duplicate');
		}

		if (capStatus == 'Complete-Referred') {
			updateAppStatus('Closed-Referred');
		}

		if (capStatus == 'Complete-No Violation') {
			updateAppStatus('Closed-No Violation');
		}

	}
	//end replaced branch: EMSE:ServiceRequestCloseCase;
}
