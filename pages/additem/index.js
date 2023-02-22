import { addItem, fetchCategories, postNewProduct } from '@/store/ProductList.slice';
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/AddItem.module.css'

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const categories = useSelector(state => state.products.categories)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    },[])
    const onSubmit = data => {
        dispatch(postNewProduct(data))
        // router.push('/products')
    }
    return <div className={styles.body}>
        <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
            <TextField
            label='Title'
            {...register("title",{required: true})}
            />
            
            <FormControl>
                <InputLabel id='select'>Category</InputLabel>
                <Select defaultValue='' id='select' {...register("category",{required:true})}>
                    {
                        categories.length
                        ?
                        categories.map((elm, i) => {
                            return <MenuItem key={i} value={elm}>{elm}</MenuItem>
                        })
                        :
                        <CircularProgress />
                    }
                </Select>
            </FormControl>
            <TextField 
            label='image'
            {...register("image", {required: true})}
            />
            <TextField
                label='Price'
                type='number'
                {...register("price",{required:true})}
            />
            <Button variant='contained' color='secondary' type='submit'>Sumbit</Button>
        </form>
    </div>
}

export default AddItem