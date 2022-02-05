import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { isAuth, getCookie } from "../../../actions/auth";
import {
    createCategory, getCategories
} from "../../../actions/category";
import data from "bootstrap/js/src/dom/data";

const Category = () => {
    const [values, setValues] = useState({
        name: "",
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: false
    });

    const { name, error, success, categories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data })
            }
        });
    }


    const handleSubmit = e => {
        e.preventDefault();
        createCategory({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    error: false,
                    success: false,
                    name: '',
                    removed: !removed,
                    reload: !reload
                })
            }
        })
    };

    const handleChange = e => {
        setValues({
            ...values,
            name: e.target.name,
            error: false,
            success: false,
            removed: ''
        });
    }

    const deleteConfirm = slug => {

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='inputName'>Name</label>
                    <input
                        onChange={handleChange}
                        value={name}
                        type='text'
                        className='form-control'
                        id='inputName'
                        placeholder='Enter name'
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Create Category
                </button>
            </form>
            <div className='mt-4'>
                {categories.map(category => (
                    <button
                        onDoubleClick={() => deleteConfirm(category.slug)}
                        title='Double click to delete'
                        key={category._id}
                        type='button'
                        className='btn btn-outline-primary mr-1 mt-2'
                        data-toggle='modal'
                        data-target='#exampleModalCenter'
                    >
                        {category.name}
                    </button>
                ))}

                <div
                    className='modal fade'
                    id='exampleModalCenter'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalCenterTitle'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='exampleModalLongTitle'>
                                    Modal title
                                </h5>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                    aria-label='Close'
                                >
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>...</div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    data-dismiss='modal'
                                >
                                    Close
                                </button>
                                <button type='button' className='btn btn-primary'>
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
