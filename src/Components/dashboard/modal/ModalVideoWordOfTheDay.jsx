import React from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { ModalCloseVideo } from '../../../action/VideoWordOfTheDay'

export const ModalVideoWordOfTheDay = () => {
    const {activeVideo, modalOpen} = useSelector(state => state.vwd)

    const dispatch = useDispatch()

    const dispHide = () => {
        dispatch(ModalCloseVideo(false))
    }
    
    return (

        <Modal
            contentClassName='bg-dark'
            centered
            size="xl"
            show={modalOpen}
            onHide={() => dispHide()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
                <Modal.Title className='text-center'>{activeVideo?.title}</Modal.Title>
            <Modal.Body> 
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <ReactPlayer stopOnUnmount = {true} width = '100%' height = '100%' controls playing url={activeVideo?.image} alt="..." />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
