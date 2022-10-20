import { useRouter } from "next/router"

export default function Movies ({movieID}) {
   const router  = useRouter(); 
   const [title, movieRes] = movieID || [];
   console.log(title);
    return (
        <>{title || "loading"}</>
    )
}

export function getServerSideProps ({query : {movieID}}) {
    return({
        props:{
            movieID
        }
    })
}