define(["JasmineDemo/Test Cases/tcLoginUserName_data","JasmineDemo/Test Cases/tcLoginPassword_data","JasmineDemo/Test Cases/tcBeneficiaresFormNavigation_data","JasmineDemo/Test Cases/tcBeneficiaries_data"], function() {
	describe("JasmineDemo/Test Suites/ts1", function() {
		it("JasmineDemo/tcLoginUserName", async function() {
			var _data = testcaseData_1638898040732.dataset;
			await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxUserName"]);
			kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxUserName"],_data.input.TextBoxUserName);
			expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxUserName"], "text")).toEqual(_data.assert.TextBoxUserName);
		});
		
		it("JasmineDemo/tcLoginPassword", async function() {
			var _data = testcaseData_1638898175932.dataset;
			await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxPassword"]);
			kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxPassword"],_data.input.TextBoxPassword);
			expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxPassword"], "text")).toEqual(_data.assert.TextBoxPassword);
		});
		
		it("JasmineDemo/tcBeneficiaresFormNavigation", async function() {
			var _data = testcaseData_1638940636977.dataset;
			await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","ButtonLogin"]);
			kony.automation.button.click(["JasmineDemo/FormLogin","ButtonLogin"]);
			await kony.automation.playback.waitFor(["JasmineDemo/FormBeneficaries"]);
		},10000);
		
		it("JasmineDemo/tcBeneficiaries", async function() {
			var _data = testcaseData_1638898326400.dataset;
			await kony.automation.playback.waitFor(["JasmineDemo/FormBeneficaries","SegmentBeneficiaryList"]);
			expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormBeneficaries","SegmentBeneficiaryList[2]","lblHeading"], "text")).toEqual(_data.assert.lblHeading1638949826692);
		});
	});
});