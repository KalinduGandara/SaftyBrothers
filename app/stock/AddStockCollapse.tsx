import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadWidget, CldImage, CldUploadButton, } from "next-cloudinary";
import Modal from '../Components/Modal'
import { NewStock, NewStockSchema } from './StockSchema';
import Collapse from '../Components/Collapse';


interface Props {
    onSubmit: (data: NewStock) => void;
}
interface CloudinaryResult {
    public_id: string;
}
function AddStockCollapse({ onSubmit }: Props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<NewStock>({ resolver: zodResolver(NewStockSchema) });
    const [publicId, setPublicId] = useState("");

    return (
        <>
            <Collapse buttonText='Add Stock'>
                <form onSubmit={handleSubmit(data => {
                    onSubmit({ ...data, imageID: publicId });
                    setPublicId("")
                    reset();
                })}>
                    <div>
                        <div className="join  join-vertical w-full px-10">
                            <div className='join-item'>
                                <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label>
                                <input {...register("itemCode")} className="input input-bordered input-primary w-full " type="text" id='itemCode' name='itemCode' />
                                {errors.itemCode && (<p className="text-red-500">{errors.itemCode.message}</p>)}
                            </div>
                            <div className='join-item'>
                                <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label>
                                <input {...register("itemName")} className="input input-bordered input-primary w-full " type="text" id='itemName' name='itemName' />
                                {errors.itemName && (<p className="text-red-500">{errors.itemName.message}</p>)}
                            </div>
                            <div className='join-item'>
                                <label className="label" htmlFor="itemQuantity"><span className="label-text">Quantity</span> </label>
                                <input {...register("itemQuantity", { valueAsNumber: true })} className="input input-bordered input-primary w-full " type="number" id='itemQuantity' name='itemQuantity' />
                                {errors.itemQuantity && (<p className="text-red-500">{errors.itemQuantity.message}</p>)}
                            </div>

                            <div className='join-item pt-4'>

                                <CldUploadWidget
                                    uploadPreset="avhzilv3"
                                    options={{
                                        sources: ["local"],
                                        multiple: false,
                                        maxFiles: 1,
                                    }}
                                    onUpload={(result, widget) => {
                                        if (result.event !== "success") return;
                                        const info = result.info as CloudinaryResult;
                                        setPublicId(info.public_id);
                                    }}
                                >
                                    {({ open }) => (
                                        <div className='mt-5'>
                                            <div
                                                className="btn btn-primary"
                                                onClick={() => open()}
                                            >
                                                Upload Image
                                            </div>
                                        </div>
                                    )}
                                </CldUploadWidget>
                            </div>

                            {publicId && (
                                <CldImage
                                    src={publicId}
                                    width={270}
                                    height={180}
                                    alt="Uploded Image"
                                />
                            )}
                            <div className='join-item pt-9'>
                                <button className='w-100 btn btn-primary'>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Collapse>
        </>
    )
}

export default AddStockCollapse