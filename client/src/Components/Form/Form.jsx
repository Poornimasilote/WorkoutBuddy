import { useContext } from 'react'
import axios from "axios"
import { Data } from "../../Context/WorkoutContext"
import "./FormStyles.css"
import {useAuthContext} from "../../Hooks/useAuthContext"

const Form = () => {

   const {user} = useAuthContext()
  
  const { workouts, setWorkouts, getWorkouts, form, setForm,updateForm, setUpdateForm } = useContext(Data)

  // Create form functions
  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const createWorkout = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/workouts", form,
      {
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
          }
    )
    setWorkouts([...workouts, response.data])
    setForm({
      title: "",
      reps: "",
      load: ""
    })
    getWorkouts();
  }

  // Update form functions
  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm, [name]: value
    })
  }

  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;
    await axios.patch(`http://localhost:4000/api/workouts/${_id}`, { title, reps, load },
       {
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
          }
    );
    getWorkouts();
    setUpdateForm({
      _id: null,
      title: "",
      reps: "",
      load: ""
    })
  }


  return (
    <>
      {/* create form */}
      {!updateForm._id && (
         <form onSubmit={createWorkout}>
        <h1>Create Record</h1>
        <label>Title</label>
        <input type="text" name="title" value={form.title} onChange={updateFormField} />
        
        <label>Reps</label>
        <input type="text" name="reps" value={form.reps} onChange={updateFormField} />
     
        <label>Load</label>
        <input type="text" name="load" value={form.load} onChange={updateFormField} />
       
        <button>Submit</button>
      </form>

      )}
     
      {/*  update form */}
       {updateForm._id && (
        <form onSubmit={updateWorkout}>
        <h1>Edit Record</h1>
        <label>Title</label>
        <input type="text" name="title" value={updateForm.title} onChange={handleUpdateFieldChange} />
        
        <label>Reps</label>
        <input type="text" name="reps" value={updateForm.reps} onChange={handleUpdateFieldChange} />
      
        <label>Load</label>
        <input type="text" name="load" value={updateForm.load} onChange={handleUpdateFieldChange} />
       
        <button>Update</button>
      </form>
       )}
      

    </>

  )
}

export default Form