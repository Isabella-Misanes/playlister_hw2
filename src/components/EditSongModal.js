import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSongCallback, hideEditSongModalCallback } = this.props;
        
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                Title: <input type="text" id="song-title" name="song-title"/><br></br>
                                Artist: <input type="text" id="song-artist" name="song-artist"/><br></br>
                                YouTube Id: <input type="text" id="song-youTubeId" name="song-youTubeId"/>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}