define(["JasmineDemo/Test Cases/testCaseManual_data"], function() {
	describe("JasmineDemo/Test Suites/tsManualTestCase", function() {
		it("JasmineDemo/testCaseDelete", async function() {
			var _data = testcaseData_1638944913702.dataset;
			await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxUserName"]);
			kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxUserName"],_data.input.TextBoxUserName);
		    kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxPassword"],_data.input.TextBoxPassword);
		    AssertUserNameTextBox();
		    AssertPasswordTextBox();
			
		});
		
		
		function AssertUserNameTextBox(){
		  var _data = testcaseData_1638944913702.dataset;
		  expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxUserName"], "text")).toEqual(_data.assert.TextBoxUserName);
		}
		
		function AssertPasswordTextBox(){
		  var _data = testcaseData_1638944913702.dataset;
		  expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxPassword"], "text")).toEqual(_data.assert.TextBoxPassword);
		  //expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxPassword"], "text")).not.toEqual(_data.assert.TextBoxPassword);
		}
		  
		
	});
});