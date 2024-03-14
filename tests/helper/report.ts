const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/dashboard",
    reportName: "Playwright Automation Report",
    pageTitle: " Swag Labs test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Sudeep - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    
});