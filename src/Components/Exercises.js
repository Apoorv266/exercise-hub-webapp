import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../Utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setexercises, bodyPart, exercises }) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesperPage = 9
  const indexofLastExercise = currentPage * exercisesperPage;
  const indexofFirstExercise = indexofLastExercise - exercisesperPage;
  const currentExercises = exercises.slice(indexofFirstExercise , indexofLastExercise)

  const Paginate = (e, value) =>{
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setexercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{
        gap: {
          lg: '110px',
          xs: "50px"
        }
      }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (<ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color='standard'
          shape="rounded"
          count={Math.ceil(exercises.length / exercisesperPage)}
          page={currentPage}
          onChange={Paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises