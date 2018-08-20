
parentCapIds = null;
childCapIds = null;
totalLibraryProffer = 0;
totalSchoolProffer = 0;
totalRoadsProffer = 0;
totalEMSProffer = 0;
var saveCapId = capId;
var grandCapId = getParent();
if (grandCapId != null) {
	capId = grandCapId;
	grandCapId = getParent();
	capId = saveCapId;
}

if (grandCapId != null) {
	parentCapIds = getChildren('Building/Residential/New Building/NA', grandCapId);
}

if (parentCapIds != null) {
	for (cntPar in parentCapIds)
		//replaced branch(EMSE:ZON_ProcessCPParents)
		zonProcessCPParents();
}

if (grandCapId != null) {
	parentCapIds = getChildren('Building/Residential/Condominium/NA', grandCapId);
}

if (parentCapIds != null) {
	for (cntPar in parentCapIds)
		//replaced branch(EMSE:ZON_ProcessCPParents)
		zonProcessCPParents();
}

if (grandCapId != null) {
	parentCapIds = getChildren('Building/Commercial/Apartments/Multi Family New', grandCapId);
}

if (parentCapIds != null) {
	for (cntPar in parentCapIds)
		//replaced branch(EMSE:ZON_ProcessCPParents)
		zonProcessCPParents();
}

if (grandCapId != null) {
	parentCapIds = getChildren('Building/Residential/Model/Permit', grandCapId);
}

if (parentCapIds != null) {
	for (cntPar in parentCapIds)
		//replaced branch(EMSE:ZON_ProcessCPParents)
		zonProcessCPParents();
}

if (parentCapIds != null) {
	editAppSpecific('Total Library Proffer Collected', totalLibraryProffer.toFixed(2), grandCapId);
	editAppSpecific('Total School Proffer Collected', totalSchoolProffer.toFixed(2), grandCapId);
	editAppSpecific('Total Roads Proffer Collected', totalRoadsProffer.toFixed(2), grandCapId);
	editAppSpecific('Total EMS Proffer Collected', totalEMSProffer.toFixed(2), grandCapId);
}
