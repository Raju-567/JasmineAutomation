it("JasmineDemo/tcBeneficiaries", async function() {
	var _data = testcaseData_1638898326400.dataset;
	await kony.automation.playback.waitFor(["JasmineDemo/FormBeneficaries","SegmentBeneficiaryList"]);
	expect(kony.automation.widget.getWidgetProperty(["JasmineDemo/FormBeneficaries","SegmentBeneficiaryList[2]","lblHeading"], "text")).toEqual(_data.assert.lblHeading1638949826692);
});