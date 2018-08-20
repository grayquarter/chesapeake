
if (fileDate != jsDateToMMDDYYYY(convertDate(aa.date.getCurrentDate()))) {
	createCapComment('CAP started on ' + fileDate + ' and submitted on ' + jsDateToMMDDYYYY(convertDate(aa.date.getCurrentDate())) + '.');
	cap.setFileDate(aa.date.getCurrentDate());
	aa.cap.editCapByPK(cap.getCapModel());
}
