

describe("Verify whether webdriveruniversity link on homepage work correctly", ()=>{
   
   it("check that the contact us button opens the contact us page", (done) => {

        browser.url('/')
        const title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        // const submitBtn = await browser.$('#login-portal')
        // await submitBtn.click()
        
        const submitBtn = browser.$('#contact-us');
        submitBtn.click();
        browser.switchWindow('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        const title2 = browser.getTitle();
        const url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL mismatch');
        expect(title2).to.equal('WebDriver | Contact Us');
        browser.pause(3000);
    
});
  
   it("check that the login button opens the login page", (done) => {
       

            browser.url('/');
        
            const submitBtn = browser.$('#login-portal');
            const title = browser.getTitle();
            title.should.equal('WebDriverUniversity.com');
            submitBtn.click();
            browser.switchWindow('http://www.webdriveruniversity.com/Login-Portal/index.html');
            const title2 = browser.getTitle();
            expect(title2).to.equal('WebDriver | Login Portal');
            browser.pause(3000);
        
    });

 

});