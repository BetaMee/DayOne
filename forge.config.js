module.exports = {
  packageConfig: {},
  makers: [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "DayOne"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        "mainConfig": "./build/webpack.main.config.js",
        "renderer": {
          "config": "./build/webpack.renderer.config.js",
          "entryPoints": [
            {
              "html": "./src/renderer/html/app.html",
              "js": "./src/renderer/RenderApp.tsx",
              "name": "main_window"
            }
          ]
        }
      }
    ]
  ]
}