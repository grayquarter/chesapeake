
runDPORCheck(capId);
if (publicUser && (appMatch('Building/*/Trade/Mechanical') || appMatch('Building/*/Trade/Plumbing') || appMatch('Building/*/Trade/Electrical') || appMatch('Building/*/Trade/Gas'))) {
	isValidLpSpecialitiesAndClass(true);
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Debug log from ConvertToRealCAPAfter Event Script', debug);
}
