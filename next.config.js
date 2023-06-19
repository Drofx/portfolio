  /** 
   *@type {import('next').NextConfig} 
   */

  const nextConfig ={  
    images: {
      domains: ['raw.githubusercontent.com'],
      unoptimized:true
    },
    basePath:"/portfolio",
  }

  module.exports = nextConfig