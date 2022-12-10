import { HeaderStyled, Input, Error, Button} from "./Searchbar.styled";
import { Formik, Form, ErrorMessage } from "formik";
import {ImSearch} from 'react-icons/im'
import * as yup from 'yup';

let schema = yup.object().shape({
  searchInput: yup.string().required(),
});


export const Searchbar = qeury => {
    
    console.log(qeury)
    const handleSubmit = (value, { resetForm }) => {
       
    qeury(value)
    resetForm()
    }
   
    return (
        <HeaderStyled >
            <Formik initialValues={{ searchInput:''}} validationSchema={schema} onSubmit={handleSubmit}  >
                <Form >
                    <Button type="submit"  >
                        <ImSearch/>
                    </Button>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchInput"
                    />
                    <ErrorMessage component={Error} name="searchInput" />
                </Form>
            </Formik>
        </HeaderStyled>
    )
};