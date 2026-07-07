/** @type {import('next-sitemap').IConfig} */

const { siteUrl } = require("./config");

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true
}