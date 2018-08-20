
varParcel = null;
varParcel = getParcel4ACA();
varZoning=null;
ParcelValidatedNumber=varParcel;
var profferScriptFlag=false;
profferScriptFlag = lookup('BUILDING_EMSE_ProfferScript_Applies', appTypeString);
if (profferScriptFlag && profferScriptFlag=='YES' && proximityParcel('CHESAPEAKE','Development Tracking',0,'feet')) {
	showMessage = true;
	comment('Please be advised, this property is located within a development tracking area. Staff will review and advise.');
	}

