import fs from "fs";

export default function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/index.js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.setTemplateFormats(["html"]);

    eleventyConfig.addLiquidFilter("lastModified", function(page){
            const stats = fs.statSync(page.inputPath);
            const mtime = stats.mtime;

            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayName = dayNames[mtime.getDay()];

            const pad = (n)=> String(n).padStart(2,"0");
            const formatted = `${dayName} ${pad(mtime.getMonth() + 1)}-${pad(mtime.getDate())}-${mtime.getFullYear()}  ${pad(mtime.getHours())}:${pad(mtime.getMinutes())}:${pad(mtime.getSeconds())}`;

            return formatted;
    });

    return{
        passthroughFileCopy: "true",
        dir:{
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};