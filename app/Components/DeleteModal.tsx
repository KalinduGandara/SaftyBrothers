import Modal from '../Components/Modal'

interface Props {
    isOpen: boolean;
    onClose?: () => void;
    title: string;
    onSubmit: () => void;
}

function DeleteModal({ isOpen, onClose, title, onSubmit }: Props) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title={title} >
                <div className='flex flex-row justify-center gap-3'>
                    <button onClick={onClose} className='btn btn-primary'>Cancel</button>
                    <button onClick={onSubmit} className='btn btn-danger'>Delete</button>
                </div>
            </Modal>
        </>
    )
}

export default DeleteModal