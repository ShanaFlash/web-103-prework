import { useState } from 'react'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'
import supabase from '../client'

const ShowCreators = () => {
    const creators = useLoaderData()

    return (
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {
                creators.length > 0 ? (
                    creators.map((creator, index) => (
                        <Card
                            key={index}
                            id={creator.id}
                            name={creator.name}
                            description={creator.description}
                            imageURL={creator.imageUrl} // Ensure this matches your database field
                            youtubeUrl={creator.youtubeUrl}
                            twitterUrl={creator.twitterUrl}
                            instagramUrl={creator.instagramUrl}
                        />
                    ))
                ) : (
                    <p>No creators found.</p>
                )
            }
        </div>
    )
}
export default ShowCreators;

export const showCreatorsLoader = async () => {
    const { data, error } = await supabase
        .from('creators')
        .select('*');

    if (error) {
        console.error('Error loading creators:', error.message);
        return [];  // Return an empty array in case of error
    }

    return data || [];  // Return data or an empty array if no creators found
}
