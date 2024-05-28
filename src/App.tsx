import { useQuery } from '@apollo/client';
import { GET_PERSONS } from './GraphQL/Persons/GET_PERONS';
import { Employee } from './__generated__/graphql';
import './App.css'

function App() {
 
  const {data, error, loading} = useQuery(GET_PERSONS)

  if(loading) return <p> Recuperando personas </p>
  if (error) return <p> Error: {error.message}</p>

  return (
    <>
    <div className=" grid grid-cols-1 ">
      {data && data.employees.map((employee: Employee, index: number) => (
        <div key={index} className=' grid mb-4 ml-4 space-x-2 hover:bg-gray-400 p-4 border-2 rounded-2xl text-center '>
          <button>
            <p className=' font-semibold text-2xl text-orange-500'> Nombre: {employee.PerNom1}</p>
            <p>Apellido: {employee.PerApe2}</p>
            <p>Developer: {employee.IsDeveloper ? 'Si' : 'No' }</p>
            <p>DualWork: {employee.IsDualWork ? 'Si' : 'No' }</p>
            <p className=' text-cyan-500'>{employee.PerMail}</p>
            <p>Codigo: {employee.PerCod}</p>
            <p>Celular:  {employee.PerCel} </p>
          </button>
        </div>
      ))}
      </div>
   
    </>
  )
}

export default App
