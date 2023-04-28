import React, {useState} from 'react';
import { Box } from '@mui/system';
import HeroBanner from "../Components/HeroBanner"
import SearchExercises from "../Components/SearchExercises"
import Exercises from "../Components/Exercises"

const Home = () => {
  const [bodyPart, setbodyPart] = useState('All')
  const [exercises, setexercises] = useState([])
  return (
    <Box>
      <HeroBanner/>

      <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart}/>

      <Exercises setexercises={setexercises} bodyPart={bodyPart} exercises={exercises}/>
      
    </Box>
  )
}

export default Home