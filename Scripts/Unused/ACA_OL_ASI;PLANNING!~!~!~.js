
varParcel = null;
varParcel = getParcel4ACA();
varZoning=null;
ParcelValidatedNumber=varParcel;
var myArrOSAP = getGISInfoArray2Parcel('CHESAPEAKE','Zoning','OPENSPACEPRESERVATION',-1,'feet');
if (myArrOSAP.length > 0) {
	varOSAP = myArrOSAP[0];
	} else {
	varOSAP = null;
	}

if (myArrOSAP.length > 1 && !((varOSAP).indexOf(myArrOSAP[1]) > -1)) {
	varOSAP = varOSAP + ' ' + myArrOSAP[1];
	}

if (myArrOSAP.length > 2 && !((varOSAP).indexOf(myArrOSAP[2]) > -1)) {
	varOSAP = varOSAP + ' ' + myArrOSAP[2];
	}

if (myArrOSAP.length > 3 && !((varOSAP).indexOf(myArrOSAP[3]) > -1)) {
	varOSAP = varOSAP + ' ' + myArrOSAP[3];
	}

if (myArrOSAP.length > 4 && !((varOSAP).indexOf(myArrOSAP[4]) > -1)) {
	varOSAP = varOSAP + ' ' + myArrOSAP[4];
	}

if (varOSAP && ((varOSAP).indexOf('YES') > -1)|| varOSAP && ((varOSAP).indexOf('Yes') > -1) || varOSAP && ((varOSAP).indexOf('A-1') > -1)) {
	showMessage = true;
	comment('Please be advised, this property has been identified as a participant in the Open Space Acquisition Program. Additional review is required by City staff.');
	}

if (varParcel && proximityParcel('CHESAPEAKE','Chesapeake Bay Preservation Area',0,'feet')) {
	showMessage = true;
	comment('Please be advised, this property is located within the Chesapeake Bay Preservation Area and staff review is necessary to determine if additional regulations may apply.');
	}

if (proximityParcel('CHESAPEAKE','Flood Zones',0,'feet')) {
	showMessage = true;
	comment('Please be advised, this property is located within a flood plain. Additional regulations may apply to your application, staff will review and advise.');
	}

if (proximityParcel('CHESAPEAKE','Transportation Corridor Overlay District',0,'feet')) {
	showMessage = true;
	comment('Please be advised, this property is located within the Transportation Corridor Overlay District.  Please refer to the Chesapeake Zoning Ordinance for appropriate uses in this district.');
	}

var myArrZoning = getGISInfoArray2Parcel('CHESAPEAKE','Zoning','CLASS',-1,'feet');
if (myArrZoning.length > 0) {
	varZoning = myArrZoning[0];
	} else {
	varZoning = null;
	}

if (myArrZoning.length > 1 && !((varZoning).indexOf(myArrZoning[1]) > -1)) {
	varZoning = varZoning + ' ' + myArrZoning[1];
	}

if (myArrZoning.length > 2 && !((varZoning).indexOf(myArrZoning[2]) > -1)) {
	varZoning = varZoning + ' ' + myArrZoning[2];
	}

if (myArrZoning.length > 3 && !((varZoning).indexOf(myArrZoning[3]) > -1)) {
	varZoning = varZoning + ' ' + myArrZoning[3];
	}

if (myArrZoning.length > 4 && !((varZoning).indexOf(myArrZoning[4]) > -1)) {
	varZoning = varZoning + ' ' + myArrZoning[4];
	}

if (varZoning && ((varZoning).indexOf('PUD') > -1)) {
	showMessage = true;
	comment('Please be advised, this property is located within a Planned Unit Development, additional development criteria may apply.  City staff will review your application and advise.');
	}

