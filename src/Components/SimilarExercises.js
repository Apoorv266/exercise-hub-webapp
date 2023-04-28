import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from "./HorizontalScrollBar"
import Loader from "./Loader"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (

    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>

    {/* for similar exercises  */}
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>


      {/* for similar equipments */}
      <Typography variant="h3" mb={5}>
        Exercises that target that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>


  )
}

export default SimilarExercises