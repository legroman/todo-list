// import React, {Component} from "react";
// import "./modal.css";
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
//
// class Modal extends Component {
//     componentDidMount() {
//         const options = {
//             onOpenStart: () => {
//                 console.log("Open Start");
//             },
//             onOpenEnd: () => {
//                 console.log("Open End");
//             },
//             onCloseStart: () => {
//                 console.log("Close Start");
//             },
//             onCloseEnd: () => {
//                 console.log("Close End");
//             },
//             inDuration: 250,
//             outDuration: 250,
//             opacity: 0.5,
//             dismissible: false,
//             startingTop: "4%",
//             endingTop: "10%",
//         };
//         M.Modal.init(this.Modal, options);
//         // If you want to work on instance of the Modal then you can use the below code snippet
//         // let instance = M.Modal.getInstance(this.Modal);
//         // instance.open();
//         // instance.close();
//         // instance.destroy();
//     }
//
//     render() {
//         return (
//             <span>
//                 {/*<a*/}
//                 {/*    className="waves-effect waves-light btn modal-trigger"*/}
//                 {/*    data-target="modal1"*/}
//                 {/*>*/}
//                 {/*    Modal*/}
//                 {/*</a>*/}
//                 <a className="btn-floating btn-large waves-effect waves-light yellow darken-4 modal-trigger"
//                    data-target="modal1"
//                 >
//                     <i className="material-icons">add</i></a>
//
//                   <div id="modal1" className="modal">
//     <div className="modal-content">
//       <h4>Modal Header</h4>
//       <p>A bunch of text</p>
//     </div>
//     <div className="modal-footer">
//       <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
//     </div>
//   </div>
//             </span>
//         );
//     }
// }
//
// export default Modal;

import React, {Component} from 'react';
import Modal from "react-modal";
import "./modal.css";

// const display = {
//     display: 'block'
// };
// const hide = {
//     display: 'none'
// };
//
// class Modalx extends React.Component {
//
//     state = {
//         toggle: false
//     };
//
//
//     toggle = event => {
//         this.setState(prevState => ({
//             toggle: !prevState.toggle
//         }));
//     };
//
//     render() {
//         const modal = [];
//         modal.push(
//             <>
//                 <Modal isOpen={true}>
//
//                 <div className="modal" style={this.state.toggle ? display : hide}>
//
//                     <div className="modal-content">
//
//                         <div className="input-field col s6 ">
//                             <i className="material-icons prefix lab">mode_edit</i>
//                             <input
//                                 type="text"
//                                 id="icon_prefix22"
//                                 // value={label}
//                                 // onChange={event => onChangeForm(event.target.value)}
//                                 // onKeyDown={onSubmitForm}
//                             >
//                             </input>
//                             <label className="lab" htmlFor="icon_prefix22">What you need to do</label>
//                             {/*<a className="btn" onClick={this.toggle}>Agree</a>*/}
//
//                         </div>
//
//                     </div>
//
//                 </div>
//
//                 </Modal>
//             </>
//         );
//         return (
//             <>
//                 <a className="btn-floating btn-large waves-effect waves-light yellow darken-4" onClick={this.toggle}>
//                     <i className="material-icons">add</i></a>
//
//
//                     {modal}
//
//             </>
//         );
//     }
// }


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '55%',
        backgroundColor: '#26A69A',
        overflow: 'auto',
        borderRadius: '4px',
        outline: 'none',
        padding: '10px',
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    }
};

function ModalForm() {
    // var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <button className="btn-floating btn-large waves-effect waves-light yellow darken-4" onClick={openModal}>
                <i className="material-icons">add</i></button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                // contentLabel="Example Modal"
            >

                {/*<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>*/}
                {/*<button onClick={closeModal}>close</button>*/}
                <form>

                    <div className="modal-content">

                        <div className="input-field col s6 ">
                            <i className="material-icons prefix lab">mode_edit</i>
                            <input
                                type="text"
                                id="icon_prefix22"
                                // value={label}
                                // onChange={event => onChangeForm(event.target.value)}
                                // onKeyDown={onSubmitForm}
                            >
                            </input>
                            <label className="lab" htmlFor="icon_prefix22">What you need to do</label>
                            {/*<a className="btn" onClick={this.toggle}>Agree</a>*/}

                        </div>


                    </div>

                </form>
            </Modal>
        </div>
    );
}

export default ModalForm;