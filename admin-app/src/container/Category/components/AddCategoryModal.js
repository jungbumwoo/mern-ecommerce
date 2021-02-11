import React from "react";
import Input from '../../../components/UI/Input';
import Modal from "../../../components/UI/Modal";
import {Row, Col} from "react-bootstrap";

const AddCategoryModal = (props) => {
    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage
    } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}    
        >
            <Input
                value={categoryName}
                placeholder={`Category Name`}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <select 
                className="form-control" 
                value={parentCategoryId}
                onChange={(e)=> setParentCategoryId(e.target.value)}>
                    <options>select category</options>
                    {
                        categoryList.map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
            </select>
            <input type="file" name="categoryImage" onChange={handleCategoryImage} />
        </Modal>
    )
}

export default AddCategoryModal;