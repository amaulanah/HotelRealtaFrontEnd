import React, { useState } from "react";
import { DeleteDeptRequest } from "../../../redux/action/hr/departmentAction";
import { useDispatch } from "react-redux";
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

export default function Delete(props: any) {
  const [showModal, setShowModal] = useState(false); 
  const dispatch = useDispatch();

  const deleteModal = () => {
    dispatch(DeleteDeptRequest(props.id));
    props.setRefresh(true);
    setShowModal(false);
  };
  return (
    <>
      {/* <button
        className="bg-darkBlue text-white active:bg-darkBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button> */}
      <Button icon="pi pi-trash" rounded outlined severity="danger" aria-label="Delete" tooltip="Delete" tooltipOptions={{ position: 'top' }} className="mr-2" onClick={() => setShowModal(true)} />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Delete</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none pi pi-times"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span>
                  </button>
                </div>
                {/*body*/}
                {/* <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure want to delete Department {props.name}?
                  </p>
                </div> */}
                <div className="p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Are you sure you want to delete Department `{props.name}` ?
                </p>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteModal}
                  >
                    Save Changes
                  </button>
                </div> */}
                <div className="flex justify-center py-6 border-t border-solid border-slate-200">
                        <Button label="Cancel" severity="danger" raised className="mr-2" onClick={() => setShowModal(false)} />
                        <Button label="Save" icon="pi pi-check" iconPos="right" onClick={deleteModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
