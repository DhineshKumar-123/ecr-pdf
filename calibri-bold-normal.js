﻿import { jsPDF } from "jspdf"
var callAddBoldFont = function () {
this.addFileToVFS('calibri-bold-normal.ttf', font);
this.addFont('calibri-bold-normal.ttf', 'calibri-bold', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddBoldFont])
export { callAddBoldFont };