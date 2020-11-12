const React = require("react")
const pumpLight = require("./src/assets/fonts/PumpLight.ttf")

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.BUILD_STAGE === `build-html`) {
    const css = `
*:not(:defined) { visibility: hidden; }
    @font-face {
        font-family: "Pump-Light";
        src: url(${pumpLight});
        font-weight: 300;
    }
`

    setHeadComponents([<style>{css}</style>])
  }
}
