
ldpa = false;
if (documentModelArray.size() > 0) {
	for (var i = 0;	i < documentModelArray.size();	i++)
		if (String(documentModelArray.get(i).getDocCategory()) == 'Land Disturbing Permit Application')
			ldpa = true;
}

if (ldpa) {
	deactivateTask('Permit Package Review');
	updateTask('Permit Issuance', 'Ready to Issue');
	activateTask('Permit Issuance');
}
