
if ((!appMatch('Building/Commercial/Sign/NA') && !appMatch('Building/Commercial/Tents/NA') && !appMatch('Building/Commercial/Trade/*')) && wfTask == 'Review Coordination' && wfStatus == 'Awaiting Contractor Selection') {
	emailContact('City of Chesapeake application ' + capIDString + ' - ' + capName + ' awaiting contractor selection.', 'Please be advised that your application ' + capIDString + ' is ready for approval, but the permit cannot be issued until a contractor is selected. Once a contractor has been selected, please email permitsupport@cityofchesapeake.net and a permit technician will assist you in completing the permit process. <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}
