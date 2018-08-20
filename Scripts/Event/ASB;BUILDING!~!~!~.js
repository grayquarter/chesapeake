
// DISABLED: ASB:Building/*/*/*:0
// if (publicUser) {
// 	appMatch('Building/Residential/Trade/Plumbing');
//	} else {
// 	cancel = true;
// 	showMessage = true;
// 	comment('Please Close Out Interface Record 999');
// 	}

if (publicUser && (appMatch('Building/*/Trade/Mechanical') || appMatch('Building/*/Trade/Plumbing') || appMatch('Building/*/Trade/Electrical') || appMatch('Building/*/Trade/Gas'))) {
	removeAllFeesPartialCapASB();
}
