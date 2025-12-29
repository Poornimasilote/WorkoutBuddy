import { useEffect, useContext } from 'react'
import { Data } from "../../Context/WorkoutContext"
import "./RecordsStyles.css"
import {useAuthContext} from "../../Hooks/useAuthContext"

const Records = () => {
  const {user} = useAuthContext()
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } = useContext(Data)

  useEffect(() => {
  if(user){
    getWorkouts()
  }
  }, [user, getWorkouts])

  return (
    <div className="records-container">
      {workouts && workouts.map((item) => (
        <div className="record-card" key={item._id}>
          <div className="record-header">
            <h2>{item.title}</h2>
          </div>

          <div className="record-body">
            <p><span>Reps</span> {item.reps}</p>
            <p><span>Load</span> {item.load} kg</p>
          </div>

          <div className="btns">
            <button className="btn edit" onClick={() => toggleUpdate(item)}>
              Edit
            </button>
            <button className="btn delete" onClick={() => deleteWorkout(item._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Records
