/* =========================
   BONZITV CORE HANDLER
   ========================= */

// ===== SHOWS (BFDI + BFDIA + BFB/TPOT + Pizza POV + EthanGamerTV Roblox) =====
var BonziTVSHOWS = [
  // --- BFDI ---
  "YQa2-DY7Y_Q", "0hRB8d6aAzs", "9w0G7v6wbm8", "04ErdQvQKyk", "NKjA1pGl5W4",

  // --- BFDIA ---
  "oPFuC7IcTiU", "b8vUzNczUbo",

  // --- BFB / TPOT ---
  "m_7nnajnaI8", "VrsdG8wJGAg",

  // --- Pizza POV / No Talking ---
  "GAHDT5tOyco", "vwsGT30TQ3A", "oT7iJzjhfJU", "Jyh88VNDWww", "fl2u3hZLzYw",

  // --- EthanGamerTV Roblox ---
  "4jtAbf5wk0s", "MWqNcT031OI", "VycoBoE4Qkk", "_ozldR0jGBs",
  "0HR5fL1qOQk", "6tgY-t3slFM", "nrvV9s_dknA", "R9J1BpkcCYs", "klj3qXEaFJQ"
];

// ===== IDENTS (Real BonziTV idents only) =====
var BonziTVIDENTS = [
  "88cxenu68o8", "b2OUKjLzcEc", "lF47OCVZi6s",
  "P8y03L-LUFE", "cuBqIBhnuUU", "bYDrr8Z9fPE",
  "aKLk59bnKWE", "i0xpDILkXG8", "5674qRmTQY8", "RnkrKi4Tsuo"
];

// ===== STATE =====
var bonziShowIndex = 0;
var bonziIdentIndex = 0;
var bonziMode = "show";

// ===== CORE HANDLER FUNCTION =====
function bonziTVNext() {
  var nextVideo;

  if (bonziMode === "show") {
    nextVideo = BonziTVSHOWS[bonziShowIndex];
    bonziShowIndex = (bonziShowIndex + 1) % BonziTVSHOWS.length;
    bonziMode = "ident";
  } else {
    nextVideo = BonziTVIDENTS[bonziIdentIndex];
    bonziIdentIndex = (bonziIdentIndex + 1) % BonziTVIDENTS.length;
    bonziMode = "show";
  }

  // Return video info for whatever handler or player will use it
  return {
    videoId: nextVideo,
    mode: bonziMode
  };
}

// ===== SOCKET / EXTERNAL HOOK =====
function toggleBonziTV(status) {
  if (status) {
    bonziShowIndex = 0;
    bonziIdentIndex = 0;
    bonziMode = "show";
    return bonziTVNext(); // Start with first video
  } else {
    return null; // BonziTV stopped
  }
}

// ===== EXAMPLE USAGE =====
// Call toggleBonziTV(true) to reset and start
// Call bonziTVNext() whenever you want the next video in the rotation

"use strict";
var passcode = "";
var err = false;
var admin = false;
function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hourString = String(hours % 12).padStart(2, "0");
    let minuteString = String(minutes).padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";
    return `${hourString}:${minuteString} ${ampm}`;
}


function updateAds() {
    var a = $(window).height() - $(adElement).height(),
        b = a <= 250;
    b && (a = $(window).height()), $(adElement)[b ? "hide" : "show"](), $("#content").height(a);
}
function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}
function range(a, b) {
    for (var c = [], d = a; d <= b; d++) c.push(d);
    for (var d = a; d >= b; d--) c.push(d);
    return c;
}
function replaceAll(a, b, c) {
    return a.replace(new RegExp(b, "g"), c);
}
function s4() {
    return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
}
function youtubeParser(a) {
    var b = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        c = a.match(b);
    return !(!c || 11 != c[7].length) && c[7];
}
function rtimeOut(a, b) {
    var c,
        d = Date.now,
        e = window.requestAnimationFrame,
        f = d(),
        g = function () {
            d() - f < b ? c || e(g) : a();
        };
    return (
        e(g),
        {
            clear: function () {
                c = 1;
            },
        }
    );
}
function rInterval(a, b) {
    var c,
        d = Date.now,
        e = window.requestAnimationFrame,
        f = d(),
        g = function () {
            d() - f < b || ((f += b), a()), c || e(g);
        };
    return (
        e(g),
        {
            clear: function () {
                c = 1;
            },
        }
    );
}
function linkify(a) {
    var b = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi;
    return a.replace(b, function(url) {
        return "<a href='" + url.replace(/'/g, "&apos;") + "' target='_blank'>" + url + "</a>";
    });
}
function loadBonzis(a) {
    loadQueue.loadManifest([
        { id: "bonziBlack", src: "./img/bonzi/black.png" },
        { id: "bonziBlue", src: "./img/bonzi/blue.png" },
        { id: "bonziBrown", src: "./img/bonzi/brown.png" },
        { id: "bonziGreen", src: "./img/bonzi/green.png" },
        { id: "bonziCyan", src: "./img/bonzi/cyan.png" },
        { id: "bonziPurple", src: "./img/bonzi/purple.png" },
        { id: "bonziRed", src: "./img/bonzi/red.png" },
        { id: "bonziPink", src: "./img/bonzi/pink.png" },
        { id: "bonziPeedy", src: "./img/bonzi/peedy.png" },
        { id: "topjej", src: "./img/misc/topjej.png" },
    ]),
        loadQueue.on(
            "fileload",
            function (a) {
                loadDone.push(a.item.id);
            },
            this
        ),
        a && loadQueue.on("complete", a, this);
}
function loadTest() {
    $("#login_card").hide(),
        $("#login_error").hide(),
        $("#login_load").show(),
        (window.loadTestInterval = rInterval(function () {
            try {
                if (!loadDone.equals(loadNeeded)) throw "Not done loading.";
                login(), loadTestInterval.clear();
            } catch (a) {}
        }, 100));
}
function login() {
   socket.emit("login", {passcode:passcode, name: $("#login_name").val(), room: $("#login_room").val() }), setup();
}
function errorFatal() {
    ("none" != $("#page_ban").css("display") && "none" != $("#page_kick").css("display")) || $("#page_error").show();
}
function setup() {
    $("#chat_send").click(sendInput),
        $("#chat_message").keypress(function (a) {
            13 == a.which && sendInput();
        }),
        socket.on("room", function (a) {
            $("#room_owner")[a.isOwner ? "show" : "hide"](), $("#room_public")[a.isPublic ? "show" : "hide"](), $("#room_private")[a.isPublic ? "hide" : "show"](), $(".room_id").text(a.room);
        }),
        socket.on("nuke", (data) => {
            let bonzi = bonzis.get(data.guid);
            bonzi.explode();
        });
        socket.on("updateAll", function (a) {
            $("#page_login").hide(), $("#chat_log").show(), $("#chat_log_min").hide(), (usersPublic = a.usersPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        socket.on("update", function (a) {
            (window.usersPublic[a.guid] = a.userPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        socket.on("talk", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent([{ type: "text", text: a.text }]);
        }),
        socket.on("move", function (a) {
            var b = bonzis[a.guid];
            void 0 !== b && b.move(a.x, a.y);
        }),
        socket.on("joke", function (a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.joke();
        }),
        socket.on("youtube", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.youtube(a.vid);
        }),
        socket.on("fact", function (a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.fact();
        }),
        socket.on("backflip", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.backflip(a.swag);
        }),
        socket.on("asshole", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.asshole(a.target);
        }),
        socket.on("owo", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.owo(a.target);
        }),
        
        socket.on("triggered", function (a) {

            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_triggered);
        }),
               socket.on("linux", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_linux);
        }),
        
        socket.on("clap", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.clap();
        }),
        socket.on("bang", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.bang();
        }),
        socket.on("image", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.image(a.url);
        }),
        socket.on("video", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.video(a.url);
        }),
        socket.on("grin", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.grin();
        }),
        /* =========================
   BONZITV CORE HANDLER + AUTO PLAY + SOCKET (socket on top)
   ========================= */

        socket.on("bonzitv", function (data) {
              if (data.status) {
                var container = document.getElementById("bonzitv_container");
                if (!container) return;
                container.style.display = "block";
                if (data.vid) {
                    bonziTVLoadVideo(data.vid);
                } else {
                    bonziTVLoadNext();
                }
              } else {
                var container = document.getElementById("bonzitv_container");
                if (!container) return;
                container.style.display = "none";
                if (bonziYTPlayer) bonziYTPlayer.destroy();
                container.innerHTML = '';
              }
            });

            var BonziTVSHOWS = [
              "YQa2-DY7Y_Q","0hRB8d6aAzs","9w0G7v6wbm8","04ErdQvQKyk","NKjA1pGl5W4",
              "oPFuC7IcTiU","b8vUzNczUbo",
              "m_7nnajnaI8","VrsdG8wJGAg",
              "GAHDT5tOyco","vwsGT30TQ3A","oT7iJzjhfJU","Jyh88VNDWww","fl2u3hZLzYw",
              "4jtAbf5wk0s","MWqNcT031OI","VycoBoE4Qkk","_ozldR0jGBs","0HR5fL1qOQk",
              "6tgY-t3slFM","nrvV9s_dknA","R9J1BpkcCYs","klj3qXEaFJQ"
            ];

            var BonziTVIDENTS = [
              "88cxenu68o8","b2OUKjLzcEc","lF47OCVZi6s",
              "P8y03L-LUFE","cuBqIBhnuUU","bYDrr8Z9fPE",
              "aKLk59bnKWE","i0xpDILkXG8","5674qRmTQY8","RnkrKi4Tsuo"
            ];

            var bonziMode = "show";
            var bonziYTPlayer = null;

            function bonziTVLoadVideo(videoId) {
              var playerContainer = document.getElementById("bonzitv_player");
              if (playerContainer) {
                playerContainer.innerHTML =
                  '<iframe id="bonzitv_iframe" ' +
                  'src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&enablejsapi=1" ' +
                  'allow="autoplay; encrypted-media" frameborder="0"></iframe>';

                if (bonziYTPlayer) bonziYTPlayer.destroy();
                bonziYTPlayer = new YT.Player("bonzitv_iframe", {
                  events: {
                    onStateChange: function (e) {
                      if (e.data === YT.PlayerState.ENDED) {
                        bonziTVLoadNext();
                      }
                    }
                  }
                });
              }
            }

            function bonziTVLoadNext() {
              var videoId;

              if (bonziMode === "show") {
                videoId = BonziTVSHOWS[Math.floor(Math.random() * BonziTVSHOWS.length)];
                bonziMode = "ident";
              } else {
                videoId = BonziTVIDENTS[Math.floor(Math.random() * BonziTVIDENTS.length)];
                bonziMode = "show";
              }

              bonziTVLoadVideo(videoId);
            }

            (function () {
              var tag = document.createElement("script");
              tag.src = "https://www.youtube.com/iframe_api";
              document.head.appendChild(tag);
            })();

            function onYouTubeIframeAPIReady() {
            }
        socket.on("bonzitv_video", function (data) {
            $("#bonzitv_container").show();
            bonziTVLoadVideo(data.vid);
            bonziMode = "ident"; // After a chosen video, next should be an ident
        }),
        socket.on("admin", function (data) {
            window.isAdmin = data.admin;
            window.admin = data.admin;
        }),
        socket.on("alert", function (data) {
            alert(data.text);
        }),
        socket.on("nuked", () => setTimeout(() => { blockerror = true; location.reload() }, 4000));
        socket.on("leave", function (a) {
            var b = bonzis[a.guid];
            "undefined" != typeof b &&
                b.exit(
                    function (a) {
                        this.deconstruct(), delete bonzis[a.guid], delete usersPublic[a.guid], usersUpdate();
                    }.bind(b, a)
                );
        });
}
function usersUpdate() {
    (usersKeys = Object.keys(usersPublic)), (usersAmt = usersKeys.length);
}
function sendInput() {
    var a = $("#chat_message").val();
    if (($("#chat_message").val(""), a.length > 0)) {
        var b = youtubeParser(a);
        if (b) return void socket.emit("command", { list: ["youtube", b] });
        if ("/" == a.substring(1, 0)) {
            var c = a.substring(1).split(" ");
            if (c[0].toLowerCase() === "bye") {
                socket.emit("command", { list: ["bye"] });
            } else {
                socket.emit("command", { list: c });
            }
        } else socket.emit("talk", { text: a });
    }
}
function touchHandler(a) {
    var b = a.changedTouches,
        c = b[0],
        d = "";
    switch (a.type) {
        case "touchstart":
            d = "mousedown";
            break;
        case "touchmove":
            d = "mousemove";
            break;
        case "touchend":
            d = "mouseup";
            break;
        default:
            return;
    }
    var e = document.createEvent("MouseEvent");
    e.initMouseEvent(d, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(e);
}
var adElement = "#ap_iframe";
$(function () {
    $("#chat_log_minimize").click(function() {
        $("#chat_log").hide();
        $("#chat_log_min").show();
    });
    $("#chat_log_min").click(function() {
        $("#chat_log_min").hide();
        $("#chat_log").show();
    });
    // Simple drag for chat log
    let dragging = false;
    let offset = { x: 0, y: 0 };
    $("#chat_log_header").mousedown(function(e) {
        dragging = true;
        offset.x = e.pageX - $("#chat_log").offset().left;
        offset.y = e.pageY - $("#chat_log").offset().top;
    });
    $(window).mousemove(function(e) {
        if (dragging) {
            $("#chat_log").css({
                left: e.pageX - offset.x,
                top: e.pageY - offset.y,
                right: 'auto'
            });
        }
    });
    $(window).mouseup(function() {
        dragging = false;
    });

    $(window).load(updateAds), $(window).resize(updateAds), $("body").on("DOMNodeInserted", adElement, updateAds), $("body").on("DOMNodeRemoved", adElement, updateAds);
});
var _createClass = (function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
            }
        }
        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    })(),
    Bonzi = (function () {
        function a(b, c) {
            var d = this;
            _classCallCheck(this, a),
                (this.userPublic = c || { name: "BonziBUDDY", color: "purple", speed: 175, pitch: 50, voice: "en-us" }),
                (this.color = this.userPublic.color),
                this.colorPrev,
                (this.data = window.BonziData),
                (this.drag = !1),
                (this.dragged = !1),
                (this.eventQueue = []),
                (this.eventRun = !0),
                (this.event = null),
                (this.willCancel = !1),
                (this.run = !0),
                (this.mute = !1),
                (this.eventTypeToFunc = { anim: "updateAnim", html: "updateText", text: "updateText", idle: "updateIdle" }),
                "undefined" == typeof b ? (this.id = s4() + s4()) : (this.id = b),
                (this.rng = new Math.seedrandom(this.seed || this.id || Math.random())),
                (this.selContainer = "#content"),
                (this.$container = $(this.selContainer)),
                this.$container.append(
                    "\n\t\t\t<div id='bonzi_" +
                        this.id +
                        "' class='bonzi'>\n\t\t\t\t<div class='bonzi_name'></div>\n\t\t\t\t\t<div class='bonzi_placeholder'></div>\n\t\t\t\t<div style='display:none' class='bubble'>\n\t\t\t\t\t<p class='bubble-content'></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
                ),
                (this.selElement = "#bonzi_" + this.id),
                (this.selDialog = this.selElement + " > .bubble"),
                (this.selDialogCont = this.selElement + " > .bubble > p"),
                (this.selNametag = this.selElement + " > .bonzi_name"),
                (this.selCanvas = this.selElement + " > .bonzi_placeholder"),
                $(this.selCanvas).width(this.data.size.x).height(this.data.size.y),
                (this.$element = $(this.selElement)),
                (this.$canvas = $(this.selCanvas)),
                (this.$dialog = $(this.selDialog)),
                (this.$dialogCont = $(this.selDialogCont)),
                (this.$nametag = $(this.selNametag)),
                (this.$typing = null),
                this.updateName(),
                $.data(this.$element[0], "parent", this),
                this.updateSprite(!0),
                (this.generate_event = function (a, b, c) {
                    var d = this;
                    a[b](function (a) {
                        d[c](a);
                    });
                }),
                this.generate_event(this.$canvas, "mousedown", "mousedown"),
                this.generate_event($(window), "mousemove", "mousemove"),
                this.generate_event($(window), "mouseup", "mouseup");
                
                this.run = true;
                this.eventQueue = [];
                this.eventRun = true;
            
                this.explode = function() {
                    let explosion = document.createElement("div");
                    explosion.className = "explosion";
                    explosion.style.left = this.x + "px";
                    explosion.style.top = this.y + "px";
                    document.body.appendChild(explosion);
                    this.$element[0].style.zIndex = "999999"; // show above chat log
                    let sfx = new Audio("./sfx/explosion.mp3");
                    sfx.play();
                    let rot = 0;
                    let x = 0;
                    let y = 0;
                    let angvel = Math.random() * 30 + 20;
                    if (Math.random() > 0.5) angvel *= -1;
                    let xvel = Math.random() * 10 + 5;
                    if (Math.random() > 0.5) xvel *= -1;
                    let yvel = -20;
                    let i = 0;
                    let interval = setInterval(() => {
                        i++;
                        yvel += 2;
                        x += xvel;
                        rot += angvel;
                        y += yvel;
                        this.$element[0].style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
                        if (i > 120) {
                            clearInterval(interval);
                            explosion.remove();
                            this.$element[0].remove();
                        }
                    }, 33)
                }
            var e = this.maxCoords();
            (this.x = e.x * this.rng()),
                (this.y = e.y * this.rng()),
                this.move(),
                $.contextMenu({
                    selector: this.selCanvas,
                    build: function (a, b) {
                        var items = {
                            cancel: {
                                name: "Cancel",
                                callback: function () {
                                    d.cancel();
                                },
                            },
                            mute: {
                                name: function () {
                                    return d.mute ? "Unmute" : "Mute";
                                },
                                callback: function () {
                                    d.cancel(), (d.mute = !d.mute);
                                },
                            },
                            asshole: {
                                name: "Call an Asshole",
                                callback: function () {
                                    socket.emit("command", { list: ["asshole", d.userPublic.name] });
                                },
                            },
                            owo: {
                                name: "Notice Bulge",
                                callback: function () {
                                    socket.emit("command", { list: ["owo", d.userPublic.name] });
                                },
                            }
                        };

                        if (window.admin) {
                            items.sep1 = "---------";
                            items.kick = {
                                name: "Kick",
                                callback: function () {
                                    var reason = prompt("Enter kick reason:", "No reason provided");
                                    if (reason !== null) {
                                        socket.emit('command', { list: ["kick", d.userPublic.name, reason] });
                                    }
                                }
                            };
                            items.ban = {
                                name: "Ban",
                                callback: function () {
                                    var reason = prompt("Enter ban reason:", "No reason provided");
                                    if (reason !== null) {
                                        socket.emit('command', { list: ["ban", d.userPublic.name, reason] });
                                    }
                                }
                            };
                        }

                        return { items: items };
                    },
                    animation: { duration: 175, show: "fadeIn", hide: "fadeOut" },
                }),
                // Add this in the setup() function, with other socket.on handlers:
                socket.on("voicechat", function (a) {
                    BonziHandler.voicechat = a.status;
                    if (a.status) {
                        navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(function(stream) {
                            console.log("Microphone access granted");
                            window.localAudioStream = stream;

                            var mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' });
                                            mediaRecorder.ondataavailable = function(e) {
                                                if (e.data.size > 0 && BonziHandler.voicechat) {
                                                    var reader = new FileReader();
                                                    reader.onload = function() {
                                                        socket.emit("voice_chunk", { chunk: reader.result });
                                                    };
                                                    reader.readAsDataURL(e.data);
                                                }
                                            };
                                            mediaRecorder.start(250);
                                            window.mediaRecorder = mediaRecorder;
                                        })
                                        .catch(function(err) {
                                            console.error("Microphone access denied:", err);
                                            socket.emit("command", { list: ["voicechat", "off"] });
                                            alert("Microphone access is required for voice chat.");
                                        });
                                    } else {
                                        if (window.mediaRecorder) {
                                            window.mediaRecorder.stop();
                                            window.mediaRecorder = null;
                                        }
                                        if (window.localAudioStream) {
                                            window.localAudioStream.getTracks().forEach(function(track) { track.stop(); });
                                            window.localAudioStream = null;
                                        }
                                    }
                                });

            socket.on("voice_chunk", function(data) {
                var b = bonzis[data.guid];
                if (b && !b.mute) {
                    try {
                        // Extract base64 data from data URL format
                        var base64Data = data.chunk.split(',')[1];

                        // Use the b64toBlob function that's already defined
                        var blob = b64toBlob(base64Data, 'audio/webm;codecs=opus');
                        var audioUrl = URL.createObjectURL(blob);
                        var audio = new Audio(audioUrl);

                        audio.autoplay = true;
                        audio.onended = function() {
                            // Clean up the object URL when done
                            URL.revokeObjectURL(audioUrl);
                        };

                        audio.play().catch(function(e) {
                            console.warn("Voice playback failed, retrying...");
                            // Try once more
                            setTimeout(function() { 
                                audio.play().catch(console.error); 
                            }, 100);
                        });
                    } catch (e) {
                        console.error("Error processing voice chunk:", e);
                    }
                }
            });

                function b64toBlob(b64Data, contentType, sliceSize) {
                    contentType = contentType || '';
                    sliceSize = sliceSize || 512;
                    var byteCharacters = atob(b64Data);
                    var byteArrays = [];
                    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                        var slice = byteCharacters.slice(offset, offset + sliceSize);
                        var byteNumbers = new Array(slice.length);
                        for (var i = 0; i < slice.length; i++) {
                            byteNumbers[i] = slice.charCodeAt(i);
                        }
                        var byteArray = new Uint8Array(byteNumbers);
                        byteArrays.push(byteArray);
                    }
                    return new Blob(byteArrays, {type: contentType});
                }
                socket.on("joke", function (a) {
                    var b = bonzis[a.guid];
                    b && b.joke();
                });
                socket.on("fact", function (a) {
                    var b = bonzis[a.guid];
                    b && b.fact();
                });
                socket.on("scream", function(data) {
                    Object.values(bonzis).forEach(function(b) {
                        b.scream();
                    });
                });
                socket.on("dvdbounce", function(data) {
                    var b = bonzis[data.guid];
                    if (b) b.dvdBounce();
                });
                socket.on("orbit", function(data) {
                    var b = bonzis[data.guid];
                    if (b) b.orbit();
                });
                socket.on("boing", function(data) {
                    var b = bonzis[data.guid];
                    if (b) b.boing();
                });
                socket.on("typing", function (a) {
                    var b = bonzis[a.guid];
                    if (b) {
                        if (a.status) {
                            // Typing indicator removed as per user request
                        } else {
                            if (b.$typing) {
                                b.$typing.remove();
                                b.$typing = null;
                            }
                        }
                    }
                });
                this.$typing = null;
                $("#chat_message").on("input", function() {
                    let status = $(this).val().length > 0;
                    if (window.typingStatus !== status) {
                        window.typingStatus = status;
                        socket.emit("typing", { status: status });
                    }
                });
                $("#chat_message").on("keydown", function(e) {
                    if (e.which === 13) {
                        window.typingStatus = false;
                        socket.emit("typing", { status: false });
                    }
                });
                this.needsUpdate = false;
                this.runSingleEvent([{ type: "anim", anim: "surf_intro", ticks: 30 }]);
                var joinSoundTimeout = setTimeout(function() {
                    var joinSound = new Audio('./sfx/join.wav');
                    joinSound.play();
                }, 1300);
            
                if (this.color === "peedy") {
                    var joinSoundTimeout = setTimeout(function() {
                        var joinSound = new Audio('./sfx/peedyjoin.wav');
                        joinSound.play();
                    }, 1300);
                }
        }
        return (
            _createClass(a, [
                {
                    key: "eventMake",
                    value: function (a) {
                        return {
                            list: a,
                            index: 0,
                            timer: 0,
                            cur: function () {
                                return this.list[this.index];
                            },
                        };
                    },
                },
                {
                    key: "mousedown",
                    value: function (a) {
                        if (this.bouncing || this.orbiting || this.boinging) {
                            this.bouncing = false;
                            this.orbiting = false;
                            this.boinging = false;
                            return;
                        }
                        1 == a.which && ((this.drag = !0), (this.dragged = !1), (this.drag_start = { x: a.pageX - this.x, y: a.pageY - this.y }), this.cancel(), this.sprite.gotoAndPlay("crossmove"));
                    },
                },
                {
                    key: "mousemove",
                    value: function (a) {
                        this.drag && (this.move(a.pageX - this.drag_start.x, a.pageY - this.drag_start.y), (this.dragged = !0), socket.emit("move", { x: this.x, y: this.y }));
                    },
                },
                {
                    key: "mouseup",
                    value: function (a) {
                        this.drag && (this.sprite.gotoAndPlay("idle"), (this.drag = !1));
                    },
                },
                {
                    key: "scream",
                    value: function() {
                        var self = this;
                        var startY = this.y;
                        var i = 0;
                        var interval = setInterval(function() {
                            i++;
                            self.y -= 10;
                            self.move();
                            if (i >= 50) {
                                clearInterval(interval);
                                setTimeout(function() {
                                    self.y = startY;
                                    self.move();
                                }, 1000);
                            }
                        }, 20);
                    }
                },
                {
                    key: "updateTypingPos",
                    value: function () {
                        this.$typing && this.$typing.css({ left: this.x + 80 + "px", top: this.y - 30 + "px" });
                    },
                },
                {
                    key: "move",
                    value: function (a, b) {
                        0 !== arguments.length && ((this.x = a), (this.y = b));
                        var c = this.maxCoords();
                        (this.x = Math.min(Math.max(0, this.x), c.x)),
                            (this.y = Math.min(Math.max(0, this.y), c.y)),
                            this.$element.css({ marginLeft: this.x, marginTop: this.y });
                        if (this.sprite) {
                            (this.sprite.x = this.x),
                                (this.sprite.y = this.y);
                        }
                        (BonziHandler.needsUpdate = !0),
                            this.updateDialog(),
                            this.updateTypingPos();
                    },
                },
                {
                    key: "mouseup",
                    value: function (a) {
                        !this.dragged && this.drag && this.cancel(), (this.drag = !1), (this.dragged = !1);
                    },
                },
                {
                    key: "runSingleEvent",
                    value: function (a) {
                        this.mute || this.eventQueue.push(this.eventMake(a));
                    },
                },
                {
                    key: "clearDialog",
                    value: function () {
                        this.$dialogCont.html(""), this.$dialog.hide();
                    },
                },
                {
                    key: "cancel",
                    value: function () {
                        this.clearDialog(), this.stopSpeaking(), (this.eventQueue = [this.eventMake([{ type: "idle" }])]);
                    },
                },
                {
                    key: "retry",
                    value: function () {
                        this.clearDialog(), (this.event.timer = 0);
                    },
                },
                {
                    key: "stopSpeaking",
                    value: function () {
                        this.goingToSpeak = !1;
                        try {
                            this.voiceSource.stop();
                        } catch (a) {}
                    },
                },
                {
                    key: "cancelQueue",
                    value: function () {
                        this.willCancel = !0;
                    },
                },
                {
                    key: "updateAnim",
                    value: function () {
                        if (0 === this.event.timer) {
                            this.sprite.gotoAndPlay(this.event.cur().anim);
                            if (this.event.cur().anim === "grin_fwd") {
                                setTimeout(function() {
                                    var sound = new Audio("./sfx/grin.wav");
                                    sound.play();
                                }, 300);
                            }
                            if (this.event.cur().anim === "beat_fwd") {
                                var sound = new Audio("./sfx/bang.wav");
                                sound.play();
                            }
                        }
                        this.event.timer++, (BonziHandler.needsUpdate = !0), this.event.timer >= this.event.cur().ticks && this.eventNext();
                    },
                },
                {
                    key: "updateText",
                    value: function () {
                        0 === this.event.timer && (this.$dialog.css("display", "block"), (this.event.timer = 1), this.talk(this.event.cur().text, this.event.cur().say, !0)), "none" == this.$dialog.css("display") && this.eventNext();
                    },
                },
                {
                    key: "updateIdle",
                    value: function () {
                        var a = "idle" == this.sprite.currentAnimation && 0 === this.event.timer;
                        (a = a || this.data.pass_idle.indexOf(this.sprite.currentAnimation) != -1),
                            a
                                ? this.eventNext()
                                : (0 === this.event.timer && ((this.tmp_idle_start = this.data.to_idle[this.sprite.currentAnimation]), this.sprite.gotoAndPlay(this.tmp_idle_start), (this.event.timer = 1)),
                                  this.tmp_idle_start != this.sprite.currentAnimation && "idle" == this.sprite.currentAnimation && this.eventNext(),
                                  (BonziHandler.needsUpdate = !0));
                    },
                },
                {
                    key: "updateRandom",
                    value: function () {
                        this.eventNext();
                    },
                },
                {
                    key: "update",
                    value: function () {
                        if (this.run) {
                            if (
                                (0 !== this.eventQueue.length && this.eventQueue[0].index >= this.eventQueue[0].list.length && this.eventQueue.splice(0, 1), (this.event = this.eventQueue[0]), 0 !== this.eventQueue.length && this.eventRun)
                            ) {
                                var a = this.event.cur().type;
                                try {
                                    this[this.eventTypeToFunc[a]]();
                                } catch (b) {
                                    this.event.index++;
                                }
                            }
                            this.willCancel && (this.cancel(), (this.willCancel = !1)), this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                        }
                    },
                },
                {
                    key: "eventNext",
                    value: function () {
                        (this.event.timer = 0), (this.event.index += 1);
                    },
                },
                {
                    key: "talk",
                    value: function (a, b, c) {
                        var d = this;
                        (c = c || !1),
                            (a = replaceAll(a, "{NAME}", this.userPublic.name)),
                            (a = replaceAll(a, "{COLOR}", this.color)),
                            "undefined" != typeof b ? ((b = replaceAll(b, "{NAME}", this.userPublic.name)), (b = replaceAll(b, "{COLOR}", this.color))) : (b = a.replace("&gt;", "")),
                            (a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\//g, "&#x2F;")),
                            (a = a.replace(/javascript:/gi, "no-javascript:").replace(/on\w+=/gi, "no-on=")),
                            (a = linkify(a));
                        var e = "&gt;" == a.substring(0, 4) || ">" == a[0];
                        this.$dialogCont[c ? "html" : "text"](a)[e ? "addClass" : "removeClass"]("bubble_greentext").css("display", "block");

                        if (BonziHandler.voicechat !== false) {
                            this.stopSpeaking(),
                                (this.goingToSpeak = !0),
                                speak.play(
                                    b,
                                    { pitch: this.userPublic.pitch, speed: this.userPublic.speed },
                                    function () {
                                        d.clearDialog();
                                    },
                                    function (a) {
                                        d.goingToSpeak || a.stop(), (d.voiceSource = a);
                                    }
                                );
                        } else {
                            setTimeout(function() {
                                d.clearDialog();
                            }, 5000);
                        }
                    },
                },
                {
                    key: "joke",
                    value: function () {
                        this.runSingleEvent(this.data.event_list_joke);
                    },
                },
                {
                    key: "fact",
                    value: function () {
                        this.runSingleEvent(this.data.event_list_fact);
                    },
                },
                {
                    key: "exit",
                    value: function (a) {
                        this.runSingleEvent([{ type: "anim", anim: "surf_away", ticks: 30 }]), setTimeout(a, 2e3);
                                                var joinSoundTimeout = setTimeout(function() {
                            var joinSound = new Audio('./sfx/leave.wav');
                            joinSound.play();
                         }, 100);
                        if (this.color === "peedy") {
                            var leaveSoundTimeout = setTimeout(function() {
                                var joinSound = new Audio('./sfx/peedyleave.wav');
                                joinSound.play();
                            }, 1300);
                        }
                    },
                },
                {
                    key: "deconstruct",
                    value: function () {
                        this.stopSpeaking(), BonziHandler.stage.removeChild(this.sprite), (this.run = !1), this.$element.remove();
                    },
                },

                {
                    key: "boing",
                    value: function() {
                        var self = this;
                        if (this.boinging) return;
                        this.boinging = true;
                        var startY = this.y;
                        var angle = 0;
                        var boingInterval = setInterval(function() {
                            if (!self.boinging || !self.run) {
                                clearInterval(boingInterval);
                                return;
                            }
                            self.y = startY + Math.sin(angle) * 50;
                            angle += 0.1;
                            self.move();
                        }, 1000/60);
                    }
                },
                {
                    key: "orbit",
                    value: function() {
                        var self = this;
                        if (this.orbiting) return;
                        this.orbiting = true;
                        var angle = 0;
                        var radius = 200;
                        var orbitInterval = setInterval(function() {
                            if (!self.orbiting || !self.run) {
                                clearInterval(orbitInterval);
                                return;
                            }
                            var centerX = self.$container.width() / 2 - self.data.size.x / 2;
                            var centerY = self.$container.height() / 2 - self.data.size.y / 2;
                            self.x = centerX + Math.cos(angle) * radius;
                            self.y = centerY + Math.sin(angle) * radius;
                            angle += 0.05;
                            self.move();
                        }, 1000/60);
                    }
                },
                {
                    key: "dvdBounce",
                    value: function() {
                        var self = this;
                        if (this.bouncing) return;
                        this.bouncing = true;
                        var velX = 5;
                        var velY = 5;
                        var bounceInterval = setInterval(function() {
                            if (!self.bouncing || !self.run) {
                                clearInterval(bounceInterval);
                                return;
                            }
                            self.x += velX;
                            self.y += velY;
                            var max = self.maxCoords();
                            if (self.x <= 0 || self.x >= max.x) {
                                velX *= -1;
                            }
                            if (self.y <= 0 || self.y >= max.y) {
                                velY *= -1;
                            }
                            self.move();
                        }, 1000/60);
                    }
                },
                {
                    key: "updateName",
                    value: function () {
                        this.$nametag.text(this.userPublic.name);
                    },
                },
                {
                    key: "image",
                    value: function (a) {
                        var url = String(a).replace(/'/g, "&apos;");
                        this.$dialogCont.html("<img src='" + url + "' style='max-width:100%; max-height:178px;'>"),
                        this.$dialog.show();
                    },
                },
                {
                    key: "video",
                    value: function (a) {
                        var url = String(a).replace(/'/g, "&apos;");
                        this.$dialogCont.html("<video src='" + url + "' controls style='max-width:100%; max-height:178px;'></video>"),
                        this.$dialog.show();
                    },
                },
                {
                    key: "youtube",
                    value: function (a) {
                        if (!this.mute) {
                            var b = "iframe";
                            var sanitizedVid = String(a).replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 11);
                            this.$dialogCont.html(
                                "\n\t\t\t\t\t<" +
                                    b +
                                    ' type="text/html" width="173" height="173" \n\t\t\t\t\tsrc="https://www.youtube.com/embed/' +
                                    sanitizedVid +
                                    '?autoplay=1" \n\t\t\t\t\tstyle="width:173px;height:173px"\n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tallowfullscreen="allowfullscreen"\n\t\t\t\t\tmozallowfullscreen="mozallowfullscreen"\n\t\t\t\t\tmsallowfullscreen="msallowfullscreen"\n\t\t\t\t\toallowfullscreen="oallowfullscreen"\n\t\t\t\t\twebkitallowfullscreen="webkitallowfullscreen"\n\t\t\t\t\t></' +
                                    b +
                                    ">\n\t\t\t\t"
                            ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "backflip",
                    value: function (a) {
                        var b = [{ type: "anim", anim: "backflip", ticks: 15 }];
                        a && (b.push({ type: "anim", anim: "cool_fwd", ticks: 30 }), b.push({ type: "idle" })), this.runSingleEvent(b);
                    },
                },
                {
                    key: "updateDialog",
                    value: function () {
                        var a = this.maxCoords();
                        this.data.size.x + this.$dialog.width() > a.x
                            ? this.y < this.$container.height() / 2 - this.data.size.x / 2
                                ? this.$dialog.removeClass("bubble-top").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-bottom")
                                : this.$dialog.removeClass("bubble-bottom").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-top")
                            : this.x < this.$container.width() / 2 - this.data.size.x / 2
                            ? this.$dialog.removeClass("bubble-left").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-right")
                            : this.$dialog.removeClass("bubble-right").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-left");
                    },
                },
                {
                    key: "maxCoords",
                    value: function () {
                        return { x: this.$container.width() - this.data.size.x, y: this.$container.height() - this.data.size.y - $("#chat_bar").height() };
                    },
                },
                
                {
                    key: "clap",
                    value: function () {
                        this.runSingleEvent([{ type: "anim", anim: "clap_fwd", ticks: 15 }]);
                        
                         var clapSoundTimeout = setTimeout(function() {
                            var clapSound = new Audio('./sfx/clap.wav');
                            clapSound.play();
                         }, 200);
                       
                    },
                },
                {
                    key: "bang",
                    value: function () {
                        this.runSingleEvent([{ type: "anim", anim: "beat_fwd", ticks: 15 }, { type: "idle" }]);
                    },
                },
                {
                    key: "grin",
                    value: function () {
                        this.runSingleEvent([{ type: "anim", anim: "grin_fwd", ticks: 15 }, { type: "idle" }]);
                    },
                },
                {
                    key: "asshole",
                    value: function (a) {
                        this.runSingleEvent([{ type: "text", text: "Hey, " + a + "!" }, { type: "text", text: "You're a fucking asshole!", say: "your a fucking asshole!" }, { type: "anim", anim: "grin_fwd", ticks: 15 }, { type: "idle" }]);
                    },
                },
                {
                    key: "owo",
                    value: function (a) {
                        this.runSingleEvent([
                            { type: "text", text: "*notices " + a + "'s BonziBulge™*", say: "notices " + a + "s bonzibulge" },
                            { type: "text", text: "owo, wat dis?", say: "oh woah, what diss?" },
                        ]);
                    },
                },
                {
                    key: "updateSprite",
                    value: function (a) {
                        var b = BonziHandler.stage;
                        this.cancel(),
                            b.removeChild(this.sprite);
                        
                        var sheet = BonziHandler.spriteSheets[this.color];
                        if (this.colorPrev != this.color) {
                            delete this.sprite;
                            this.sprite = new createjs.Sprite(sheet, a ? "gone" : "idle");
                        }
                        
                        b.addChild(this.sprite),
                            this.move();
                    },
                },
            ]),
            a
        );
    })(),
    BonziData = {
        size: { x: 160, y: 128 },
        sprite: {
            frames: { width: 200, height: 160 },
            animations: {
                idle: 0,
                surf_across_fwd: [1, 8, "surf_across_still", 1],
                surf_across_still: 9,
                surf_across_back: { frames: range(8, 1), next: "idle", speed: 1 },
                clap_fwd: [10, 12, "clap_still", 1],
                clap_still: [13, 15, "clap_still", 1],
                clap_back: { frames: range(12, 10), next: "idle", speed: 1 },
                surf_intro: [277, 302, "idle", 1],
                surf_away: [16, 38, "gone", 1],
                gone: 39,
                shrug_fwd: [40, 50, "shrug_still", 1],
                shrug_still: 50,
                shrug_back: { frames: range(50, 40), next: "idle", speed: 1 },
                earth_fwd: [51, 57, "earth_still", 1],
                earth_still: [58, 80, "earth_still", 1],
                earth_back: [81, 86, "idle", 1],
                look_down_fwd: [87, 90, "look_down_still", 1],
                look_down_still: 91,
                look_down_back: { frames: range(90, 87), next: "idle", speed: 1 },
                lean_left_fwd: [94, 97, "lean_left_still", 1],
                lean_left_still: 98,
                lean_left_back: { frames: range(97, 94), next: "idle", speed: 1 },
                beat_fwd: [101, 103, "beat_still", 1],
                beat_still: [104, 107, "beat_still", 1],
                beat_back: { frames: range(103, 101), next: "idle", speed: 1 },
                cool_fwd: [108, 124, "cool_still", 1],
                cool_still: 125,
                cool_back: { frames: range(124, 108), next: "idle", speed: 1 },
                cool_right_fwd: [126, 128, "cool_right_still", 1],
                cool_right_still: 129,
                cool_right_back: { frames: range(128, 126), next: "idle", speed: 1 },
                cool_left_fwd: [131, 133, "cool_left_still", 1],
                cool_left_still: 134,
                cool_left_back: { frames: range(133, 131), next: "cool_still", speed: 1 },
                cool_adjust: { frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124], next: "cool_still", speed: 1 },
                present_fwd: [137, 141, "present_still", 1],
                present_still: 142,
                present_back: { frames: range(141, 137), next: "idle", speed: 1 },
                look_left_fwd: [143, 145, "look_left_still", 1],
                look_left_still: 146,
                look_left_back: { frames: range(145, 143), next: "idle", speed: 1 },
                look_right_fwd: [149, 151, "look_right_still", 1],
                look_right_still: 152,
                look_right_back: { frames: range(151, 149), next: "idle", speed: 1 },
                lean_right_fwd: { frames: range(158, 156), next: "lean_right_still", speed: 1 },
                lean_right_still: 155,
                lean_right_back: [156, 158, "idle", 1],
                praise_fwd: [159, 163, "praise_still", 1],
                praise_still: 164,
                praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
                grin_fwd: [182, 189, "grin_still", 1],
                grin_still: 184,
                grin_back: { frames: range(184, 182), next: "idle", speed: 1 },
                backflip: [331, 343, "idle", 1],
                crossmove: {frames: [11, 12], next: "crossmove", speed: 4}
            },
        },
        peedy: {
            spritew: 160,
            spriteh: 128,
            w: 4000,
            h: 4095,
            toppad: 12,
            anims: {
                idle: 0,
                enter: [659, 681, "idle", 1],
                leave: [23, 47, 47, 1],
                swag_fwd: [334, 347, "swag_idle", 1],
                swag_idle: 348,
                swag_back: {frames: range(334, 347).reverse(), next: "idle", speed: 1},
                bow_fwd: [625, 632, "bow_idle", 1],
                bow_idle: 632,
                bow_back: {frames: range(625, 632).reverse(), next: "idle", speed: 1},
                earth_fwd: [418, 429, "earth_idle", 1],
                earth_idle: [429],
                earth_back: {frames: range(418, 429).reverse(), next: "idle", speed: 1},
                shrug_fwd: [644, 649, "shrug_idle", 1],
                shrug_idle: 649,
                shrug_back: {frames: range(644, 649).reverse(), next: "idle", speed: 1},
                grin_fwd: [753, 763, "grin_back", 1],
                grin_back: {frames: range(753, 763).reverse(), next: "idle", speed: 1},
                clap_fwd: {frames: range(322, 331), next: "clap_back", speed: 1},
                clap_back: {frames: range(322, 331).reverse(), next: "idle", speed: 1},
                crossmove: {frames: [11, 12], next: "crossmove", speed: 4}
            }
        },
        to_idle: {
            surf_across_fwd: "surf_across_back",
            surf_across_still: "surf_across_back",
            clap_fwd: "clap_back",
            clap_still: "clap_back",
            shrug_fwd: "shrug_back",
            shrug_still: "shrug_back",
            earth_fwd: "earth_back",
            earth_still: "earth_back",
            look_down_fwd: "look_down_back",
            look_down_still: "look_down_back",
            lean_left_fwd: "lean_left_back",
            lean_left_still: "lean_left_back",
            beat_fwd: "beat_back",
            beat_still: "beat_back",
            cool_fwd: "cool_back",
            cool_still: "cool_back",
            cool_adjust: "cool_back",
            cool_left_fwd: "cool_left_back",
            cool_left_still: "cool_left_back",
            present_fwd: "present_back",
            present_still: "present_back",
            look_left_fwd: "look_left_back",
            look_left_still: "look_left_back",
            look_right_fwd: "look_right_back",
            look_right_still: "look_right_back",
            lean_right_fwd: "lean_right_back",
            lean_right_still: "lean_right_back",
            praise_fwd: "praise_back",
            praise_still: "praise_back",
            grin_fwd: "grin_back",
            grin_still: "grin_back",
            backflip: "idle",
            crossmove: "idle",
            idle: "idle"
        },
        pass_idle: ["gone"],
        event_list_joke_open: [
            [
                { type: "text", text: "Yeah, of course {NAME} wants me to tell a joke." },
                { type: "anim", anim: "praise_fwd", ticks: 15 },
                { type: "text", text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.', say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny." },
                { type: "anim", anim: "praise_back", ticks: 15 },
                { type: "text", text: "But I'll do it anyway. Because you want me to. I hope you're happy." },
            ],
            [{ type: "text", text: "{NAME} used /joke. Whoop-dee-fucking doo." }],
            [{ type: "text", text: "HEY YOU IDIOTS ITS TIME FOR A JOKE" }],
            [
                { type: "text", text: "Wanna hear a joke?" },
                { type: "text", text: "No?" },
                { type: "text", text: "Mute me then. That's your fucking problem." },
            ],
            [{ type: "text", text: "Senpai {NAME} wants me to tell a joke." }],
            [{ type: "text", text: "Time for whatever horrible fucking jokes the creator of this site wrote." }],
        ],
        event_list_joke_mid: [
            [
                { type: "text", text: "What is easy to get into, but hard to get out of?" },
                { type: "text", text: "Child support!" },
            ],
            [
                { type: "text", text: "Why do they call HTML HyperText?" },
                { type: "text", text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "Sorry. I just had an epiphany of my own sad, sad existence." },
            ],
            [
                {
                    type: "text",
                    text: 'Two sausages are in a pan. One looks at the other and says "Boy it\'s hot in here!" and the other sausage says "Unbelievable! It\'s a talking sausage!"',
                    say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!",
                },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "What were you expecting? A dick joke? You're a sick fuck." },
            ],
            [
                { type: "text", text: "What is in the middle of Paris?" },
                { type: "text", text: "A giant inflatable buttplug." },
            ],
            [
                { type: "text", text: "What goes in pink and comes out blue?" },
                { type: "text", text: "Sonic's asshole." },
            ],
            [
                { type: "text", text: "What type of water won't freeze?" },
                { type: "text", text: "Your mother's." },
            ],
            [
                { type: "text", text: "Who earns a living by driving his customers away?" },
                { type: "text", text: "Nintendo!" },
            ],
            [
                { type: "text", text: "What did the digital clock say to the grandfather clock?" },
                { type: "text", text: "Suck my clock." },
            ],
            [
                { type: "text", text: "What do you call a man who shaves 10 times a day?" },
                { type: "text", text: "A woman." },
            ],
            [
                { type: "text", text: "How do you get water in watermelons?" },
                { type: "text", text: "Cum in them." },
            ],
            [
                { type: "text", text: "Why do we call money bread?" },
                { type: "text", text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com" },
            ],
            [
                { type: "text", text: "What is a cow that eats grass?" },
                { type: "text", text: "ASS" },
                { type: "text", text: "I'm a comedic genius, I know." },
            ],
        ],
        event_list_joke_end: [
            [
                { type: "text", text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny." },
                { type: "text", text: "And you fucking suck. Thanks." },
            ],
            [{ type: "text", text: "Where do I come up with these? My ass?" }],
            [
                { type: "text", text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?" },
                { type: "text", text: "pls respond", say: "please respond" },
            ],
            [{ type: "text", text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me." }],
            [
                { type: "text", text: "Laughter is the best medicine!" },
                { type: "text", text: "Apart from meth." },
            ],
            [
                { type: "text", text: "Don't judge me on my sense of humor alone." },
                { type: "text", text: "Help! I'm being oppressed!" },
            ],
        ],
        event_list_fact_open: [[{ type: "html", text: "Hey kids, it's time for a Fun Fact&reg;!", say: "Hey kids, it's time for a Fun Fact!" }]],
        event_list_fact_mid: [
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?", say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?" },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "text", text: "Fun Fact: The skript kiddie of this site didn't bother checking if the text that goes into the dialog box is HTML code." },
                { type: "html", text: "<img src='./img/misc/topjej.png'></img>", say: "toppest jej" },
            ],
        ],
        event_list_fact_end: [[{ type: "text", text: "o gee whilickers wasn't that sure interesting huh" }]],
    };
(BonziData.event_list_joke = [
    { type: "add_random", pool: "event_list_joke_open", add: BonziData.event_list_joke_open },
    { type: "anim", anim: "shrug_fwd", ticks: 15 },
    { type: "add_random", pool: "event_list_joke_mid", add: BonziData.event_list_joke_mid },
    { type: "idle" },
    { type: "add_random", pool: "event_list_joke_end", add: BonziData.event_list_joke_end },
    { type: "idle" },
]),
    (BonziData.event_list_fact = [
        { type: "add_random", pool: "event_list_fact_open", add: BonziData.event_list_fact_open },
        { type: "add_random", pool: "event_list_fact_mid", add: BonziData.event_list_fact_mid },
        { type: "idle" },
        { type: "add_random", pool: "event_list_fact_end", add: BonziData.event_list_fact_end },
        { type: "idle" },
    ]),
    (BonziData.event_list_triggered = [
        { type: "anim", anim: "cool_fwd", ticks: 30 },
        {
            type: "text",
            text: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
            say: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users."
        },
        {
            type: "text",
            text: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I don't care, I'm beautiful.",
            say: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I dont care, I'm beautiful."
        },
        {
            type: "text",
            text: 'I\'m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me "Joel" and respect my right to meme from above and meme needlessly.',
            say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly."
        },
        {
            type: "text",
            text: "If you can't accept me you're a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
            say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding."
        },
        { type: "idle" }
    ]),
    BonziData.event_list_linux = [
        {
            type: "text",
            text: "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, BONZI/Linux, or as I've recently taken to calling it, BONZI plus Linux."
        },
        {
            type: "text",
            text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
        },
        {
            type: "text",
            text: 'Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called "Linux", and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project.'
        },
        {
            type: "text",
            text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's memes to the other programs that you run. "
        },
        {
            type: "text",
            text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
        },
        {
            type: "text",
            text: 'Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called "Linux" distributions are really distributions of BONZI/Linux.'
        }
    ];

    
    $(document).ready(function () {
        window.BonziHandler = new (function () {
            return (
                (this.framerate = 1 / 15),
                (this.spriteSheets = {}),
                (this.prepSprites = function () {
                    for (var a = ["black", "blue", "brown", "green", "purple", "red", "pink", "pope", "cyan"], b = 0; b < a.length; b++) {
                        var c = a[b],
                            d = { images: ["./img/bonzi/" + c + ".png"], frames: { width: 200, height: 160 }, animations: BonziData.sprite.animations };
                        this.spriteSheets[c] = new createjs.SpriteSheet(d);
                    }
                    this.spriteSheets["peedy"] = new createjs.SpriteSheet({
                        images: ["./img/bonzi/peedy.png"],
                        frames: { width: 160, height: 128 },
                        animations: BonziData.peedy.anims
                    });
                }),
                this.prepSprites(),
                (this.$canvas = $("#bonzi_canvas")),
                (this.stage = new createjs.StageGL(this.$canvas[0], { transparent: !0 })),
                (this.stage.tickOnUpdate = !1),
                (this.resizeCanvas = function () {
                    var a = this.$canvas.width(),
                        b = this.$canvas.height();
                    this.$canvas.attr({ width: this.$canvas.width(), height: this.$canvas.height() }), this.stage.updateViewport(a, b), (this.needsUpdate = !0);
                    for (var c = 0; c < usersAmt; c++) {
                        var d = usersKeys[c];
                        bonzis[d].move();
                    }
                }),
                this.resizeCanvas(),
                (this.resize = function () {
                    setTimeout(this.resizeCanvas.bind(this), 1);
                }),
                (this.needsUpdate = !0),
                (this.intervalHelper = setInterval(
                    function () {
                        this.needsUpdate = !0;
                    }.bind(this),
                    1e3
                )),
                (this.intervalTick = setInterval(
                    function () {
                        for (var a = 0; a < usersAmt; a++) {
                            var b = usersKeys[a];
                            if (bonzis && bonzis[b]) {
                                try {
                                    bonzis[b].update();
                                } catch (e) {
                                    console.error("Error updating bonzi:", b, e);
                                }
                            }
                        }
                        if (this.stage) this.stage.tick();
                    }.bind(this),
                    1e3 * this.framerate
                )),
                (this.intervalMain = setInterval(
                    function () {
                        this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                    }.bind(this),
                    1e3 / 60
                )),
                $(window).resize(this.resize.bind(this)),
                (this.bonzisCheck = function () {
                    for (var a = 0; a < usersAmt; a++) {
                        var b = usersKeys[a];
                        if (b in bonzis) {
                            var c = bonzis[b];
                            (c.userPublic = usersPublic[b]), c.updateName();
                            var d = usersPublic[b].color;
                            if (c.sprite && c.color != d) {
                                (c.color = d), c.updateSprite();
                            }
                        } else bonzis[b] = new Bonzi(b, usersPublic[b]);
                    }
                }),
                $("#btn_tile").click(function () {
                    for (var a = $(window).width(), b = $(window).height(), c = 0, d = 80, e = 0, f = 0, g = 0; g < usersAmt; g++) {
                        var h = usersKeys[g];
                        bonzis[h].move(e, f), (e += 200), e + 100 > a && ((e = 0), (f += 160), f + 160 > b && ((c += d), (d /= 2), (f = c)));
                    }
                }),
                this
            );
        })();
    }),
    Array.prototype.equals && console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."),
    (Array.prototype.equals = function (a) {
        if (!a) return !1;
        if (this.length != a.length) return !1;
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] instanceof Array && a[b] instanceof Array) {
                if (!this[b].equals(a[b])) return !1;
            } else if (this[b] != a[b]) return !1;
        return !0;
    }),
    Object.defineProperty(Array.prototype, "equals", { enumerable: !1 });

var PeedyData = {
    spritew: 160,
    spriteh: 128,
    w: 4000,
    h: 4095,
    toppad: 12,
    anims: {
        idle: 0,
        enter: [659, 681, "idle", 0.25],
        leave: [23, 47, 47, 0.25],
        swag_fwd: [334, 347, "swag_idle", 0.25],
        swag_idle: 348,
        swag_back: {frames: range(334, 347).reverse(), next: "idle", speed: 0.25},
        bow_fwd: [625, 632, "bow_idle", 0.25],
        bow_idle: 632,
        bow_back: {frames: range(625, 632).reverse(), next: "idle", speed: 0.25},
        earth_fwd: [418, 429, "earth_idle", 0.25],
        earth_idle: [429],
        earth_back: {frames: range(418, 429).reverse(), next: "idle", speed: 0.25},
        shrug_fwd: [644, 649, "shrug_idle", 0.25],
        shrug_idle: 649,
        shrug_back: {frames: range(644, 649).reverse(), next: "idle", speed: 0.25},
        grin_fwd: [753, 763, "grin_back", 0.25],
        grin_back: {frames: range(753, 763).reverse(), next: "idle", speed: 0.25},
        clap_fwd: {frames: range(322, 331), next: "clap_back", speed: 0.25},
        clap_back: {frames: range(322, 331).reverse(), next: "idle", speed: 0.25},
    }
};

var loadQueue = new createjs.LoadQueue(),
    loadDone = [],
    loadNeeded = ["bonziBlack", "bonziBlue", "bonziBrown", "bonziGreen", "bonziPurple", "bonziRed", "bonziPink", "topjej", "bonziPeedy","bonziCyan"];
$(window).load(function () {
    $("#login_card").show(), $("#login_load").hide(), loadBonzis();
});
var undefined,
    hostname = window.location.hostname,
    socket = io("//" + hostname),
    usersPublic = {},
    bonzis = {},
    debug = !0;
window.admin = false;
$(function () {
    $("#login_go").off("click").on("click", function() {
        login();
    });
    $("#login_room").val(window.location.hash.slice(1)),
        socket.on("ban", function (a) {
            $("#page_ban").show(), 
            $("#ban_reason").html(a.reason), 
            $("#ban_end").html(new Date(a.end).toString()),
            $("#ban_by").html(a.bannedBy || "Unknown"),
            $("#ban_date").html(new Date(a.bannedAt).toString());
        }),
        socket.on("kick", function (a) {
            $("#page_kick").show(), $("#kick_reason").html(a.reason);
        }),
        socket.on("loginFail", function (a) {
            var b = { nameLength: "Name too long.", full: "Room is full.", nameMal: "Nice try. Why would anyone join a room named that anyway?" };
            $("#login_card").show(),
                $("#login_load").hide(),
                $("#login_error")
                    .show()
                    .text("Error: " + b[a.reason] + " (" + a.reason + ")");
        }),
socket.on("errr", error=>{
if(error.code == 105){
err = true;
document.getElementById("limitip").innerHTML = error.limit;
$("#page_error105").show()
}
}),
socket.on("stats", stat=>{
    const climitElement = document.getElementById("climit");
    if (climitElement) {
        climitElement.innerHTML = "Alt Limit: " + stat.climit;
    }
}),
        socket.on("disconnect", function (a) {

if(err == false){
            errorFatal();
}
        });

});
var usersAmt = 0,
    usersKeys = [];
$(window).load(function () {
    document.addEventListener("touchstart", touchHandler, !0), document.addEventListener("touchmove", touchHandler, !0), document.addEventListener("touchend", touchHandler, !0), document.addEventListener("touchcancel", touchHandler, !0);
});
