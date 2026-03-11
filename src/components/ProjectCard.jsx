import {useNavigate} from "react-router-dom"

function ProjectCard({project}){

const navigate = useNavigate()

return(

<div className="bg-white shadow p-5 rounded mb-4">

<h3 className="text-lg font-bold">{project.name}</h3>

<p>Status: {project.status}</p>
<p>Start Date: {project.startDate}</p>
<p>Location: {project.location}</p>

<button
className="mt-3 bg-green-500 text-white px-4 py-1 rounded"
onClick={()=>navigate(`/dpr/${project.id}`)}
>
Open DPR
</button>

</div>

)

}

export default ProjectCard
