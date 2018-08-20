
if (!publicUser && AInfo['Type of Application'] == 'CBPA Administrative Review') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (!publicUser && AInfo['Type of Application'] == 'CBPA Review Committee Exception') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (!publicUser && AInfo['Type of Application'] == 'CBPA Review Committee Determination') {
	updateFee('PLN_020', 'PLN_EXC', 'FINAL', 1, 'Y');
}

if (!publicUser && AInfo['Type of Application'] == 'CBPA Board Exception') {
	updateFee('PLN_010', 'PLN_EXC', 'FINAL', 1, 'Y');
}
