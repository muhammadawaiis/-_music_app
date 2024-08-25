const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playPauseButton = document.getElementById('play-pause');
const playlistElement = document.getElementById('playlist');
const searchBar = document.getElementById('search-bar');

let currentTrackIndex = 0;

const tracks = [
    { title: 'Track 1', artist: 'Artist 1', src: 'music/track1.mp3' },
    { title: 'Track 2', artist: 'Artist 2', src: 'music/track2.mp3' },
    { title: 'Track 3', artist: 'Artist 3', src: 'music/track3.mp3' }
];

function loadTrack(index) {
    const track = tracks[index];
    trackTitle.innerText = track.title;
    trackArtist.innerText = track.artist;
    audioPlayer.src = track.src;
    currentTrackIndex = index;
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerText = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.innerText = 'Play';
    }
}

function nextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        loadTrack(currentTrackIndex + 1);
        audioPlayer.play();
    }
}

function prevTrack() {
    if (currentTrackIndex > 0) {
        loadTrack(currentTrackIndex - 1);
        audioPlayer.play();
    }
}

function setVolume(value) {
    audioPlayer.volume = value;
}

function searchMusic(query) {
    const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(query.toLowerCase()));
    displayPlaylist(filteredTracks);
}

function displayPlaylist(tracks) {
    playlistElement.innerHTML = '';
    tracks.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.innerText = `${track.title} - ${track.artist}`;
        item.onclick = () => loadTrack(index);
        playlistElement.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadTrack(currentTrackIndex);
    displayPlaylist(tracks);
});
