
if (wfTask == 'Certificate of Occupancy' && matches(wfStatus, 'Issued', 'Not Required')) {
	blockWorkflowIfPhysicalProffersCondition();
}
