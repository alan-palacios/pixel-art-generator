![terrain screenshot](https://github.com/alan-palacios/pixel-art-generator/blob/media/screenshot1.png)

# Pixel Art Generator
This is a online tool based on simplex noise generation, height map painting and falloff to create pixel art assets 

With all of the noiss options that you can modify you can create a wide variety of images like:
- Plain Textures
- Transparent Textures
- Maps
- Wallpapers
- Game assets
- Any image that have a noissy shape like clouds or bushes


## Noise Settings
  - **seed:**  
  - **pixelsWidth & pixelsHeight:** 
  - **octaves:** 
  - **lacunarity:** 
  - **persistence:** 
  - **zoom:** 
  - **minValue:** 
  - **xOffset & yOffset:** 
  - **transparency:** 
  - **grayScale:** 
  - **tint:** 
  - **falloff:** 
  - **scale:** 
  - **colors:** [
	  - **breakpoint:** Minimum height at which the color will be painted
	  - **value:** Color
## Presets

## Packages used

The noise generation was made with [simplex-noise](https://github.com/jwagner/simplex-noise.js) package and for the falloff function i used f=(1-x*x)^2 which can be find [here](https://briansharpe.wordpress.com/2011/11/14/two-useful-interpolation-functions-for-noise-development/) as well as other attenuation functions  

 
