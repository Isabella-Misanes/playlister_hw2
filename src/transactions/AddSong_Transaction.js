import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * @author Isabella Misanes
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.initIndex = initIndex;
        let initSong = {
            title: "Untitled",
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        };
        this.song = initSong;
    }

    doTransaction() {
        this.app.addSong(this.initIndex, this.song);
    }
    
    undoTransaction() {
        this.app.deleteSong(this.initIndex);
    }
}