﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('calibri-bold-italic-normal.ttf', font);
this.addFont('calibri-bold-italic-normal.ttf', 'calibri-bold-italic', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])