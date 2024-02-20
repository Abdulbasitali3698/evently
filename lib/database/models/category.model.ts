import { Schema, model, models } from "mongoose";


export interface ICategory extends Document{
    _id:string;
    name:string;
}

const CategorySchema=new Schema({
    name:{tye:String, required:true, unique:true},
})
const category=models.category || model('category',CategorySchema);
export default category;