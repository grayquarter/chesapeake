
if (feeBalance('UTL_050') > 0 && isEmpty(getParcelConditions('Building Permit', 'Applied', 'Utility Pro Rata Fee Due', null))) {
	addParcelCondition(null, 'Building Permit', 'Applied', 'Utility Pro Rata Fee Due', 'Applied via fee assess script', 'Notice');
}
