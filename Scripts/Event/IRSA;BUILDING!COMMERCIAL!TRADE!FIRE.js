
emailContact('Inspection Results', 'Your inspection has been ' + inspResult + '.<br><br>Record ID: ' + capIDString + '<br><br>Inspection Type: ' + inspType + '<br><br>Balance Due: $' + balanceDue + '<br><br>Please be advised any inspection resulting in a rejection is required to have a re-inspection.  Also, permits with a balance due cannot be closed.  If applicable, log into the City of Chesapeake eBUILD site (https://acasupp3.accela.com/chesapeake/)  to schedule a re-inspection and /or pay any outstanding balances.   <br><br>Thank you,<br><br>Chesapeake Fire Department<br>Fire Prevention Division<br>(757) 382-6566');
if (inspType != 'Hydrostatic/Air Test' && inspResult == 'Approved') {
	closeTask('Inspections', 'Approved', 'Closed by script.', '');
}

if (inspType != 'Hydrostatic/Air Test' && inspResult == 'Approved' && balanceDue == 0) {
	closeTask('Final Action', 'Closed', 'Closed by script.', '');
}
