/// reference types= "Cypress" />

describe('file upload case',()=>{
    it('input type file upload',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const filePath='example.json';
        cy.get('#fileUpload').attachFile(filePath)
    })
    it('drag and drop file upload',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const filePath='office image.jpg';
        cy.get('#file').attachFile(filePath)
        cy.get('.box__success').should('contain','Done! ')
    })
    it('multiple files upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'office image.jpg';
        const yourFixturePath1 = 'example.json';
       

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    })
    it('change file name while uploading', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'office image.jpg';
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' })
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    })
    it.only('simple file upload', ()=> {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'office image.jpg';
               
        const special = 'file.spss';
         cy.fixture(yourFixturePath, 'binary')
         .then(Cypress.Blob.binaryStringToBlob)
          .then((fileContent) => {
       cy.get('#fileUpload').attachFile({ fileContent, fileName: 'yourFixturePath', mimeType: 'application/octet-stream', encoding: 'utf-8' })
          })
    })
})