/** @type {import('next').NextConfig} */

const path = require('path'); // 1. path 선언

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  },
};

module.exports = nextConfig;



// const withSass = require("@zeit/next-sass");

// module.exports = withSass({
//   /* 추가적인 옵션 설정 가능 */
// });
