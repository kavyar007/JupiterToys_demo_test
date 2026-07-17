import * as report from "multiple-cucumber-html-reporter";

report.generate({
    jsonDir: "./reports",
    reportPath: "./reports/html",
    reportName: "Jupiter Toys Automation Report",
    pageTitle: "Automation Test Execution Report",
    displayDuration: true,
    openReportInBrowser: true,

    metadata: {
        browser: {
            name: "Chrome",
            version: "Latest"
        },
        device: "Local Machine",
        platform: {
            name: "Windows",
            version: "11"
        }
    },

    customData: {
        title: "Execution Information",
        data: [
            {
                label: "Project",
                value: "Jupiter Toys Automation"
            },
            {
                label: "Framework",
                value: "Playwright + Cucumber + TypeScript"
            },
            {
                label: "Execution",
                value: "Local"
            },
            {
                label: "Tester",
                value: "Kavya"
            }
        ]
    }
});