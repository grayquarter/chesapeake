

var visa = false;
var amex = false;
var disc = false;
var mast = false;
var debit = false;
var feeblock = false;
var creditblock = false;
for (j in feeItemInvoiceModels)
	if ('VISA-CREDIT'.equals(feeItemInvoiceModels[j].getFeeCode()))
		visa = true;
if ('AMEX-CREDIT'.equals(feeItemInvoiceModels[j].getFeeCode()))
	amex = true;
if ('DISC-CREDIT'.equals(feeItemInvoiceModels[j].getFeeCode()))
	disc = true;
if ('MC-CREDIT'.equals(feeItemInvoiceModels[j].getFeeCode()))
	mast = true;
if ('DEBITCARD'.equals(feeItemInvoiceModels[j].getFeeCode()))
	debit = true;
for (i in paymentModels)
	if ('Visa'.equals(paymentModels[i].getPaymentMethod()) && !visa)
		feeblock = true;
if ('American Express'.equals(paymentModels[i].getPaymentMethod()) && !amex)
	feeblock = true;
if ('Discover'.equals(paymentModels[i].getPaymentMethod()) && !disc)
	feeblock = true;
if ('MasterCard'.equals(paymentModels[i].getPaymentMethod()) && !mast)
	feeblock = true;
if ('Debit Card'.equals(paymentModels[i].getPaymentMethod()) && !debit)
	feeblock = true;
if ('Credit Card'.equals(paymentModels[i].getPaymentMethod()))
	creditblock = true;
if (feeblock == true) {
	showMessage = true;
	comment('Convenience fee for Credit/Debit payment method not invoiced.');
	cancel = true;
}

if (creditblock == true) {
	showMessage = true;
	comment('Please select one of the specific credit card types.');
	cancel = true;
}
