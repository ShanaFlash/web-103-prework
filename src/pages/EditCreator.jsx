import { Form, redirect, useParams, useNavigate, useLoaderData } from "react-router-dom";
import supabase from "../client";

const EditCreator = () => {
    const navigate = useNavigate();
    const params = useParams();
    const creator = useLoaderData(); // Get the data from the loader
    console.log(creator);
    
    const handleDelete = async () => {
        const response = await supabase.from("creators").delete().match({ id: params.id });
        navigate("/");
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <Form method="put" action={`/edit/${params.id}`} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={creator[0].name} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="imageUrl" className="mb-2 text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={creator[0].imageUrl} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2 text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        defaultValue={creator[0].description} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="youtubeUrl" className="mb-2 text-sm font-medium text-gray-700">YouTube URL</label>
                    <input
                        type="text"
                        id="youtubeUrl"
                        name="youtubeUrl"
                        defaultValue={creator[0].youtubeUrl} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="twitterUrl" className="mb-2 text-sm font-medium text-gray-700">Twitter URL</label>
                    <input
                        type="text"
                        id="twitterUrl"
                        name="twitterUrl"
                        defaultValue={creator[0].twitterUrl} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="instagramUrl" className="mb-2 text-sm font-medium text-gray-700">Instagram URL</label>
                    <input
                        type="text"
                        id="instagramUrl"
                        name="instagramUrl"
                        defaultValue={creator[0].instagramUrl} // Set the default value from loaderData
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </Form>
            <button
                type="submit"
                className="max-w-md mx-auto mt-10 p-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default EditCreator;

export const editCreatorAction = async ({ request, params }) => {
    const formData = await request.formData();

    if (!formData) {
        return { error: "No data provided" };
    }

    console.log(params.id);

    const { error } = await supabase
        .from("creators")
        .update({
            name: formData.get("name"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
            youtubeUrl: formData.get("youtubeUrl"),
            twitterUrl: formData.get("twitterUrl"),
            instagramUrl: formData.get("instagramUrl"),
        })
        .eq("id", params.id);

    if (error) {
        console.error("Error updating creator:", error.message);
        return { error: error.message };
    }

    return redirect("/");
};
