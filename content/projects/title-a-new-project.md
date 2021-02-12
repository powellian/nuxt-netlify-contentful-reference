---
title: "Title: A Nother New Project"
description: "Description: A New Project"
thumbnail: https://placekitten.com/g/600/400
---
## Rhubard & Custard

So, now you have the variables set and available to your build process, great! But, unless your build pipeline DOES something with the environment variable - it’s not going to be much use in the code that gets published and served to the browser - which doesn’t understand $API_ENDPOINT - that’s just a string to the browser and to our CDN.