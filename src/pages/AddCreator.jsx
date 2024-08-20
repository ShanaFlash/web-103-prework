import { Form, redirect, useActionData } from "react-router-dom";
import supabase from "../client";
const AddCreator = () => {
    const data = useActionData();
    return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <Form method="post" action="/new" className="flex flex-col space-y-4">
        <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="imageUrl" className="mb-2 text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 text-sm font-medium text-gray-700">Description</label>
            <input type="text" id="description" name="description" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="youtubeUrl" className="mb-2 text-sm font-medium text-gray-700">YouTube URL</label>
            <input type="text" id="youtubeUrl" name="youtubeUrl" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="twitterUrl" className="mb-2 text-sm font-medium text-gray-700">Twitter URL</label>
            <input type="text" id="twitterUrl" name="twitterUrl" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="instagramUrl" className="mb-2 text-sm font-medium text-gray-700">Instagram URL</label>
            <input type="text" id="instagramUrl" name="instagramUrl" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
    </Form>
    {data && data.error && <p className="text-red-500 mt-4">{data.error}</p>}
</div>
    );
}
export default AddCreator;

export const addCreatorAction = async ({request}) => {
    const formData = await request.formData();
    if(!formData){
        return {error: "No data provided"};
    }
    await supabase.from("creators").insert([
        {
            name: formData.get("name"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
            youtubeUrl: formData.get("youtubeUrl"),
            twitterUrl: formData.get("twitterUrl"),
            instagramUrl: formData.get("instagramUrl"),
        }
    ]);
    
    return redirect("/");
}