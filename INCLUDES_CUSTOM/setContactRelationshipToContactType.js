function setContactRelationshipToContactType() {

	iCont = null;
	contactArray = new Array();
	contactArray = getContactArray();
	if (contactArray.length > 0) {
		for (iCont in contactArray)
			//start replaced branch: EMSE:SetContactRelationshipToContactTypeLoop
		{
			tContact = contactArray[iCont];
			//aa.print('ContactName: ' + tContact['firstName'] + ' ' + tContact['lastName'] + ' ' + tContact['contactType']);
			contactSetRelation(tContact['contactSeqNumber'], tContact['contactType']);

		}
		//end replaced branch: EMSE:SetContactRelationshipToContactTypeLoop;
	}

}
