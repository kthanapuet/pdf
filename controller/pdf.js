const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib')
// import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const request = require("request-promise-native");

module.exports = {
    modifyPdf: async () => {
        const log = console.log;
        const url = 'https://cs193p.sites.stanford.edu/sites/g/files/sbiybj16636/files/media/file/l1.pdf'
        // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

        const existingPdfBytes = await request.get({
            uri: url,
            encoding: null,
        });
        // 4. write file to local file system
        // fs.writeFileSync(filename, pdfBuffer);
        log('✅ pdf download finished!');

        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        const pages = pdfDoc.getPages()

        for (var i in pages) {
            var page = pages[i]
            const { width, height } = firstPage.getSize()
            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 2 + 300,
                size: 50,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1),
                rotate: degrees(-45),
            })
        }

        // const firstPage = pages[0]
        // const { width, height } = firstPage.getSize()
        // firstPage.drawText('This text was added with JavaScript!', {
        //     x: 5,
        //     y: height / 2 + 300,
        //     size: 50,
        //     font: helveticaFont,
        //     color: rgb(0.95, 0.1, 0.1),
        //     rotate: degrees(-45),
        // })

        const pdfBytes = await pdfDoc.save()

        const filename = 'test.pdf';

        fs.writeFileSync(filename, pdfBytes);
        return pdfBytes
    }
}