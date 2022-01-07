it("JasmineDemo/testCase1", async function() {
	var _data = testcaseData_1640168351219.dataset;
	await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxUserName"]);
	await kony.automation.scrollToWidget(["JasmineDemo/FormLogin","TextBoxUserName"]);
	expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxUserName"], "text")).toEqual(_data.assert.TextBoxUserName);
	kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxPassword"],_data.input.TextBoxPassword);
});