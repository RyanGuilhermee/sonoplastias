// function shareAudioMessage(audio_url, fallback_function, fallback_url, title) {
//     if (navigator.canShare) {
//         if (navigator.canShare({ files: [new File(["foo"], "foo.mp3", { type: "audio/mp3" })] })) {
//             fetch(audio_url)
//                 .then(r => r.blob())
//                 .then(blobFile => new File([blobFile], "myinstants.mp3", {
//                     type: "audio/mp3"
//                 }))
//                 .then(file => {
//                     navigator.share({ files: [file], })
//                         .then(() => ga('send', 'event', 'share', 'webshare_api_audio_success', fallback_url)).catch((error) => {
//                             if (error.name != 'AbortError') {
//                                 throw error;
//                             }
//                         });
//                 });
//         }
//         else if (navigator.canShare({ url: fallback_url })) {
//             navigator.share({ url: fallback_url, }).then(() => ga('send', 'event', 'share', 'webshare_api_url_success', fallback_url)).catch(error => { if (error.name != 'AbortError') { throw error; } });
//         } else { 
//             fallback_function(fallback_url); 
//         }
//     } else { 
//         fallback_function(fallback_url); 
//     }
// }


