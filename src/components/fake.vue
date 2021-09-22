<template>
    <div class="player">
		<div class="cover"></div>
		<nav class="">
			<div class="left w-5 h-5 rounded-full bg-red-600 text-center" @click="hiddenPlaylist">
				<i class="material-icons text-xl ">arrow_drop_down</i> <!--menu-->
			</div>
			<div class="right">
				<i class="bi bi-search text-xl"></i> <!--search-->
				<i class="material-icons text-2xl ml-5">get_app</i> <!--playlist-->
			</div>
		</nav>
		<div class="player-ui pb-3">
			<div class="title">
				<h3>{{returnInfoMusic(currentItem).nameMusic}}</h3>
			</div>
			<div class="small">
				<i class="material-icons text-xl text-transparent" @click="replayMusic">repeat</i> <!--replay-->
				<p>{{returnInfoMusic(currentItem).nameArtist}}</p>
				<i class="bi bi-volume-up text-xl text-white"></i> <!--volume_up-->
			</div>
			<div class="time w-full px-5 text-white text-lg mt-4 mx-auto flex justify-between -mb-4">
				<span class="timer">{{timer.timer}}</span>
				<span class="totalTime">{{timer.totalTime}}</span>
			</div>
			<div class="progress" @click="moveSong">
				<div class="played">
					<div class="circle"></div>
				</div>
				<audio class="audio" :src="getMediaUrl(returnInfoMusic(currentItem).root)" @timeupdate="timeupdate" @loadeddata="timer" @ended="uploadanotherSong"/>
			</div>
			<div class="controls flex justify-between items-center w-4/5 mx-auto mt-3 text-white">
				<span class="inline-block"><i class="material-icons text-tiny" @click="previousMusic">skip_previous</i></span> <!--previous-->
				<span class="inline-block"><i class="material-icons text-tiny" id="playBtn" @click="playOrPause">play_arrow</i></span> <!--play-->
				<span class="inline-block"><i class="material-icons text-tiny" @click="nextMusic">skip_next</i></span> <!--next-->
			</div>
		</div>
		<transition name="coulisse">
			<div class="music max-h-80 overflow-y-scroll pt-5  bg-gray-900 px-5 pb-0" v-show="hidden">
				<div class="song h-20 flex justify-between items-center border-b border-gray-500" v-for="(music, index) in allMusic" :key="index">
					<div class="info flex items-center">
						<div class="img first w-16 h-16 bg-red-700 mr-3">
							<img :src="getMediaUrl(music.img)" :alt="music.artist" class="object-cover"/>
						</div>
						<div class="titles">
							<h5 class="text-left text-base text-white font-normal mx-0 mt-0 mb-2">{{music.name}}</h5>
							<p class="text-left m-0 text-tiny text-gray-400">{{music.artist}}<br><span class="totalTime">03:08</span></p>
						</div>
					</div>
					<div class="state text-center">
						<i class="material-icons text-xl play_arrow">play_arrow</i> <!--equalizer=graphic_eq-->
						<br><span class="text-blue-500 text-xs">{{music.price}}XAF</span>
					</div>
				</div>
			</div>
		</transition>
		{{loaded()}}
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'fake',
	setup() {
		//allMusic contient toutes les informations sur les musiques de la playlist
		let allMusic = [
			{
				name: "Noir meilleur",
				artist: "damso",
				img: "../assets/tenor.jpg",
				src: "../assets/music/noirMeilleur.mp3",
				price: 100
			},
			
			{
				name: "Silence ft Angèle",
				artist: "Damso",
				img: "../assets/tenor.jpg",
				src: "../assets/music/silenceFtAngele.mp3",
				price: 100
			},
			{
				name: "Smog",
				artist: "Damso",
				img: "../assets/tenor.jpg",
				src: "../assets/music/smog.mp3",
				price: 100
			},
			{
				name: "Tard la night",
				artist: "Damso",
				img: "../assets/tenor.jpg",
				src: "../assets/music/tardLaNight.mp3",
				price: 100
			},
		],

		// playBtn contient le bouton du lecteur audio pour la lecture des sons
		playBtn,
		audio,
		currentItem = ref(0),
		progressBar,
		readingBar,
		hidden = ref(true),
		iconePlay,
		// pour charger tous les éléments du DOM dont j'aurai besoin
		loaded = function() {
			setTimeout(() => {

				playBtn = ref(document.querySelector('i#playBtn'))
				progressBar = ref(document.querySelector('.played')).value
				audio = ref(document.querySelector('audio'))
				readingBar = ref(document.querySelector('.progress'))
				iconePlay = ref(document.querySelectorAll("i.play_arrow")[currentItem.value])
				iconePlay.value.style.backgroundColor = "red"
			}, 200);
		},

		//
		hiddenPlaylist = function(e) {
			hidden.value = !hidden.value
			let hiddenArrow = e.target //pour cibler la flèche sur laquelle on clique pour cacher ou montrer la playlist
			
			hiddenArrow.innerHTML = (hiddenArrow.innerHTML == "arrow_drop_down")? "arrow_drop_up": "arrow_drop_down"

		},

		// pour repêter la music
		replayMusic = function() {

		},

		//
		selectSongInPlaylist = function(currentItem) {
			let songsplayArrow = document.querySelectorAll("i.play_arrow") //les flèches d'icones play des sons de la playslist
			songsplayArrow = Array.prototype.slice.call(songsplayArrow) 

			for(let i=0; i<songsplayArrow.length; i++) {

				if(songsplayArrow[i].style.backgroundColor === "red") {
					console.log("il y'en a un")
					songsplayArrow[i].style.backgroundColor = ""
					songsplayArrow[i].innerHTML = "play_arrow"
					songsplayArrow[currentItem].style.backgroundColor = "red"
					iconePlay.value = songsplayArrow[currentItem]
					break;
				}
			}
			
			
			
			
		},

		//permet d'avancer le song à l'instant voulu
		moveSong = function(e) {

			let widthProgreesBar = readingBar.value.clientWidth, //la largeur de la bar de progression
			clickedOffesetX = e.offsetX, //la valeur en x sur laquelle on a cliqué
			duration = audio.value.duration
			audio.value.currentTime = clickedOffesetX / widthProgreesBar * duration
		},

		// nextMusic gère le fonctionnement du bouton next sur le lecteur
		nextMusic = function () {

			playBtn.value.innerHTML = "play_arrow"
			//remettre la bar de progression à zéro quand on navigue entre les sons
			progressBar.style.width = 0;
			// incrémente d'abord currentItem
			currentItem.value++
			// si la valeur de currentItem en incrémentant devient négative, alors donne lui la valeur du premier
			if(currentItem.value >= allMusic.length) {
				currentItem.value = 0
			}

			selectSongInPlaylist(currentItem.value)
		},

		// previousMusic gère le fonctionnement du bouton previous sur le lecteur
		previousMusic = function() {
			playBtn.value.innerHTML = "play_arrow"
			//remettre la bar de progression à zéro quand on navigue entre les sons
			progressBar.style.width = 0;
			// décrémente d'abord currentItem
			currentItem.value--
			// si la valeur de currentItem en décrémentant devient négative, alors donne lui la valeur du dernier item
			if(currentItem.value < 0) {
				currentItem.value = allMusic.length - 1
			}
			selectSongInPlaylist(currentItem.value)
		},

		// playOrPause gère le fonctionnement du bouton play sur le lecteur
		playOrPause = function(e) {
			playBtn = ref(e.currentTarget)
			let audio = e.currentTarget.parentNode.parentNode.previousSibling.lastChild
			if (playBtn.value.innerHTML == "play_arrow") {
				playBtn.value.innerHTML = "pause"
				audio.play()
				iconePlay.value.innerHTML = "graphic_eq"
			} else {
				playBtn.value.innerHTML = "play_arrow"
				audio.pause()
				iconePlay.value.innerHTML = "play_arrow"
			}

			
		},

		uploadanotherSong = function() {
			currentItem.value++
			if (currentItem.value >= allMusic.length) {
				currentItem.value = 0
			}
			playBtn.value.innerHTML = "play_arrow"
			progressBar.style.width = 0
			iconePlay.value.style.backgroundColor = ""
			iconePlay.value.innerHTML = "play_arrow"
		},

		//retourne l'url du média demandé
        getMediaUrl = function(name) {
            return new URL(name, import.meta.url)
        },

		//
		timeupdate = function(e) {
			let playerProgress = e.target.previousSibling,
			audioDuration = e.target.duration,
			currentCount = e.target.currentTime

			playerProgress.style.width = (currentCount / audioDuration * 100)+"%"
		},

		 
		timer = function (e) {
			let duration = audio.value.duration,
			currentTime = e.target.currentTime,
			minutes = parseInt(duration / 60, 10),
			actualMinutes = parseInt(currentTime / 60, 10),
			secondes = parseInt(duration%60, 10),
			actualSecondes = parseInt(currentTime%60, 10),

			totalTime = e.target.parentNode.previousSibling.lastChild,
			timer = e.target.parentNode.previousSibling.firstChild

			// console.log(currentTime)
			// timer.innerHTML = 'bonjour'
			timer.innerHTML = `${actualMinutes}:${(actualSecondes<10) ? "0"+actualSecondes: actualSecondes}`
			totalTime.innerHTML = `${minutes}:${(secondes<10) ? "0"+secondes: secondes}`
			
		}

		

		return {
			allMusic,
			currentItem,
			nextMusic,
			previousMusic,
			playOrPause,
			getMediaUrl,
			timeupdate,
			timer,
			loaded,
			moveSong,
			replayMusic,
			hidden,
			hiddenPlaylist,
			uploadanotherSong
			
		}
	},
	methods: {
		
		returnInfoMusic(currentItem) {
			let musicInfo = this.$options.setup().allMusic[currentItem]
			return {
				nameMusic: musicInfo.name, 
				nameArtist: musicInfo.artist,
				root: musicInfo.src
			}
		},
		
    }
}
</script>

<style lang="scss" scoped>
    $primary: #F44336;
	$secondary: #03A9F4;

	html {
		font-family: sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}

	html, body {
		margin: 0;
		height: 100%;
		align-items: center;
		color: #333;
		font-family: "Roboto",sans-serif;
		font-size: 1em;
		-webkit-font-smoothing: antialiased;
		line-height: 1em;
	}

	body {
		background: #e9e9e9;
		display: flex;
		justify-content: center;
	}

	* {
		box-sizing: border-box;
		user-select: none;
	}

	i {
		cursor: pointer;
	}

	.coulisse-enter-active, .coulisse-leave-active {
		transition: opacity 1.5s ease-out, transform 1.5s ease-out;
	}

	.coulisse-enter-from, .coulisse-leave-to {
		opacity: .7;
		transform: translateY(-400px)
	}

.player {
	overflow: hidden;
	// box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
	position: relative;
	width: 100%;
	height: auto;
	// border-radius: 8px;
	background-size: contain;
	background-repeat: no-repeat;
	
	.cover {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 275px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.514);
		background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(../assets/play.jpg) center center;
		background-size: cover;
	}
	
	nav {
		margin-top: 5px;
		position: relative;
		z-index: 3;
		min-height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 15px;
		
		.left {
			display: flex;
			
			i {
				cursor: pointer;
				color: white;
			}
			
			h6 {
				margin: 0;
				padding-left: 20px;
				color: white;
				font-size: 18px;
				line-height: 1.38;
			}
		}
		
		.right {
			display: flex;
			
			i {
				cursor: pointer;
				color: white;
			}
			
			.search {
				padding-right: 10px;
			}
		}
	}
	
	.player-ui {
		position: relative;
		z-index: 3;
		padding-top: 30px;
		
		.title {
			display: flex;
			justify-content: center;
			
			h3 {
				margin: 0;
				color: white;
				font-size: 30px;
				font-weight: 100;
			}
		}
		
		.small {
			padding: 15px 35px 0px 35px;
			display: flex;
			justify-content: space-between;
			
			p{
				margin: 0;
				color: white;
				font-size: 14px;
			}
			
			p {
				color: #ddd;
				margin: 0;
				font-size: 14px;
			}
		}
		
		.progress {
			position: relative;
			height: 2px;
			margin: 30px 20px 0px 20px;
			background: rgba(255, 255, 255, 0.3);
			
			.played {
				width: 0;
				height: 2px;
				position: absolute;
				background: $primary;
				
				// .circle {
				// 	width: 10px;
				// 	height: 10px;
				// 	background: $primary;
				// 	border-radius: 50%;
				// 	margin-top: -4px;
				// 	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
				// 	position: absolute;
				// 	left: 0;
				// }
			}
		}
		
		
	}
	
	.btn {
		margin-left: auto;
		margin-right: 10px;
		// box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 4;
		margin-top: 20px;
		width: 40px;
		height: 40px;
		// background: $secondary;
		border-radius: 50%;
		
		i {
			font-size: 28px;
			color: white;
		}
	}
	
	.music {
		&::-webkit-scrollbar {
			width: 0
		}
			
			.state.playing {
				
				i {
					color: $primary;
				}
			}
			
			.state {
				
				i {
					color: #ddd;
				}
			}
	
	}
}
</style>