![terrain screenshot](https://github.com/alan-palacios/pixel-art-generator/blob/media/screenshot1.png)

# Pixel Art Generator

A online tool to create and download pixel art assets based on simplex noise generation, height map painting and falloff function. While it's faster to proces low pixel quantity images you can make high resolution images but with with a slower processing.
You can adjust a lot of settings to get the desired result which could be:
- Plain Textures
- Transparent Textures
- Maps
- Wallpapers
- Game assets
- Any image that have a noissy shape like clouds or bushes


## Presets

In case you want a quick result you can select one of the presets for:
- Islands
- Single Island
- Galaxy
- Moss
- Cloud
- Candy
- Explosion
- Cave wall


## Noise Settings

And if you want to experiment yourself with the settings here is a brief deffinition of all of them but of course is better to watch wath they do on the website

  - **seed:** A float numbre to generate the noise in a deterministic way. same settings with same seed will generate the same image.
  - **pixelsWidth & pixelsHeight:** Quantity of pixels that the noise will have. To increase the resolution modify the scale parameter
  - **octaves:** Number of noise layers. This parameter will give a more detailed result.
  - **lacunarity:** Level of gappiness and/or inhomogeneity.
  - **persistence:** How deformed the shape will be. Increasing this will give a grained look
  - **zoom:** To increase the zoom on the center of the image.
  - **minValue:** Minimum value that the noise should have. Increase this is similar to increase water level.
  - **xOffset & yOffset:** Parameters to displace the image on x and y axis.
  - **transparency:** Enables the transparency for the uncolored pixels which are those below the minimum color breakpoint.
  - **grayScale:** Enables the grayScale display which is the original noise data that is used to generate the colored version.
  - **tint:** The color that will be used to tint the grayScaled image
  - **falloff:** A multiplier for the attenuation function that will affect the borders of the image. Setting it to 0 will disable the effect.
  - **scale:** A multiplier for the pixelsWidth/Height. This will only affect the downloaded image
  - **colors:** An array of all the colors that will be rendered
	  - **breakpoint:** Minimum height at which the color will be painted
	  - **value:** Color

## Download Image

Once you have got the desired result you can download the image in png format with transparency if you desired. The final size will be affected by the scale parameter.
If you are going to use the image as game asset i recommend to keep scale in 1 but if it will be a wallpaper or decoration image it is better to scale it in order to keep the pixelated aesthetic and avoid a blurry image.

## Export & Import Settings

If you would like to modify the noise settings later without having to set each individual property you can export all of the current settings in a .json file. To import just select the same file.

## Credits

The noise generation was made with [simplex-noise](https://github.com/jwagner/simplex-noise.js) package and for the falloff function i used f=(1-x*x)^2 which can be find [here](https://briansharpe.wordpress.com/2011/11/14/two-useful-interpolation-functions-for-noise-development/) as well as other attenuation functions  

## License

This project is licensed under the MIT License - see the LICENSE file for details
