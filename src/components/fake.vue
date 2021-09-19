<template>
    <div class="player">
		<div class="cover"></div>
		<nav>
			<div class="left">
				<i class="bi bi-list text-xl"></i> <!--menu-->
				<h6>Playlist</h6>
			</div>
			<div class="right">
				<i class="bi bi-search text-xl"></i> <!--search-->
				<i class="bi bi-music-note-list text-xl ml-5"></i> <!--playlist-->
			</div>
		</nav>
		<div class="player-ui">
			<div class="title">
				<h3>{{returnInfoMusic(currentItem).nameMusic}}</h3>
			</div>
			<div class="small">
				<i class="material-icons text-xl text-white">replay</i><!--replay-->
				<p>{{returnInfoMusic(currentItem).nameArtist}}</p>
				<i class="bi bi-volume-up text-xl text-white"></i> <!--volume_up-->
			</div>
			<div class="time w-full px-5 text-white text-sm mt-4 mx-auto flex justify-between -mb-4">
				<span class="timer">00:10</span>
				<span class="totalTime">03:45</span>
			</div>
			<div class="progress">
				<div class="played">
					<div class="circle"></div>
				</div>
				<audio class="audio" :src="getMediaUrl(returnInfoMusic(currentItem).root)" />
			</div>
			<div class="controls flex justify-between items-center w-4/5 mx-auto mt-3 text-white">
				<span class="inline-block"><i class="material-icons text-tiny" @click="previousMusic()">skip_previous</i></span> <!--previous-->
				<span class="inline-block"><i class="material-icons text-tiny" @click="playOrPause">play_arrow</i></span> <!--play-->
				<span class="inline-block"><i class="material-icons text-tiny" @click="nextMusic()">skip_next</i></span> <!--next-->
			</div>
		</div>
		
		<div class="music max-h-80 overflow-y-scroll pt-3  bg-gray-900 px-5 pb-0">
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
					<i class="material-icons text-xl">play_arrow</i> <!--equalizer=graphic_eq-->
					<br><span class="text-blue-500 text-xs">{{music.price}}XAF</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fake',
	setup() {
		
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
		]

		let currentItem = 3
		return {
			allMusic,
			currentItem,
		}
	},
	methods: {
		//retourne l'url du média demandé
        getMediaUrl(name) {
            return new URL(name, import.meta.url)
        },
		returnInfoMusic(currentItem){
			let musicInfo = this.$options.setup().allMusic[currentItem]
			return {
				nameMusic: musicInfo.name, 
				nameArtist: musicInfo.artist,
				root: musicInfo.src
			}
		},
		playOrPause(e) {
			let play_arrow = e.currentTarget.innerHTML
			let audio = e.currentTarget.parentNode.parentNode.previousSibling.lastChild
			if (play_arrow == "play_arrow") {
				e.currentTarget.innerHTML = "pause"
				audio.play()
			} else {
				e.currentTarget.innerHTML = "play_arrow"
				audio.pause()
			}
			
		},
		nextMusic() {
			this.$options.setup().currentItem =  null
			console.log(this.$options.setup().currentItem)
			
		},
		previousMusic() {
			
		}
    },
	mounted() {
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

.player {
	overflow: hidden;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
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
				width: 20%;
				height: 2px;
				position: absolute;
				background: $primary;
				
				.circle {
					width: 10px;
					height: 10px;
					background: $primary;
					border-radius: 50%;
					margin-left: 52px;
					margin-top: -4px;
					box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
				}
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