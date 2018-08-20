
if (inspResult == 'Fail' && countIdenticalInspections() > 1) {
	addFee('COD010','CODE','FINAL',countIdenticalInspections() - 1,'Y');
	}

