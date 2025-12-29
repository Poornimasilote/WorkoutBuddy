import { createContext, useState } from "react"
import axios from "axios"
import {useAuthContext} from "../Hooks/useAuthContext"

export const Data = createContext()

const WorkoutContext = ({ children }) => {
    // for user id create at backend for authentication
    const {user}= useAuthContext()

    // State for getting the data
    const [workouts, setWorkouts] = useState(null)

    // Get request function
    const getWorkouts = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/workouts`,{
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
        })
        const data = response.data
        setWorkouts(data)
    }

    //State for posting data
    const [form, setForm] = useState({
        title: "",
        reps: "",
        load: ""
    })

    // delete request
    const deleteWorkout = async (_id) => {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/workouts${_id}`,
             {
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
          }
        )
        getWorkouts();
    }

    // //update request state
    const [updateForm, setUpdateForm] = useState({
        _id: null,
        title: "",
        reps: "",
        load: ""
    })

    const toggleUpdate = (item) => {
        setUpdateForm({
            _id: item._id,
            title: item.title,
            reps: item.reps,
            load: item.load
        })
    }



    return (
        <>
            <Data.Provider value={{ workouts, setWorkouts, form, setForm, getWorkouts, deleteWorkout, toggleUpdate, updateForm, setUpdateForm }}>
                {children}
            </Data.Provider>
        </>
    )
}

export default WorkoutContext