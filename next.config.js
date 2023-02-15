/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  // reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dashboardCrash',
        remotes: {
          widget1: `widget1@https://livi-poc-widget1.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget2: `widget2@https://livi-poc-widget2.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget3: `widget3@https://livi-poc-widget3.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget4: `widget4@https://livi-poc-widget4.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget5: `widget5@https://livi-poc-widget.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './demo': './component/dashboard',
        },
        shared: {
          // "react": {
          //   singleton: true,
          //   strictVersion: true,
          //   version: '18.2.0'
          // },
          // "react-dom": {
          //   singleton: true,
          //   strictVersion: true,
          //   version: '18.2.0'
          // }
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig