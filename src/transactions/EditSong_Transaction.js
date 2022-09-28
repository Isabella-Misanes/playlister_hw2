import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * @author Isabella Misanes
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, oldSong, newSong) {
        super();
        this.app = initApp;
        this.initIndex = initIndex;
        this.oldSong = oldSong;
        this.newSong = newSong;
    }

    doTransaction() {
        this.app.editSong(this.initIndex, this.newSong);
    }
    
    undoTransaction() {
        this.app.editSong(this.initIndex, this.oldSong);
    }
}