it("JasmineDemo/tcLoginUserName", async function() {
	var _data = testcaseData_1638898040732.dataset;
	await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxUserName"]);
	kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxUserName"],_data.input.TextBoxUserName);
	expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxUserName"], "text")).toEqual(_data.assert.TextBoxUserName);
});