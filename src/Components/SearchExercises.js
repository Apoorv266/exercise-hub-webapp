import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../Utils/fetchData';
import HorizontalScrollBar from "./HorizontalScrollBar"

const SearchExercises = ({setexercises,bodyPart,setbodyPart }) => {

  const [Search, setSearch] = useState("");
  // const [exercises, setexercises] = useState([])  // moving to homepage
  const [BodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);


  const handleSearch = async () => {   // sync because we have to pull data from API
    if (Search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      console.log(exercisesData)
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(Search) || exercise.target.toLowerCase().includes(Search) || exercise.equipment.toLowerCase().includes(Search) || exercise.bodyPart.toLowerCase().includes(Search)
      )
      setSearch('')
      setexercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: "44px", xs: '30px' }
      }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff', borderRadius: '40px'
          }}
          value={Search}   // Search value is taken from here
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn' sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: 'none',
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: '20px', xs: '12px' },
          height: "56px",
          position: "absolute",
          right: 0
        }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>
        {/*  for adding horizontal bar of exercises above search bar */}
        <HorizontalScrollBar data={BodyParts} bodyPart = {bodyPart} setbodyPart={setbodyPart} isBodyParts/>  
      </Box>
    </Stack>
  )
}

export default SearchExercises