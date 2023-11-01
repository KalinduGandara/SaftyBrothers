import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import Modal from '../Components/Modal'
import { NewStock, NewStockSchema, NewSize, NewSizeSchema } from './StockSchema';


interface Props {
    onSubmit: (data: NewStock) => void;
    isOpen: boolean;
    onClose?: () => void;
}
function AddStockModal({ onSubmit, isOpen, onClose }: Props) {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<NewStock>({ resolver: zodResolver(NewStockSchema), defaultValues: { sizes: [{ sizeQuantity: 0, size: '-' }] } });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'sizes',
    });
    const resetForm = () => {
        reset({ itemCode: "", itemName: "", description: "", image: null, sizes: [{ sizeQuantity: 0, size: '-' }] })
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title='Add New Stock' >
                <form onSubmit={handleSubmit(data => {
                    onSubmit(data);
                    // resetForm()
                })}>
                    <div>
                        <div className='join'>
                            <div className="join join-item join-vertical w-full px-10">
                                <div className='join-item'>
                                    <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label>
                                    <input {...register("itemCode")} className="input input-sm input-bordered input-primary w-full " type="text" id='itemCode' name='itemCode' />
                                    {errors.itemCode && (<p className="text-red-500">{errors.itemCode.message}</p>)}
                                </div>
                                <div className='join-item'>
                                    <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label>
                                    <input {...register("itemName")} className="input input-sm input-bordered input-primary w-full " type="text" id='itemName' name='itemName' />
                                    {errors.itemName && (<p className="text-red-500">{errors.itemName.message}</p>)}
                                </div>
                                <div className='join-item'>
                                    <label className="label" htmlFor="description"><span className="label-text">Description</span> </label>
                                    <textarea {...register("description")} className="input input-bordered input-primary w-full " id='description' name='description' />
                                    {errors.description && (<p className="text-red-500">{errors.description.message}</p>)}
                                </div>
                                <div className='join-item'>
                                    <label className="label" htmlFor="image"><span className="label-text">Image</span> </label>
                                    <input {...register("image")} type="file" id='image' name='image' className="file-input file-input-bordered w-full max-w-xs" />
                                    {errors.image && (<p className="text-red-500">{errors.image.message}</p>)}

                                </div>
                                <div className='join join-item pt-9'>
                                    <button className='w-100 btn btn-sm  btn-primary mr-9'>Add Stock</button>
                                    <button onClick={() => { resetForm() }} className='w-100 btn btn-sm btn-error'>Reset</button>
                                    {/* <button onClick={() => {
                                        console.log(errors);
                                    }} className='w-100 btn btn-sm  btn-error'>Error</button> */}

                                </div>
                            </div>
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>Size Quantity</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fields.map((field, index) => (
                                            <tr key={field.id}>
                                                <td>
                                                    <input {...register(`sizes.${index}.size`)} className="input input-sm input-bordered input-primary w-full " />
                                                    {errors.sizes && errors.sizes[index] && (<p className='text-red-500' key={index} >{errors.sizes[index]?.size?.message}</p>)}
                                                </td>
                                                <td>
                                                    <input {...register(`sizes.${index}.sizeQuantity`, { valueAsNumber: true })} className="input input-sm input-bordered input-primary w-full mx-6" />
                                                    {errors.sizes && errors.sizes[index] && (<p className='text-red-500' key={index} >{errors.sizes[index]?.sizeQuantity?.message}</p>)}

                                                </td>
                                                {index !== 0 &&
                                                    <td><button className='btn btn-sm  btn-warning' type="button" onClick={() => remove(index)}>
                                                        Remove
                                                    </button></td>
                                                }

                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                                {errors.sizes && errors.sizes.root && (<p className='text-red-500' >{errors.sizes.root.message}</p>)}

                                <button className='btn btn-sm btn-secondary' type="button" onClick={() => append({ sizeQuantity: 0, size: '' })}>
                                    Add Size
                                </button>
                                {/* <button className='btn btn-secondary' type="button" onClick={() => console.log(errors)}>
                                    error
                                </button> */}

                            </div>


                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddStockModal