/*------------------------------------------------------------------------------------------------------/
| Program : ACA_Onload_ASI
| Event   : ACA_Onload_Pageflow
|
| Usage   : Populate ASI values with parcel attributes and proximity alerts
|
| Notes   :
|
/------------------------------------------------------------------------------------------------------*/
var showMessage = false; // Set to true to see results in popup window
var showDebug = false; // Set to true to see debug messages in popup window
var cancel = false;
var message = ""; // Message String
var debug = ""; // Debug String
var br = "<BR>"; // Break Tag
var cap = aa.env.getValue("CapModel");
var capId = cap.getCapID();
var servProvCode = capId.getServiceProviderCode(); // Service Provider Code
var parentCapId = capId;
var childCaps = aa.cap.getChildCapByParentCapId(parentCapId); //get all child caps.
var publicUser = false;
var currentUserID = aa.env.getValue("CurrentUserID");
// if (currentUserID.indexOf("PUBLICUSER") == 0) { currentUserID = "ADMIN" ; publicUser = true; }	// ignore public users
if (currentUserID.indexOf("PUBLICUSER") == 0) {
	publicUser = true;
} // ignore public users
var capIDString = capId.getCustomID(); // alternate cap id string
var systemUserObj = aa.person.getUser(currentUserID).getOutput(); // Current User Object
var appTypeResult = cap.getCapType();
var appTypeString = appTypeResult.toString(); // Convert application type to string ("Building/A/B/C")
var appTypeArray = appTypeString.split("/"); // Array of application type string
var startDate = new Date();
var startTime = startDate.getTime();
var controlString = "ACA_Onload_ASI"; // Standard Choice Starting Point
var disableTokens = false; // turn off tokenizing of std choices (enables use of "{} and []")
var useAppSpecificGroupName = false; // Use Group name when populating App Specific Info Values
var useTaskSpecificGroupName = false; // Use Group name when populating Task Specific Info Values
var enableVariableBranching = true; // Allows use of variable names in branching.  Branches are not followed in Doc Only
var maxEntries = 99; // Maximum number of std choice entries.  Entries must be Left Zero Padded
var documentOnly = false; // Document Only -- displays hierarchy of std choice steps
eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
eval(getScriptText("INCLUDES_CUSTOM"));
var AInfo = new Array(); // Create array for tokenized variables
loadParcelAttributes4ACA(AInfo); // Add parcel attributes
loadAppSpecific4ACA_Fixed(AInfo);
logGlobals(AInfo);

if (appMatch("Building/*/*/*")) {
	varParcel = null;
	varParcel = getParcel4ACA();
	varZoning = null;
	ParcelValidatedNumber = varParcel;
	var profferScriptFlag = false;
	profferScriptFlag = lookup('BUILDING_EMSE_ProfferScript_Applies', appTypeString);
	if (profferScriptFlag && profferScriptFlag == 'YES' && proximityParcel('CHESAPEAKE', 'Development Tracking', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within a development tracking area. Staff will review and advise.');
	}
}

if (appMatch("Planning/*/*/*")) {
	varParcel = null;
	varParcel = getParcel4ACA();
	varZoning = null;
	ParcelValidatedNumber = varParcel;
	var myArrOSAP = getGISInfoArray2Parcel('CHESAPEAKE', 'Zoning', 'OPENSPACEPRESERVATION', -1, 'feet');
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

	if (varOSAP && ((varOSAP).indexOf('YES') > -1) || varOSAP && ((varOSAP).indexOf('Yes') > -1) || varOSAP && ((varOSAP).indexOf('A-1') > -1)) {
		showMessage = true;
		comment('Please be advised, this property has been identified as a participant in the Open Space Acquisition Program. Additional review is required by City staff.');
	}

	if (varParcel && proximityParcel('CHESAPEAKE', 'Chesapeake Bay Preservation Area', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within the Chesapeake Bay Preservation Area and staff review is necessary to determine if additional regulations may apply.');
	}

	if (proximityParcel('CHESAPEAKE', 'Flood Zones', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within a flood plain. Additional regulations may apply to your application, staff will review and advise.');
	}

	if (proximityParcel('CHESAPEAKE', 'Transportation Corridor Overlay District', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within the Transportation Corridor Overlay District.  Please refer to the Chesapeake Zoning Ordinance for appropriate uses in this district.');
	}

	var myArrZoning = getGISInfoArray2Parcel('CHESAPEAKE', 'Zoning', 'CLASS', -1, 'feet');
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
}

if (appMatch("Zoning/*/*/*")) {
	varParcel = null;
	varParcel = getParcel4ACA();
	varZoning = null;
	ParcelValidatedNumber = varParcel;
	var profferScriptFlag = false;
	profferScriptFlag = lookup('ZONING_EMSE_ProfferScript_Applies', appTypeString);
	if (profferScriptFlag && profferScriptFlag == 'YES' && proximityParcel('CHESAPEAKE', 'Development Tracking', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within a development tracking area. Staff will review and advise.');
	}
}

if (appMatch("Development/*/*/*")) {
	varParcel = null;
	varParcel = getParcel4ACA();
	varZoning = null;
	ParcelValidatedNumber = varParcel;
	var profferScriptFlag = false;
	profferScriptFlag = lookup('DEVELOPMENT_EMSE_ProfferScript_Applies', appTypeString);
	if (profferScriptFlag && profferScriptFlag == 'YES' && proximityParcel('CHESAPEAKE', 'Development Tracking', 0, 'feet')) {
		showMessage = true;
		comment('Please be advised, this property is located within a development tracking area. Staff will review and advise.');
	}
}

/*------------------------------------------------------------------------------------------------------/
| <===========END=Main=Loop================>
/-----------------------------------------------------------------------------------------------------*/
if (debug.indexOf("**ERROR") > 0) {
	aa.env.setValue("ErrorCode", "1");
	aa.env.setValue("ErrorMessage", debug);
} else {
	if (cancel) {
		aa.env.setValue("ErrorCode", "-2");
		if (showMessage)
			aa.env.setValue("ErrorMessage", message);
		if (showDebug)
			aa.env.setValue("ErrorMessage", debug);
	} else {
		aa.env.setValue("ErrorCode", "0");
		if (showMessage)
			aa.env.setValue("ErrorMessage", message);
		if (showDebug)
			aa.env.setValue("ErrorMessage", debug);
		aa.env.setValue("CapModel", cap);
	}
}
/*---------------------------------------------------------------------------------------------------------/
/    Functions used by this script
/---------------------------------------------------------------------------------------------------------*/
function getScriptText(vScriptName) {
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");
	return emseScript.getScriptText() + "";
}
/***************************************************************************/
function loadParcelAttributes4ACA(thisArr) {
	//
	// Returns an associative array of Parcel Attributes from ACA cap model
	//
	//
	fcapParcelObj = cap.getParcelModel();
	if (!fcapParcelObj) {
		logDebug("No Parcel to get attributes");
		return false;
	}
	ParcelModel = fcapParcelObj.getParcelModel();
	ParcelAttr = ParcelModel.getParcelAttribute();
	if (!ParcelAttr) {
		logDebug("No attributes on this Parcel");
		return false;
	}
	ParcelAttrObj = ParcelAttr.toArray();
	for (z in ParcelAttrObj)
		thisArr["ParcelAttribute." + ParcelAttrObj[z].getB1AttributeName()] = ParcelAttrObj[z].getB1AttributeValue();
}
/***************************************************************************/
function loadAppSpecific4ACA_Fixed(thisArr) {
	//
	// Returns an associative array of App Specific Info
	// Optional second parameter, cap ID to load from
	//
	// uses capModel in this event
	var itemCap = capId;
	if (arguments.length >= 2) {
		itemCap = arguments[1]; // use cap ID specified in args
		var fAppSpecInfoObj = aa.appSpecificInfo.getByCapID(itemCap).getOutput();
		for (loopk in fAppSpecInfoObj) {
			if (useAppSpecificGroupName) {
				thisArr[fAppSpecInfoObj[loopk].getCheckboxType() + "." + fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			} else {
				thisArr[fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			}
		}
	} else {
		var vASIGroups = cap.getAppSpecificInfoGroups();
		if (vASIGroups != null) {
			var i = vASIGroups.iterator();
			while (i.hasNext()) {
				var group = i.next();
				var fields = group.getFields();
				if (fields != null) {
					var iteFields = fields.iterator();
					while (iteFields.hasNext()) {
						var field = iteFields.next();
						if (useAppSpecificGroupName) {
							thisArr[field.getCheckboxType() + "." + field.getCheckboxDesc()] = field.getChecklistComment();
						} else {
							thisArr[field.getCheckboxDesc()] = field.getChecklistComment();
						}
					}
				}
			}
		} else {
			logDebug("No ASI Groups Exists in ACA CapModel");
		}
	}
}
/***************************************************************************/
function editAppSpecific4ACA(ASIField, ASIValue) {
	var ASIGroups = cap.getAppSpecificInfoGroups().toArray();
	for (x in ASIGroups) {
		ASIGrp = ASIGroups[x];
		ASIFields = ASIGrp.getFields().toArray();
		for (y in ASIFields) {
			Field = ASIFields[y]
				if (useAppSpecificGroupName) {
					if (Field.getCheckboxType() + "." + Field.getCheckboxDesc() == ASIField) {
						Field.setChecklistComment(ASIValue)
						logDebug("Successfully updated ASI Field");
					}
				} else {
					if (Field.getCheckboxDesc() == ASIField) {
						Field.setChecklistComment(ASIValue)
						logDebug("Successfully updated ASI Field");
					}
				}
		}
	}
}
function getParcel4ACA() {
	fcapParcelObj = cap.getParcelModel();
	if (!fcapParcelObj) {
		logDebug("No Parcel to get attributes");
		return false;
	}
	vParcelNo = fcapParcelObj.parcelNo + "";
	return vParcelNo;
}
/***************************************************************************/
function getGISInfoParcel(svc, layer, attributename, parcelNumber) {
	// use buffer info to get info on the current object by using distance 0
	// usage:
	//
	// x = getGISInfo("flagstaff","Parcels","LOT_AREA");
	//
	var distanceType = "feet";
	var retString;
	var bufferTargetResult = aa.gis.getGISType(svc, layer); // get the buffer target
	if (bufferTargetResult.getSuccess()) {
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributename);
	} else {
		logDebug("**WARNING: Getting GIS Type for Buffer Target.  Reason is: " + bufferTargetResult.getErrorType() + ":" + bufferTargetResult.getErrorMessage());
		return false
	}
	var gisObjResult = aa.gis.getParcelGISObjects(parcelNumber); // get gis objects on the cap
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else {
		logDebug("**WARNING: Getting GIS objects for Cap.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage());
		return false
	}
	for (a1 in fGisObj) // for each GIS object on the Cap.  We'll only send the last value
	{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], "0", distanceType, buf);
		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else {
			logDebug("**WARNING: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage());
			return false
		}
		for (a2 in proxArr) {
			var proxObj = proxArr[a2].getGISObjects(); // if there are GIS Objects here, we're done
			for (z1 in proxObj) {
				var v = proxObj[z1].getAttributeValues()
					retString = v[0];
			}
		}
	}
	return retString
}
/***************************************************************************/
function getGISInfo2Parcel(svc, layer, attributename) // optional: numDistance, distanceType
{
	// use buffer info to get info on the current object by using distance 0
	// usage:
	//
	// x = getGISInfo("flagstaff","Parcels","LOT_AREA");
	// x = getGISInfo2("flagstaff","Parcels","LOT_AREA", -1, "feet");
	// x = getGISInfo2ASB("flagstaff","Parcels","LOT_AREA", -1, "feet");
	//
	// to be used with ApplicationSubmitBefore only

	var numDistance = 0
		if (arguments.length >= 4)
			numDistance = arguments[3]; // use numDistance in arg list
		var distanceType = "feet";
	if (arguments.length == 5)
		distanceType = arguments[4]; // use distanceType in arg list
	var retString;

	var bufferTargetResult = aa.gis.getGISType(svc, layer); // get the buffer target
	if (bufferTargetResult.getSuccess()) {
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributename);
	} else {
		logDebug("**ERROR: Getting GIS Type for Buffer Target.  Reason is: " + bufferTargetResult.getErrorType() + ":" + bufferTargetResult.getErrorMessage());
		return false
	}

	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else {
		logDebug("**ERROR: Getting GIS objects for Parcel.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage());
		return false
	}

	for (a1 in fGisObj) // for each GIS object on the Parcel.  We'll only send the last value
	{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else {
			logDebug("**ERROR: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage());
			return false
		}

		for (a2 in proxArr) {
			var proxObj = proxArr[a2].getGISObjects(); // if there are GIS Objects here, we're done
			for (z1 in proxObj) {
				var v = proxObj[z1].getAttributeValues()
					retString = v[0];
			}
		}
	}

	return retString
}
/***************************************************************************/
function getGISInfoArray2Parcel(svc, layer, attributename) // optional: numDistance, distanceType
{
	// use buffer info to get info on the current object by using distance 0
	// usage:
	//
	// x = getGISInfoArray2Parcel("flagstaff","Parcels","LOT_AREA");
	// x = getGISInfoArray2Parcel("flagstaff","Parcels","LOT_AREA", -1, "feet");
	//
	// to be used with ApplicationSubmitBefore only

	var numDistance = 0
		if (arguments.length >= 4)
			numDistance = arguments[3]; // use numDistance in arg list
		var distanceType = "feet";
	if (arguments.length == 5)
		distanceType = arguments[4]; // use distanceType in arg list
	var retArray = new Array();

	var bufferTargetResult = aa.gis.getGISType(svc, layer); // get the buffer target
	if (bufferTargetResult.getSuccess()) {
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributename);
	} else {
		logDebug("**WARNING: Getting GIS Type for Buffer Target.  Reason is: " + bufferTargetResult.getErrorType() + ":" + bufferTargetResult.getErrorMessage());
		return false
	}

	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else {
		logDebug("**WARNING: Getting GIS objects for Parcel.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage());
		return false
	}

	for (a1 in fGisObj) // for each GIS object on the Parcel.  We'll only send the last value
	{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else {
			logDebug("**WARNING: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage());
			return false
		}

		for (a2 in proxArr) {
			var proxObj = proxArr[a2].getGISObjects(); // if there are GIS Objects here, we're done
			for (z1 in proxObj) {
				var v = proxObj[z1].getAttributeValues();
				retArray.push(v[0]);
			}

		}
	}
	return retArray;
}
/***************************************************************************/
function proximityParcel(svc, layer, numDistance) // optional: distanceType
{
	// returns true if the app has a gis object in proximity
	// to be used with ApplicationSubmitBefore only

	var distanceType = "feet"
		if (arguments.length == 4)
			distanceType = arguments[3]; // use distance type in arg list

		bufferTargetResult = aa.gis.getGISType(svc, layer); // get the buffer target
	if (bufferTargetResult.getSuccess()) {
		buf = bufferTargetResult.getOutput();
		buf.addAttributeName(layer + "_ID");
	} else {
		logDebug("**ERROR: Getting GIS Type for Buffer Target.  Reason is: " + bufferTargetResult.getErrorType() + ":" + bufferTargetResult.getErrorMessage());
		return false
	}

	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else {
		logDebug("**ERROR: Getting GIS objects for Parcel.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage());
		return false
	}

	for (a1 in fGisObj) // for each GIS object on the Cap
	{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else {
			logDebug("**ERROR: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage());
			return false
		}

		for (a2 in proxArr) {
			proxObj = proxArr[a2].getGISObjects(); // if there are GIS Objects here, we're done
			if (proxObj.length) {
				return true;
			}
		}
	}
}
/***************************************************************************/
function proximityToAttributeParcel(svc, layer, numDistance, distanceType, attributeName, attributeValue) {
	// returns true if the app has a gis object in proximity that contains the attributeName = attributeValue
	// use with all events except ApplicationSubmitBefore
	// example usage:
	// 01 proximityToAttribute("flagstaff","Parcels","50","feet","BOOK","107") ^ DoStuff...

	var bufferTargetResult = aa.gis.getGISType(svc, layer); // get the buffer target
	if (bufferTargetResult.getSuccess()) {
		buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributeName);
	} else {
		logDebug("**ERROR: Getting GIS Type for Buffer Target.  Reason is: " + bufferTargetResult.getErrorType() + ":" + bufferTargetResult.getErrorMessage());
		return false
	}

	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else {
		logDebug("**ERROR: Getting GIS objects for Parcel.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage());
		return false
	}
	for (a1 in fGisObj) // for each GIS object on the Cap
	{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else {
			logDebug("**ERROR: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage());
			return false
		}

		for (a2 in proxArr) {
			var proxObj = proxArr[a2].getGISObjects(); // if there are GIS Objects here, we're done
			for (z1 in proxObj) {
				var v = proxObj[z1].getAttributeValues()
					retString = v[0];
				if (retString && retString.equals(attributeValue))
					return true;
			}

		}
	}
}
/***************************************************************************/
