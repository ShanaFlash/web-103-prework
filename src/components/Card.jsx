import { useNavigate } from "react-router-dom";
const Card = ({id, name, youtubeUrl, twitterUrl, instagramUrl, description, imageURL }) => {
    const navigate = useNavigate();
    return (
        <div className="card flex flex-col p-4 bg-white shadow-md rounded-lg relative items-center justify-center" 
            style={{
                backgroundImage: `url(${imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px', // Fixed width
                height: '300px', // Fixed height
            }}>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex gap-2">
                    <button className="bg-gray-500" onClick={() => navigate(`/${id}`)}>View</button>
                    <button className="bg-gray-500" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-4 mr-auto">
                {
                    youtubeUrl && (

                        <a href={youtubeUrl} className="text-blue-300 hover:underline">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.11-2.11C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.576a2.999 2.999 0 0 0-2.11 2.11C0 8.073 0 12 0 12s0 3.927.502 5.814a2.999 2.999 0 0 0 2.11 2.11C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.576a2.999 2.999 0 0 0 2.11-2.11C24 15.927 24 12 24 12s0-3.927-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" fill="currentColor"/>
                            </svg>
                        </a>
                    )
                }
                                {
                    twitterUrl && (

                <a href={twitterUrl} className="text-blue-300 hover:underline">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.779-.023-1.17-.067a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0 0 24 4.59a9.72 9.72 0 0 1-2.046.559z" fill="currentColor"/>
                    </svg>
                </a>
                                    )
                                }
                                                                {
                    instagramUrl && (

                <a href={instagramUrl} className="text-blue-300 hover:underline">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.773.128 4.548.334 3.5 1.382 2.452 2.43 2.246 3.655 2.188 4.934.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.279.264 2.504 1.312 3.552 1.048 1.048 2.273 1.254 3.552 1.312 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.279-.058 2.504-.264 3.552-1.312 1.048-1.048 1.254-2.273 1.312-3.552.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.279-.264-2.504-1.312-3.552-1.048-1.048-2.273-1.254-3.552-1.312-1.28-.058-1.689-.07-4.948-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" fill="currentColor"/>
                    </svg>
                </a>
            )
        }
            </div>
            {
                description !==null ? (
                    <p className="text-left mt-5">{description}</p>
                ) : (                    <p className="text-left mt-5">No Description</p>)
            }
        </div>
    );
}
export default Card;