
runReportAsyncAttach(capId, 'Res Pool Guidelines');
runReportAsyncAttach(capId, 'Addendum Pool Guidelines');

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', resPoolPermitFee());
}
