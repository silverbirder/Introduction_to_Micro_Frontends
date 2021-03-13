// LICENSE : MIT
"use strict";
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const addTextToMarkdown = require("add-text-to-markdown");
const projectDir = path.join(__dirname, "..");
const README = path.join(projectDir, "README.md");
const ymlFiles = glob.sync(projectDir + "/**/*.yml").filter((filePath) => {
    return filePath[0] !== "_";
}).filter((filePath) => {
    return !/node_modules/.test(filePath);
}).sort((aFilePath, bFilePath) => {
    const relativeA = path.relative(projectDir, aFilePath);
    const relativeB = path.relative(projectDir, bFilePath);
    if (relativeA.includes("/") && relativeB.includes("/")) {
        return relativeA - relativeB;
    } else {
        if (relativeA.includes("/")) {
            return +1;
        }else if(relativeB.includes("/")){
            return -1;
        }else{
            return 0;
        }
    }
});
const createListTemplate = (filePathList, rootDir) => {
    return filePathList.map((filePath) => {
        const content = fs.readFileSync(filePath, "utf-8");
        const firstLine = content.split("\n")[0];
        const descriptions = firstLine.match(/#(.*)/);
        if (!descriptions) {
            console.error(`${filePath} not contain #`);
        }
        const description = descriptions[1];
        const relativePath = path.relative(rootDir, filePath);
        return `- [${relativePath}](${relativePath}) - ${description}`;
    }).join("\n");
};

const template = createListTemplate(ymlFiles, projectDir);
const originalREADME = fs.readFileSync(README, "utf-8");
const generatedREADME = addTextToMarkdown(originalREADME, template, "Dictionary", {
    listItemIndent: "1"
});
fs.writeFileSync(README, generatedREADME);