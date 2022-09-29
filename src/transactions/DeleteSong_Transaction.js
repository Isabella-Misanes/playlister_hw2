import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * @author Isabella Misanes
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.initIndex = initIndex;
        this.song = initSong;
    }

    doTransaction() {
        this.app.deleteSong(this.initIndex);
    }
    
    undoTransaction() {
        this.app.addSong(this.initIndex, this.song);
    }
}