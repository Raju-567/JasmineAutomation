it("JasmineDemo/tcLoginPassword", async function() {
	var _data = testcaseData_1638898175932.dataset;
	await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","TextBoxPassword"]);
	kony.automation.textbox.enterText(["JasmineDemo/FormLogin","TextBoxPassword"],_data.input.TextBoxPassword);
	expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormLogin","TextBoxPassword"], "text")).toEqual(_data.assert.TextBoxPassword);
});