# HLS and DASH Playback

Allows HLS and DASH playback in firefox browsers

# Usage

<!-- 1. Install extension from [chrome webstore][]/[mozilla addons][] -->
Click on any m3u8 link inside firefox to play it directly in a new tab

The extension can be disabled by clicking on the icon if the request filter on m3u8 links is too disruptive.

<!-- [chrome webstore]:
[mozilla addons]: -->

# Some Developer Notes 

By default, the browser downloads any m3u8 files that were requested. This plugin checks any links to see if they are m3u8.
If that's the case, it opens a new tab on a video player that uses the [hlsjs][] library. This extension is just a wrapper of [hlsjs][].

[hlsjs]: https://github.com/video-dev/hls.js
[dashjs]: https://github.com/Dash-Industry-Forum/dash.js

#License
Released under [Apache 2.0 License](LICENSE)
[Dash.js license](dashjs_license.md)
