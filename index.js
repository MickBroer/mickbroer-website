const elements = {
  eenHardGelag: { isSelected: false },
  tabaksdrone: { isSelected: false },
  wrijfMuziek: { isSelected: false },
  kapwerkzaamheden: { isSelected: false },
  zenderKamers: { isSelected: false },
  zender: { isSelected: false },
  juni2022: { isSelected: false },
  exile: { isSelected: false },
  overhoop: { isSelected: false },
  parra: { isSelected: false },
  bladeren: { isSelected: false },
  event160624: { isSelected: false },
  event270525: { isSelected: false },
  event090525: { isSelected: false },
  event080525: { isSelected: false },
  event130325: { isSelected: false }
};

const fadeInDuration = 5000;
const reusableImages = [];
const showcase = document.getElementById("showcase");
const items = document.getElementById("items");

const title = [
  " mickbroer.org", "m ickbroer.org", "mi ckbroer.org", "mic kbroer.org",
  "mick broer.org", "mickb roer.org", "mickbr oer.org", "mickbro er.org",
  "mickbroe r.org", "mickbroer .org", "mickbroer. org", "mickbroer.o rg",
  "mickbroer.or g", "mickbroer.org ", "mickbroer.org ", "mickbroer.or g",
  "mickbroer.o rg", "mickbroer. org", "mickbroer .org", "mickbroe r.org",
  "mickbro er.org", "mickbr oer.org", "mickb roer.org", "mick broer.org",
  "mic kbroer.org", "mi ckbroer.org", "m ickbroer.org", " mickbroer.org"
];
let index = 1;

const projects = {
  
  event270525: {
    content: `<iframe class="youtube" src="https://www.youtube.com/embed/IlgNAKubhao?color=white&modestbranding=1&controls=1&rel=0" ...></iframe>`
  },
  event090525: {
    content: `<p class="text">
      Uitvoering van <i>Een hard gelag</i> bij de opening van de <a class="text" href=https://www.wgkunst.nl/privat-spaces/>Private Spaces</a> expositie. </p>
      <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DJcZDR-IU5A/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DJcZDR-IU5A/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DJcZDR-IU5A/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Wg Kunst (@wgkunst)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`
},
  event080525: {
    content: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2103827754&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/radio-hinter" title="Radio Hinter" target="_blank" style="color: #cccccc; text-decoration: none;">Radio Hinter</a> · <a href="https://soundcloud.com/radio-hinter/08-05-2025-listening-session-mick-broer-joris-van-de-sande" title="Mick Broer &amp; Joris van de Sande (live) // Listening Session // 08-05-2025" target="_blank" style="color: #cccccc; text-decoration: none;">Mick Broer &amp; Joris van de Sande (live) // Listening Session // 08-05-2025</a></div>`
  },
  event160624: {
    content: `<iframe style="padding-top: 6%" src="https://www.denijverheid.org/agenda/3966-modulation-2" seamless></iframe>`
  },
  event130325:{
    content: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DHGgw00I16D/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DHGgw00I16D/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DHGgw00I16D/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Stranded FM (@strandedfm)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`
  },
  eenHardGelag: {
    content: `<p class="text">Experimenteel ambient album met klassieke invloeden, in samenwerking met Joris van de Sande.</p>
    <a target="_blank" href="https://jorisvandesande.bandcamp.com/album/een-hard-gelag-2">[bandcamp]</a>
    <a target="_blank" href="https://open.spotify.com/album/0FZcascCNbdu1AYixxmPfs?si=eKoT3DYsSIKO_z81MlCZww">[spotify]</a>
    <a target="_blank" href="https://www.youtube.com/playlist?list=OLAK5uy_mgDMcx-U9JhtE0ko_X4MtlGYZJE-Hy1Bs">[youtube]</a>
    <a target="_blank" href="https://music.apple.com/us/album/een-hard-gelag/1785888297">[apple music]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/een-hard-gelag">[soundcloud]</a>
    `
  },
  tabaksdrone: {
    content: `
    <p class="text">
      TikTok-compositie  voor <i>ademgebaseerde</i> instrumenten (aerofonen), elektronica en sigaretten. Uitvoerenden: Joris van de Sande (sopraan-saxofoon), Lucas van den Berg (Trombone), Daniel Jansen (blokfluit), Mariam Baldé (zang), Marie Wuselwesen (zang), Mick Broer (zang).
    </p>
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mickbroer/video/7477932044257889558" data-video-id="7477932044257889558" style="max-width: 325px;min-width: 325px;" > <section> <a target="_blank" title="@mickbroer" href="https://www.tiktok.com/@mickbroer?refer=embed">@mickbroer</a> <p>Registratie van ‘Tabaksdrone’</p> <a target="_blank" title="♬ original sound - Mick Broer" href="https://www.tiktok.com/music/original-sound-7477932382334454550?refer=embed">♬ original sound - Mick Broer</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    <p class="text">
      Elke uitvoerende krijgt één of meerdere sigaretten. Iedere toon uit de reeks wordt zo lang als mogelijk aangehouden, totdat de uitvoerende
      adem wil halen. Iedere toon begint en eindigt fluisterend. De uitvoerende neemt een hijs van de toegedeelde sigaret. De volgende toon wordt
      ingezet. Wanneer de hele reeks doorlopen is, begint hij of zij opnieuw bij de eerste noot. Elke individuele uitvoerende blijft deze instructies
      doorlopen totdat de sigaret is opgerookt. Mocht de uitvoerende de neiging krijgen om te hoesten, dan wordt dit niet verhuld of onderdrukt.
    </p>
    <img src="/assets/images/tabaksdrone.png" style="width: 100%; max-width: 600px; display: block; margin: auto;" />     
    `
  },
  wrijfMuziek: {
    content: `<p class="text">Compilatie EP van live uitvoeringen van <i>Cirkels en Hoeken</i>, <i>a-a-a</i> en <i>Wrijf Muziek</i></p>
    <a target="_blank" href="https://music.apple.com/us/album/wrijf-muziek-single/1761034783">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/wrijf-muziek">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/wrijf-muziek">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/6PmYRK5KePukBdQMBgoX5d?si=oSavKWS2TXq3GdnI-eHgSQ">[spotify]</a>
    <a target="_blank" href="https://youtube.com/playlist?list=OLAK5uy_mHruYuVxC1u0wnyiB7CemgRUBVprl_UoI&si=uU-mb3p39nkDMot7">[youtube]</a>
    `
  },
  kapwerkzaamheden: {
    content: `<p class="text"> Noise album, in samenwerking met Joris van de Sande. </p>
    <a target="_blank" href="https://music.apple.com/us/album/kapwerkzaamheden-ep/1685564690">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/kapwerkzaamheden">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/kapwerkzaamheden">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/037NAPoGz9mfUQcMsRQY0W?si=Wsm4Cc2UTTybabFIYNlidg">[spotify]</a>
    <a target="_blank" href="https://www.youtube.com/playlist?list=OLAK5uy_kQGt7sgXM5dnnaeEtpxcgSmZ7iucHdjHA">[youtube]</a>
    `
  },
  zenderKamers: {
    content: `<p class="text">Reeks audiovisuele composities, in samenwerking met Noor Boiten en Esther Coorevits.</p>
    <a target="_blank" href="https://music.apple.com/us/album/zender-kamers-ep/1665367366">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/zender-kamers">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/zender-kamers">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/5g7fIrxc1MGZJ7txZVJubv?si=VB3AbSNmR8CBWHNXALSftQ">[spotify]</a>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL0DGPPqMaWGvfnWeBsBc45fMWr_Pnwb_b">[youtube]</a>
    `
  },
  zender: {
    content: `<p class="text">Generatieve audiovisuele composities, in samenwerking met Noor Boiten en Esther Coorevits.</p>
    <a target="_blank" href="https://music.apple.com/us/album/zender-ep/1655830405">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/zender-kamers">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/zender-kamers">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/0mk1mjehMF2xrb6JbbRxyO?si=TXlfs9JzRxGWtxral8MO0A">[spotify]</a>
    <a target="_blank" href="https://www.youtube.com/watch?v=8NIr0K_p5ls">[youtube]</a>
    `
  },
  juni2022: {
    content: `<p class="text">Muziekdagboek, gemaakt in juni 2022.</p>
    <a target="_blank" href="https://music.apple.com/us/album/juni-2022/1636184666">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/juni-2022">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/juni-2022">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/4p2FxSciqoEBrwX3x7g1Fj?si=jVpDYYstTXyTTNZc3CZTaA">[spotify]</a>
    <a target="_blank" href="https://youtube.com/playlist?list=OLAK5uy_myJ6Dp66lDml1eDyhZY83-mMPEiOS3e0I&si=UgZ79xD3Xu06-RCO">[youtube]</a>
    `  
  },
  bladeren: {
    content: `<p class="text">Compilatie van gearchiveerd werk.</p>
    <a target="_blank" href="https://music.apple.com/us/album/de-bladeren-willen-zijn-maar-de-wind-blijft-maar/1639102584">[apple music]</a>
    <a target="_blank" href="https://mickbroer.bandcamp.com/album/de-bladeren-willen-zijn-maar-de-wind-blijft-maar-kutten">[bandcamp]</a>
    <a target="_blank" href="https://soundcloud.com/mickbroer/sets/bladeren">[soundcloud]</a>
    <a target="_blank" href="https://open.spotify.com/album/1A5ftC73XWsqU4JQKdVW0n?si=p6liEJnzR3KBZYx6riLgAQ">[spotify]</a>
    <a target="_blank" href="http://youtube.com/playlist?list=OLAK5uy_nBG651T_f2yDfLY6S5BEWO67HPuwtfF0U">[youtube]</a>
    ` 
  },
  exile: {
    content: `
    <p class="text">
    Filminstallatie van Noor Boiten. Onderdeel van de groepstentoonstelling <i>STROOM</i> op 2 juni 2022.
    </p>
    <iframe class="youtube" src="https://www.youtube.com/embed/tO6bkIg1nr0?color=white&modestbranding=1&controls=1&rel=0" ...></iframe>
    <p class="text">
 
    </p>`  
  },
  overhoop: {
    content: `<iframe style="padding-top: 6%" src="https://ita.nl/en/shows/overhoop/1656268/" seamless></iframe>`
  },
  parra: {
    content: `<iframe style="padding-top: 6%" src="https://ita.nl/en/shows/parra-jr/1655916/" seamless></iframe>`
  }
};

function animateTitle() {
  index = (index + 1) % title.length;
  document.title = title[index];
  setTimeout(animateTitle, 600);
}

function updateElementStyle(key, isSelected) {
  const el = document.getElementById(key); // dynamically fetch element
  if (!el) return;
  if (isSelected) {
    el.style.color = "black";
    el.innerHTML = el.innerHTML.replace("[___]", "[ █ ]");
    elements[key].isSelected = true;
  } else {
    el.style.color = "rgb(132, 116, 116)";
    el.innerHTML = el.innerHTML.replace("[ █ ]", "[___]");
    elements[key].isSelected = false;
  }
}

function resetElements(exceptKey) {
  Object.keys(elements).forEach(key => {
    if (key !== exceptKey && elements[key].isSelected) {
      updateElementStyle(key, false);
    }
  });
}

function renderProject(key) {
  const project = projects[key];

  if (project) {
    showcase.innerHTML = `
      <div class="project fade">
        ${project.content}
      </div>
    `;

    if (key === "tabaksdrone") {
      if (!document.querySelector('script[src*="assets/libraries/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }

      placeRandomImages();
    }
  } else {
    showcase.innerHTML = `<p class="text fade">[ project niet gevonden ]</p>`;
  }
}

function bindItemEvents() {
  Object.keys(elements).forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;

    el.onmouseover = () => {
      if (!elements[key].isSelected) el.style.color = "black";
    };

    el.onmouseout = () => {
      if (!elements[key].isSelected) el.style.color = "rgb(132, 116, 116)";
    };

    el.onclick = () => {
      const isSelected = !elements[key].isSelected;
      resetElements(key);
      updateElementStyle(key, isSelected);
      if (isSelected) {
        renderProject(key);
      } else {
        showcase.innerHTML = "";
      }
    };
  });
}

const categoryTabs = document.querySelectorAll('.category');
const categoryGroups = document.querySelectorAll('.category-group');

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selected = tab.dataset.category;

    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    categoryGroups.forEach(group => {
      if (group.dataset.category === selected) {
        group.classList.remove('fade-out');
        group.style.display = 'block';
        requestAnimationFrame(() => {
          group.classList.add('visible');
        });
      } else if (group.classList.contains('visible')) {
        group.classList.add('fade-out');
        group.classList.remove('visible');
    
        setTimeout(() => {
          group.style.display = 'none';
          group.classList.remove('fade-out');
        }, 100);
      } else {
        group.style.display = 'none';
        group.classList.remove('visible');
        group.classList.remove('fade-out');
      }
    });

    showcase.innerHTML = "";
    Object.keys(elements).forEach(key => {
      if (elements[key].isSelected) {
        updateElementStyle(key, false);
      }
    });

    bindItemEvents(); // <- crucial: rebind after visibility changes
  });
});

animateTitle();
bindItemEvents();

const initialCategory = "werk";
document.querySelector(`.category[data-category="${initialCategory}"]`)?.classList.add('active');
document.querySelector(`.category-group[data-category="${initialCategory}"]`)?.classList.add('visible');
// document.querySelector(`.category-group[data-category="${initialCategory}"]`)?.style.display = 'block';