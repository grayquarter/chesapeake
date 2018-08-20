
var capId = getCapIdFromVPAEvent(VoidPaymentFeeItemArray);
if (capId)
	p = getDistinctReceiptFromVPAEvent(capId, VoidPaymentNbrArray);
if (p) {
	for (var i in p)
		voidPOSPaymentByReceipt(p[i]);
}

var p = null;
