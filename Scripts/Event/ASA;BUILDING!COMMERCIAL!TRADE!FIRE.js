if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', firePermitFee());
}

if (AInfo['Plan Review System Type'] == 'Fire Sprinkler: Install or alter less than or equal to 10 heads' || AInfo['Plan Review System Type'] == 'Fire Alarm: Alterations not requiring battery calculations' || AInfo['Plan Review System Type'] == 'Fire Alarm: Removal of any or all components of non-required system' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Install less than or equal to 499 gallon capacity tank' || AInfo['Plan Review System Type'] == 'LP Gas Storage Racks: Less than or equal to 24 cylinder capacity' || AInfo['Plan Review System Type'] == 'Kitchen Hood Suppression' || AInfo['Plan Review System Type'] == 'Five Foot Stub-Out/Fire Main' || AInfo['Plan Review System Type'] == 'Fire Pump' || AInfo['Plan Review System Type'] == 'Wet Private Hydrant') {
	updateFee('COM_FIR_120', 'BLD_COM_FIR', 'FINAL', '35', 'Y');
	updateFee('COM_FIR_050', 'BLD_COM_FIR', 'FINAL', '.02', 'Y');
}

if (AInfo['Plan Review System Type'] == 'Fire Sprinkler: Install or alter 11-20 heads' || AInfo['Plan Review System Type'] == 'Fire Alarm: Install or alter less than or equal to 5 devices that require battery calc' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Store/dispense for Business/Mercantile' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Install 500-2000 gallon capacity storage tank' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Removal of tanks of any capacity' || AInfo['Plan Review System Type'] == 'LP Gas Storage Racks: 25-48 cylinder capacity' || AInfo['Plan Review System Type'] == 'Spray Paint Booth' || AInfo['Plan Review System Type'] == 'Dry Hydrant' || AInfo['Plan Review System Type'] == 'FM-200 Clean Agent System') {
	updateFee('COM_FIR_120', 'BLD_COM_FIR', 'FINAL', '125', 'Y');
	updateFee('COM_FIR_050', 'BLD_COM_FIR', 'FINAL', '.02', 'Y');
}

if (AInfo['Plan Review System Type'] == 'Fire Sprinkler: Install or alter greater than or equal to 21 heads' || AInfo['Plan Review System Type'] == 'Fire Alarm: Install or alter greater than or equal to 6 devices that require battery calc' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Store/dispense for occupancies except Business/Mercantile' || AInfo['Plan Review System Type'] == 'Hazmat AG/UGST: Install greater than or equal to 2001 gallon capacity tank' || AInfo['Plan Review System Type'] == 'LP Gas Storage Racks: Greater than or equal to 49 cylinder capacity') {
	updateFee('COM_FIR_120', 'BLD_COM_FIR', 'FINAL', '250', 'Y');
	updateFee('COM_FIR_050', 'BLD_COM_FIR', 'FINAL', '.02', 'Y');
}

