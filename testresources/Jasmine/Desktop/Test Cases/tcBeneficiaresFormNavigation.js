it("JasmineDemo/tcBeneficiaresFormNavigation", async function() {
	var _data = testcaseData_1638940636977.dataset;
	await kony.automation.playback.waitFor(["JasmineDemo/FormLogin","ButtonLogin"]);
	kony.automation.button.click(["JasmineDemo/FormLogin","ButtonLogin"]);
	await kony.automation.playback.waitFor(["JasmineDemo/FormBeneficaries"]);
},10000);